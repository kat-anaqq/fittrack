import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Dumbbell, List, Settings as SettingsIcon, Plus, X, Check, 
  ChevronRight, ChevronLeft, ChevronDown, ChevronUp, TrendingUp, 
  Play, Clock, Trash2, Trophy, Calendar, Moon, Sun, Scale, 
  Edit2, Download, Upload, FileSpreadsheet
} from 'lucide-react';

// --- ИМПОРТЫ И НАСТРОЙКА FIREBASE ---
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";
import { 
  getFirestore, collection, doc, setDoc, deleteDoc, 
  onSnapshot, enableIndexedDbPersistence 
} from "firebase/firestore";

const defaultFirebaseConfig = {
  apiKey: "AIzaSyC7rhKGxbnJQHFlP8aAA70fIAdyfz9wTYk",
  authDomain: "fitrack-60514.firebaseapp.com",
  projectId: "fitrack-60514",
  storageBucket: "fitrack-60514.firebasestorage.app",
  messagingSenderId: "986717353729",
  appId: "1:986717353729:web:74d402965ea391fdf00d00",
  measurementId: "G-BL2CQLX8GQ"
};

const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : defaultFirebaseConfig;

const app = initializeApp(firebaseConfig);
let analytics;
try { analytics = getAnalytics(app); } catch (e) {} 
const auth = getAuth(app);
const db = getFirestore(app);

// ВКЛЮЧАЕМ OFFLINE-КЭШИРОВАНИЕ
try {
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn("Persistence failed: multiple tabs open.");
    } else if (err.code === 'unimplemented') {
      console.warn("Persistence failed: browser not supported.");
    }
  });
} catch (e) {}

// Очищаем APP_ID от слешей для путей Firestore
const rawId = typeof __app_id !== 'undefined' ? __app_id : 'fitrack-default';
const APP_ID = rawId.replace(/\//g, '_');

const INITIAL_EXERCISES = [
  { id: '1', name: 'Жим лежа', bodyPart: 'Грудь' },
  { id: '2', name: 'Приседания со штангой', bodyPart: 'Ноги' },
  { id: '3', name: 'Становая тяга', bodyPart: 'Спина' },
  { id: '4', name: 'Подтягивания', bodyPart: 'Спина' },
  { id: '5', name: 'Жим гантелей сидя', bodyPart: 'Плечи' },
  { id: '6', name: 'Сгибания рук с штангой', bodyPart: 'Бицепс' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('workouts');
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weightUnit, setWeightUnit] = useState('кг');

  const [user, setUser] = useState(null);
  const [isSyncing, setIsSyncing] = useState(true);
  const [authError, setAuthError] = useState(null);

  const [activeWorkout, setActiveWorkout] = useState(null);
  const [selectedExerciseForStats, setSelectedExerciseForStats] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [currentMonthView, setCurrentMonthView] = useState(new Date());
  const [isManagingExercises, setIsManagingExercises] = useState(false);
  const [exerciseToEdit, setExerciseToEdit] = useState(null);

  // --- ЛОГИКА АВТОРИЗАЦИИ ---
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Auth error:", error);
        setAuthError(error.message);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) setIsSyncing(false);
    });
    return () => unsubscribe();
  }, []);

  // --- СИНХРОНИЗАЦИЯ ДАННЫХ ---
  useEffect(() => {
    if (!user) return;

    const workoutsRef = collection(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts');
    const exercisesRef = collection(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises');
    const settingsRef = doc(db, 'artifacts', APP_ID, 'users', user.uid, 'settings', 'userSettings');

    const unsubWorkouts = onSnapshot(workoutsRef, (snapshot) => {
      const w = snapshot.docs.map(d => d.data());
      setWorkouts(w.sort((a, b) => (b.startTime || 0) - (a.startTime || 0))); 
      setIsSyncing(false);
    });

    const unsubExercises = onSnapshot(exercisesRef, (snapshot) => {
      if (snapshot.empty) {
        INITIAL_EXERCISES.forEach(ex => setDoc(doc(exercisesRef, ex.id), ex));
      } else {
        setExercises(snapshot.docs.map(d => d.data()));
      }
    });

    const unsubSettings = onSnapshot(settingsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.weightUnit) setWeightUnit(data.weightUnit);
        if (data.isDarkMode !== undefined) setIsDarkMode(data.isDarkMode);
      }
    });

    return () => {
      unsubWorkouts();
      unsubExercises();
      unsubSettings();
    };
  }, [user]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---
  const generateId = () => Math.random().toString(36).substr(2, 9);
  const formatDate = (ts) => new Date(ts).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
  const toISODate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };
  const getWeekDays = (date) => {
    const current = new Date(date);
    const day = current.getDay();
    const diff = current.getDate() - day + (day === 0 ? -6 : 1); 
    const monday = new Date(current.setDate(diff));
    const week = [];
    for (let i = 0; i < 7; i++) {
        week.push(new Date(monday.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return week;
  };

  const updateSetting = async (key, value) => {
    if (key === 'weightUnit') setWeightUnit(value);
    if (key === 'isDarkMode') setIsDarkMode(value);
    if (!user) return;
    try {
      await setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'settings', 'userSettings'), { [key]: value }, { merge: true });
    } catch (e) { console.error(e); }
  };

  const handleFinishWorkout = async () => {
    if (!activeWorkout || !user) return;
    let vol = 0;
    const compEx = activeWorkout.exercises.map(ex => {
      const cSets = ex.sets.filter(s => s.completed);
      cSets.forEach(s => { vol += (parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0); });
      return { ...ex, sets: cSets };
    }).filter(ex => ex.sets.length > 0);

    try {
      if (compEx.length > 0) {
        const fin = { ...activeWorkout, exercises: compEx, volume: vol };
        await setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', fin.id), fin);
      } else {
        await deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', activeWorkout.id));
      }
      setActiveWorkout(null);
    } catch (e) { console.error(e); }
  };

  // --- ЭКРАНЫ ---
  const renderStats = () => {
    const totalW = workouts.length;
    const totalV = workouts.reduce((s, w) => s + (w.volume || 0), 0);
    return (
      <div className="space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10">Статистика</h1>
        <div className="grid grid-cols-2 gap-4 px-4 md:px-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4"><Dumbbell className="text-blue-500" size={24} /></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Тренировок</p>
            <p className="text-3xl font-bold">{totalW}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4"><Trophy className="text-green-500" size={24} /></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Тоннаж ({weightUnit})</p>
            <p className="text-3xl font-bold">{totalV}</p>
          </div>
        </div>
        <div className="px-4 md:px-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">Прогресс по упражнениям</h2>
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            {exercises.map((ex, idx) => (
              <button key={ex.id} onClick={() => setSelectedExerciseForStats(ex)} className={`w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${idx !== exercises.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                <div><h3 className="font-medium text-gray-900 dark:text-white md:text-lg">{ex.name}</h3><p className="text-sm text-gray-500">{ex.bodyPart}</p></div>
                <ChevronRight className="text-gray-300" size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderWorkouts = () => {
    const isoSelected = toISODate(selectedDate);
    const dayWorkouts = workouts.filter(w => toISODate(w.startTime) === isoSelected);
    
    // Календарная сетка
    const daysInMonth = new Date(currentMonthView.getFullYear(), currentMonthView.getMonth() + 1, 0).getDate();
    const firstDayIndex = (new Date(currentMonthView.getFullYear(), currentMonthView.getMonth(), 1).getDay() + 6) % 7; 
    const prevMonth = () => setCurrentMonthView(new Date(currentMonthView.getFullYear(), currentMonthView.getMonth() - 1, 1));
    const nextMonth = () => setCurrentMonthView(new Date(currentMonthView.getFullYear(), currentMonthView.getMonth() + 1, 1));

    const weekDays = getWeekDays(selectedDate);

    return (
      <div className="space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 mt-6 md:mt-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Тренировки</h1>
          <button 
            onClick={() => {
              setIsCalendarExpanded(!isCalendarExpanded);
              if (!isCalendarExpanded) setCurrentMonthView(new Date(selectedDate));
            }} 
            className={`p-3 rounded-full shadow-sm transition-colors ${isCalendarExpanded ? 'bg-blue-500 text-white' : 'text-blue-500 bg-blue-50 dark:bg-blue-900/30'}`}
          >
            {isCalendarExpanded ? <ChevronUp size={24} /> : <Calendar size={24} />}
          </button>
        </div>

        <div className="px-4 md:px-8">
          {isCalendarExpanded ? (
            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-4 duration-200">
              <div className="flex justify-between items-center mb-6">
                <button onClick={prevMonth} className="p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full"><ChevronLeft size={20}/></button>
                <span className="font-bold text-lg capitalize">{currentMonthView.toLocaleString('ru-RU', {month: 'long', year: 'numeric'})}</span>
                <button onClick={nextMonth} className="p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full"><ChevronRight size={20}/></button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => <div key={day} className="text-xs font-bold text-gray-400">{day}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({length: firstDayIndex}).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({length: daysInMonth}).map((_, i) => {
                  const dayDate = new Date(currentMonthView.getFullYear(), currentMonthView.getMonth(), i + 1);
                  const iso = toISODate(dayDate);
                  const isSel = isoSelected === iso;
                  const hasW = workouts.some(w => toISODate(w.startTime) === iso);
                  return (
                    <button key={iso} onClick={() => { setSelectedDate(dayDate); setIsCalendarExpanded(false); }} className={`h-10 w-full rounded-xl flex flex-col items-center justify-center relative ${isSel ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100'}`}>
                      <span className="text-sm font-bold">{i + 1}</span>
                      {hasW && <div className={`w-1 h-1 rounded-full absolute bottom-1 ${isSel ? 'bg-white' : 'bg-blue-500'}`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-2 md:p-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 gap-1 md:gap-3">
              {weekDays.map(d => {
                const iso = toISODate(d);
                const isSel = isoSelected === iso;
                const hasW = workouts.some(w => toISODate(w.startTime) === iso);
                return (
                  <button key={iso} onClick={() => setSelectedDate(d)} className={`flex flex-col items-center justify-center flex-1 aspect-[3/4] md:aspect-square rounded-2xl transition-all ${isSel ? 'bg-blue-500 text-white shadow-md scale-105' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                    <span className="text-[10px] md:text-xs font-medium uppercase mb-1">{d.toLocaleDateString('ru-RU', {weekday: 'short'})}</span>
                    <span className={`text-lg md:text-2xl font-bold leading-none ${isSel ? 'text-white' : 'text-gray-900 dark:text-gray-200'}`}>{d.getDate()}</span>
                    {hasW && <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${isSel ? 'bg-white' : 'bg-blue-500'}`} />}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="px-4 md:px-8">
          <button onClick={() => setActiveWorkout({ id: generateId(), startTime: selectedDate.getTime(), exercises: [] })} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 md:py-5 text-lg rounded-3xl flex items-center justify-center shadow-lg active:scale-95 transition-transform"><Plus size={24} className="mr-2" />Добавить тренировку</button>
        </div>
        <div className="px-4 md:px-8 space-y-4">
          <h2 className="text-xl font-semibold capitalize">{formatDate(selectedDate.getTime())}</h2>
          {dayWorkouts.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm text-gray-400">
              <Dumbbell className="mx-auto mb-4" size={56} /><p>Нет тренировок в этот день.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {dayWorkouts.map(w => <WorkoutCard key={w.id} workout={w} weightUnit={weightUnit} user={user} onEdit={setActiveWorkout} />)}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSettings = () => (
    <div className="space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10">Настройки</h1>
      <div className="px-4 md:px-8 space-y-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-4"><div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">{isDarkMode ? <Moon className="text-indigo-500" /> : <Sun className="text-orange-500" />}</div><span className="font-medium text-lg">Темная тема</span></div>
            <button onClick={() => updateSetting('isDarkMode', !isDarkMode)} className={`w-14 h-8 rounded-full flex items-center px-1 transition-colors ${isDarkMode ? 'bg-green-500' : 'bg-gray-200'}`}><div className={`w-6 h-6 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : ''}`} /></button>
          </div>
          <button onClick={() => updateSetting('weightUnit', weightUnit === 'кг' ? 'lbs' : 'кг')} className="w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-4"><div className="p-3 rounded-2xl bg-green-100 dark:bg-green-900/30"><Scale className="text-green-500" /></div><span className="font-medium text-lg">Единицы веса</span></div>
            <span className="font-bold text-blue-500 uppercase">{weightUnit}</span>
          </button>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          <button onClick={() => setIsManagingExercises(true)} className="w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-4"><div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30"><Dumbbell className="text-purple-500" /></div><span className="font-medium text-lg">База упражнений</span></div>
            <ChevronRight className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );

  if (isSyncing && workouts.length === 0) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center p-6 ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-[#f2f2f7] text-gray-900'}`}>
        <div className="flex flex-col items-center gap-4 animate-pulse text-blue-500">
          <Dumbbell size={48} className="animate-spin-slow" />
          <p className="font-medium text-gray-500">Синхронизация данных...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 flex justify-center ${isDarkMode ? 'dark bg-gray-950' : 'bg-white'}`}>
      <div className="w-full h-full bg-[#f2f2f7] dark:bg-gray-950 relative overflow-hidden flex flex-col md:flex-row transition-colors">
        {/* SIDEBAR (ПК) */}
        <div className="hidden md:flex w-72 flex-col bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 p-6 z-40">
          <div className="flex items-center gap-3 mb-12 text-blue-500"><Dumbbell size={36} strokeWidth={2.5} /><h1 className="text-2xl font-extrabold tracking-tight">FitTrack</h1></div>
          <nav className="flex flex-col gap-3">
            {['stats', 'workouts', 'settings'].map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === t ? 'bg-blue-500 shadow-md text-white' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                {t === 'stats' && <BarChart />} {t === 'workouts' && <List />} {t === 'settings' && <SettingsIcon />}
                <span className="font-semibold text-lg capitalize">{t === 'stats' ? 'Статистика' : t === 'workouts' ? 'Тренировки' : 'Настройки'}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 h-full overflow-y-auto relative">
          {activeTab === 'stats' && renderStats()}
          {activeTab === 'workouts' && renderWorkouts()}
          {activeTab === 'settings' && renderSettings()}
        </div>

        {/* BOTTOM NAV (МОБИЛКА) */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 flex justify-between z-40">
          {['stats', 'workouts', 'settings'].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} className={`flex flex-col items-center p-2 ${activeTab === t ? 'text-blue-500' : 'text-gray-400'}`}>
              {t === 'stats' && <BarChart />} {t === 'workouts' && <List />} {t === 'settings' && <SettingsIcon />}
              <span className="text-[10px] font-medium mt-1 uppercase">{t === 'stats' ? 'Стат' : t === 'workouts' ? 'Трени' : 'Настр'}</span>
            </button>
          ))}
        </div>

        {/* МОДАЛКИ */}
        {activeWorkout && <ActiveWorkoutModal workout={activeWorkout} setWorkout={setActiveWorkout} exercises={exercises} weightUnit={weightUnit} onFinish={handleFinishWorkout} onCancel={() => setActiveWorkout(null)} />}
        {selectedExerciseForStats && <ExerciseStatsModal exercise={selectedExerciseForStats} workouts={workouts} weightUnit={weightUnit} onClose={() => setSelectedExerciseForStats(null)} />}
        {isManagingExercises && <ManageExercisesModal exercises={exercises} onClose={() => setIsManagingExercises(false)} onAdd={() => setExerciseToEdit({ name: '', bodyPart: 'Грудь' })} onEdit={setExerciseToEdit} onDelete={(id) => deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', id))} />}
        {exerciseToEdit && <ExerciseFormModal initialData={exerciseToEdit} onSave={(data) => {
          const id = data.id || generateId();
          setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', id), { ...data, id });
          setExerciseToEdit(null);
        }} onClose={() => setExerciseToEdit(null)} />}
      </div>
    </div>
  );
}

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

function WorkoutCard({ workout, weightUnit, user, onEdit }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Тренировка</h3>
            <button onClick={() => onEdit(workout)} className="text-gray-400 hover:text-blue-500 p-1"><Edit2 size={16} /></button>
            <button onClick={() => deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', workout.id))} className="text-gray-400 hover:text-red-500 p-1"><Trash2 size={16} /></button>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1"><Clock size={14} className="mr-1" />{new Date(workout.startTime).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">{workout.volume} {weightUnit}</div>
      </div>
      <div className="space-y-2">
        {workout.exercises.map(ex => (
          <div key={ex.id} className="text-sm flex justify-between border-b border-gray-50 dark:border-gray-800/50 pb-2 last:border-0 last:pb-0">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{ex.name}</span>
            <span className="text-gray-500 dark:text-gray-500">{ex.sets.length} сетов</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActiveWorkoutModal({ workout, setWorkout, exercises, weightUnit, onFinish, onCancel }) {
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:items-center md:justify-center bg-black/50 backdrop-blur-sm p-0 md:p-6">
      <div className="bg-[#f2f2f7] dark:bg-gray-950 w-full h-full md:max-w-2xl md:h-[90vh] md:rounded-[32px] flex flex-col overflow-hidden shadow-2xl relative">
        <div className="bg-white dark:bg-gray-900 px-6 py-5 flex justify-between items-center shadow-sm z-10">
          <button onClick={onCancel} className="text-gray-500">Отменить</button>
          <h2 className="text-lg font-bold">Тренировка</h2>
          <button onClick={onFinish} className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold">Завершить</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {workout.exercises.map((wEx) => (
            <div key={wEx.id} className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 flex justify-between items-center bg-gray-50">
                <h3 className="font-semibold text-blue-600">{wEx.name}</h3>
                <button onClick={() => setWorkout({...workout, exercises: workout.exercises.filter(e => e.id !== wEx.id)})} className="text-red-400 p-2"><Trash2 size={18} /></button>
              </div>
              <div className="p-3">
                {wEx.sets.map((set, i) => (
                  <div key={set.id} className={`grid grid-cols-4 gap-2 items-center mb-2 p-2 rounded-xl ${set.completed ? 'bg-green-50' : ''}`}>
                    <div className="text-center font-bold text-gray-400">{i + 1}</div>
                    <input type="number" value={set.weight} onChange={(e) => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: ex.sets.map(s => s.id === set.id ? {...s, weight: e.target.value} : s)} : ex)})} className="w-full bg-gray-100 p-2 rounded-xl text-center font-bold" placeholder="Вес"/>
                    <input type="number" value={set.reps} onChange={(e) => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: ex.sets.map(s => s.id === set.id ? {...s, reps: e.target.value} : s)} : ex)})} className="w-full bg-gray-100 p-2 rounded-xl text-center font-bold" placeholder="Повт"/>
                    <button onClick={() => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: ex.sets.map(s => s.id === set.id ? {...s, completed: !s.completed} : s)} : ex)})} className={`w-10 h-10 rounded-xl flex items-center justify-center ${set.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}><Check size={20} /></button>
                  </div>
                ))}
                <button onClick={() => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: [...ex.sets, {id: Math.random().toString(), weight: '', reps: '', completed: false}]} : ex)})} className="w-full mt-4 py-3 text-blue-500 font-bold flex items-center justify-center"><Plus size={20} /> Сет</button>
              </div>
            </div>
          ))}
          <button onClick={() => setIsSelecting(true)} className="w-full py-5 border-2 border-dashed border-blue-200 text-blue-500 font-bold rounded-3xl flex items-center justify-center"><Plus size={24} /> Упражнение</button>
        </div>
        {isSelecting && (
          <div className="absolute inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col animate-in slide-in-from-bottom-10">
            <div className="p-6 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold">Выбрать упражнение</h2>
              <button onClick={() => setIsSelecting(false)}><X size={32} /></button>
            </div>
            <div className="p-4 space-y-3 overflow-y-auto">
              {exercises.map(ex => (
                <button key={ex.id} onClick={() => { setWorkout({...workout, exercises: [...workout.exercises, {id: Math.random().toString(), exerciseId: ex.id, name: ex.name, sets: [{id: Math.random().toString(), weight: '', reps: '', completed: false}]}]}); setIsSelecting(false); }} className="w-full p-5 bg-gray-50 rounded-2xl text-left hover:bg-blue-50">
                  <div className="font-bold text-lg">{ex.name}</div>
                  <div className="text-sm text-gray-500">{ex.bodyPart}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ExerciseStatsModal({ exercise, workouts, weightUnit, onClose }) {
  const history = workouts.filter(w => w.exercises.some(e => e.exerciseId === exercise.id));
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:items-center md:justify-center bg-black/50 backdrop-blur-sm p-0 md:p-6">
      <div className="bg-[#f2f2f7] dark:bg-gray-950 w-full h-full md:max-w-2xl md:rounded-[32px] flex flex-col overflow-hidden">
        <div className="p-6 bg-white dark:bg-gray-900 flex items-center gap-4 border-b">
          <button onClick={onClose}><ChevronLeft size={32} /></button>
          <h2 className="text-2xl font-bold">{exercise.name}</h2>
        </div>
        <div className="p-6 overflow-y-auto space-y-4">
          {history.length === 0 ? <p className="text-center text-gray-500 py-10">История пуста</p> : history.map(w => {
            const exData = w.exercises.find(e => e.exerciseId === exercise.id);
            return (
              <div key={w.id} className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border">
                <div className="font-bold text-blue-500 mb-2">{new Date(w.startTime).toLocaleDateString()}</div>
                <div className="grid grid-cols-2 gap-2">
                  {exData.sets.map((s, i) => <div key={i} className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">{i+1}. {s.weight} {weightUnit} x {s.reps}</div>)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ManageExercisesModal({ exercises, onClose, onAdd, onEdit, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:items-center md:justify-center bg-black/50 backdrop-blur-sm p-0 md:p-6">
      <div className="bg-[#f2f2f7] dark:bg-gray-950 w-full h-full md:max-w-2xl md:rounded-[32px] flex flex-col overflow-hidden">
        <div className="p-6 bg-white dark:bg-gray-900 flex justify-between items-center border-b">
          <button onClick={onClose}><ChevronLeft size={32} /></button>
          <h2 className="text-xl font-bold">База упражнений</h2>
          <button onClick={onAdd} className="bg-blue-500 text-white p-2 rounded-full"><Plus /></button>
        </div>
        <div className="p-4 space-y-2 overflow-y-auto">
          {exercises.map(ex => (
            <div key={ex.id} className="bg-white dark:bg-gray-900 p-4 rounded-2xl flex justify-between items-center shadow-sm">
              <div><div className="font-bold">{ex.name}</div><div className="text-sm text-gray-500">{ex.bodyPart}</div></div>
              <div className="flex gap-2">
                <button onClick={() => onEdit(ex)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-500"><Edit2 size={18} /></button>
                <button onClick={() => onDelete(ex.id)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500"><Trash2 size={18}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExerciseFormModal({ initialData, onSave, onClose }) {
  const [name, setName] = useState(initialData?.name || '');
  const [part, setPart] = useState(initialData?.bodyPart || 'Грудь');
  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-3xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold mb-4">{initialData?.id ? 'Изменить' : 'Новое упражнение'}</h2>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl mb-4 outline-none border focus:border-blue-500" placeholder="Название"/>
        <select value={part} onChange={e => setPart(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl mb-6 outline-none border focus:border-blue-500">
          {['Грудь', 'Спина', 'Ноги', 'Плечи', 'Бицепс', 'Трицепс', 'Пресс', 'Кардио'].map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-4 bg-gray-100 rounded-2xl font-bold">Отмена</button>
          <button onClick={() => onSave({id: initialData?.id, name, bodyPart: part})} className="flex-1 py-4 bg-blue-500 text-white rounded-2xl font-bold">Сохранить</button>
        </div>
      </div>
    </div>
  );
}