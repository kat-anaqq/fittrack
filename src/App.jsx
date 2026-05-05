import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Dumbbell, List, Settings as SettingsIcon, Plus, X, Check, 
  ChevronRight, ChevronLeft, ChevronDown, ChevronUp, TrendingUp, 
  Play, Clock, Trash2, Trophy, Calendar, Moon, Sun, Scale, 
  Edit2, Download, Upload, FileSpreadsheet
} from 'lucide-react';

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
const auth = getAuth(app);
const db = getFirestore(app);

try {
  enableIndexedDbPersistence(db).catch(() => {});
} catch (e) {}

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
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [selectedExerciseForStats, setSelectedExerciseForStats] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [currentMonthView, setCurrentMonthView] = useState(new Date());
  const [isManagingExercises, setIsManagingExercises] = useState(false);
  const [exerciseToEdit, setExerciseToEdit] = useState(null);

  useEffect(() => {
    signInAnonymously(auth).catch(console.error);
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) setIsSyncing(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const workoutsRef = collection(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts');
    const exercisesRef = collection(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises');
    const settingsRef = doc(db, 'artifacts', APP_ID, 'users', user.uid, 'settings', 'userSettings');

    const unsubW = onSnapshot(workoutsRef, (s) => {
      setWorkouts(s.docs.map(d => d.data()).sort((a, b) => b.startTime - a.startTime));
      setIsSyncing(false);
    });
    const unsubE = onSnapshot(exercisesRef, (s) => {
      if (s.empty) INITIAL_EXERCISES.forEach(ex => setDoc(doc(exercisesRef, ex.id), ex));
      else setExercises(s.docs.map(d => d.data()));
    });
    const unsubS = onSnapshot(settingsRef, (d) => {
      if (d.exists()) {
        const data = d.data();
        if (data.weightUnit) setWeightUnit(data.weightUnit);
        if (data.isDarkMode !== undefined) setIsDarkMode(data.isDarkMode);
      }
    });
    return () => { unsubW(); unsubE(); unsubS(); };
  }, [user]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toISODate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const renderStats = () => {
    const totalW = workouts.length;
    const totalV = workouts.reduce((s, w) => s + (w.volume || 0), 0);
    return (
      <div className="space-y-6 pb-32 md:pb-8 animate-in fade-in max-w-5xl mx-auto text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold px-4 md:px-8 mt-10">Статистика</h1>
        <div className="grid grid-cols-2 gap-4 px-4 md:px-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4"><Dumbbell className="text-blue-500" size={24} /></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Тренировок</p>
            <p className="text-3xl font-bold dark:text-white">{totalW}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4"><Trophy className="text-green-500" size={24} /></div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Тоннаж ({weightUnit})</p>
            <p className="text-3xl font-bold dark:text-white">{totalV}</p>
          </div>
        </div>
        <div className="px-4 md:px-8 space-y-4">
          <h2 className="text-lg font-semibold mt-4">Прогресс по упражнениям</h2>
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            {exercises.map((ex, idx) => (
              <button key={ex.id} onClick={() => setSelectedExerciseForStats(ex)} className={`w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 ${idx !== exercises.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                <div><h3 className="font-medium dark:text-white">{ex.name}</h3><p className="text-sm text-gray-500">{ex.bodyPart}</p></div>
                <ChevronRight className="text-gray-300" size={20} />
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
    const weekDays = [];
    const curr = new Date(selectedDate);
    const first = curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1);
    for(let i=0; i<7; i++) weekDays.push(new Date(new Date(selectedDate).setDate(first + i)));

    return (
      <div className="space-y-6 pb-32 md:pb-8 animate-in fade-in max-w-5xl mx-auto text-gray-900 dark:text-white">
        <div className="flex justify-between items-center px-4 md:px-8 mt-10">
          <h1 className="text-3xl font-bold">Тренировки</h1>
          <button onClick={() => setIsCalendarExpanded(!isCalendarExpanded)} className="p-3 text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full"><Calendar size={24} /></button>
        </div>
        <div className="px-4 md:px-8">
            <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-2 rounded-3xl border dark:border-gray-800 shadow-sm">
                {weekDays.map(d => {
                    const isSel = isoSelected === toISODate(d);
                    return (
                        <button key={d.toString()} onClick={() => setSelectedDate(d)} className={`flex flex-col items-center justify-center flex-1 py-3 rounded-2xl ${isSel ? 'bg-blue-500 text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                            <span className="text-[10px] uppercase mb-1">{d.toLocaleDateString('ru-RU', {weekday: 'short'})}</span>
                            <span className="text-lg font-bold">{d.getDate()}</span>
                        </button>
                    )
                })}
            </div>
        </div>
        <div className="px-4 md:px-8">
          <button onClick={() => setActiveWorkout({ id: Math.random().toString(36).substr(2, 9), startTime: selectedDate.getTime(), exercises: [] })} className="w-full bg-blue-500 text-white font-bold py-5 rounded-3xl flex items-center justify-center shadow-lg active:scale-95 transition-transform"><Plus size={24} className="mr-2" />Добавить тренировку</button>
        </div>
        <div className="px-4 md:px-8 space-y-4">
          <h2 className="text-xl font-semibold capitalize">{selectedDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</h2>
          {dayWorkouts.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border dark:border-gray-800 text-gray-400"><Dumbbell className="mx-auto mb-4 opacity-20" size={56} /><p>Нет тренировок</p></div>
          ) : (
            <div className="grid gap-4">{dayWorkouts.map(w => <WorkoutCard key={w.id} workout={w} weightUnit={weightUnit} user={user} onEdit={setActiveWorkout} />)}</div>
          )}
        </div>
      </div>
    );
  };

  const renderSettings = () => (
    <div className="space-y-6 pb-32 md:pb-8 animate-in fade-in max-w-3xl mx-auto text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold px-4 md:px-8 mt-10">Настройки</h1>
      <div className="px-4 md:px-8 space-y-6">
        <div className="bg-white dark:bg-gray-900 rounded-3xl border dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="p-6 flex items-center justify-between border-b dark:border-gray-800">
            <div className="flex items-center gap-4"><div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30">{isDarkMode ? <Moon className="text-indigo-500" /> : <Sun className="text-orange-500" />}</div><span className="font-medium text-lg">Темная тема</span></div>
            <button onClick={() => setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'settings', 'userSettings'), { isDarkMode: !isDarkMode }, { merge: true })} className={`w-14 h-8 rounded-full flex items-center px-1 transition-colors ${isDarkMode ? 'bg-green-500' : 'bg-gray-200'}`}><div className={`w-6 h-6 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : ''}`} /></button>
          </div>
          <button onClick={() => setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'settings', 'userSettings'), { weightUnit: weightUnit === 'кг' ? 'lbs' : 'кг' }, { merge: true })} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-4"><div className="p-3 rounded-2xl bg-green-50 dark:bg-green-900/30"><Scale className="text-green-500" /></div><span className="font-medium text-lg">Единицы веса</span></div>
            <span className="font-bold text-blue-500 uppercase">{weightUnit}</span>
          </button>
          <button onClick={() => setIsManagingExercises(true)} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-t dark:border-gray-800">
            <div className="flex items-center gap-4"><div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30"><Dumbbell className="text-purple-500" /></div><span className="font-medium text-lg">База упражнений</span></div>
            <ChevronRight className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`fixed inset-0 flex justify-center ${isDarkMode ? 'dark bg-gray-950' : 'bg-white'}`}>
      <div className="w-full h-full bg-[#f2f2f7] dark:bg-black relative overflow-hidden flex flex-col md:flex-row">
        
        {/* Меню для ПК (Sidebar) */}
        <div className="hidden md:flex w-72 flex-col bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-6 z-40">
          <div className="flex items-center gap-3 mb-12 text-blue-500"><Dumbbell size={32} strokeWidth={2.5} /><h1 className="text-2xl font-black">FitTrack</h1></div>
          <nav className="space-y-2">
            {[ {id: 'stats', n: 'Статистика', i: <BarChart/>}, {id: 'workouts', n: 'Тренировки', i: <List/>}, {id: 'settings', n: 'Настройки', i: <SettingsIcon/>} ].map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === t.id ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>{t.i} {t.n}</button>
            ))}
          </nav>
        </div>

        <div className="flex-1 h-full overflow-y-auto pb-20 md:pb-0">{activeTab === 'stats' && renderStats()}{activeTab === 'workouts' && renderWorkouts()}{activeTab === 'settings' && renderSettings()}</div>

        {/* НИЖНЕЕ МЕНЮ ДЛЯ IPHONE (TAB BAR) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl border-t dark:border-gray-800 px-6 pt-3 pb-8 flex justify-around items-center">
            {[ 
                {id: 'stats', n: 'Статистика', i: <BarChart size={24}/>}, 
                {id: 'workouts', n: 'Тренировки', i: <List size={24}/>}, 
                {id: 'settings', n: 'Настройки', i: <SettingsIcon size={24}/>} 
            ].map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)} className={`flex flex-col items-center gap-1 transition-colors ${activeTab === t.id ? 'text-blue-500' : 'text-gray-400'}`}>
                    <div className={`${activeTab === t.id ? 'scale-110' : 'scale-100'} transition-transform`}>{t.i}</div>
                    <span className="text-[11px] font-bold leading-none">{t.n}</span>
                </button>
            ))}
        </div>

        {/* МОДАЛКИ */}
        {activeWorkout && <ActiveWorkoutModal workout={activeWorkout} setWorkout={setActiveWorkout} exercises={exercises} weightUnit={weightUnit} onFinish={() => {
            let vol = 0;
            const comp = activeWorkout.exercises.map(ex => {
                ex.sets.filter(s => s.completed).forEach(s => vol += (parseFloat(s.weight)||0)*(parseInt(s.reps)||0));
                return {...ex, sets: ex.sets.filter(s => s.completed)};
            }).filter(ex => ex.sets.length > 0);
            if(comp.length > 0) setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', activeWorkout.id), {...activeWorkout, exercises: comp, volume: vol});
            setActiveWorkout(null);
        }} onCancel={() => setActiveWorkout(null)} />}
        {selectedExerciseForStats && <ExerciseStatsModal exercise={selectedExerciseForStats} workouts={workouts} weightUnit={weightUnit} onClose={() => setSelectedExerciseForStats(null)} />}
        {isManagingExercises && <ManageExercisesModal exercises={exercises} onClose={() => setIsManagingExercises(false)} onAdd={() => setExerciseToEdit({ name: '', bodyPart: 'Грудь' })} onEdit={setExerciseToEdit} onDelete={(id) => deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', id))} />}
        {exerciseToEdit && <ExerciseFormModal initialData={exerciseToEdit} onSave={(data) => {
          const id = data.id || Math.random().toString(36).substr(2, 9);
          setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', id), { ...data, id });
          setExerciseToEdit(null);
        }} onClose={() => setExerciseToEdit(null)} />}
      </div>
    </div>
  );
}

// Вспомогательные компоненты (Карточка, Модалки)
function WorkoutCard({ workout, weightUnit, user, onEdit }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl border dark:border-gray-800 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold dark:text-white text-lg">Тренировка</h3>
            <button onClick={() => onEdit(workout)} className="text-gray-400 p-1"><Edit2 size={16} /></button>
          </div>
          <div className="text-sm text-gray-400 mt-1">{new Date(workout.startTime).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</div>
        </div>
        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-black">{workout.volume} {weightUnit}</div>
      </div>
      <div className="space-y-2">
        {workout.exercises.map((ex, i) => (
          <div key={i} className="text-sm flex justify-between text-gray-600 dark:text-gray-400">
            <span>{ex.name}</span>
            <span className="font-bold">{ex.sets.length} подходов</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActiveWorkoutModal({ workout, setWorkout, exercises, weightUnit, onFinish, onCancel }) {
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-[#f2f2f7] dark:bg-black">
      <div className="bg-white dark:bg-gray-900 px-6 py-5 flex justify-between items-center border-b dark:border-gray-800">
        <button onClick={onCancel} className="text-gray-500 font-bold">Отмена</button>
        <h2 className="text-lg font-black dark:text-white uppercase tracking-widest">В процессе</h2>
        <button onClick={onFinish} className="bg-blue-500 text-white px-5 py-2 rounded-full font-black">Готово</button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {workout.exercises.map((wEx) => (
          <div key={wEx.id} className="bg-white dark:bg-gray-900 rounded-3xl border dark:border-gray-800 overflow-hidden shadow-sm">
            <div className="p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-black text-blue-500">{wEx.name}</h3>
              <button onClick={() => setWorkout({...workout, exercises: workout.exercises.filter(e => e.id !== wEx.id)})} className="text-red-400"><Trash2 size={18} /></button>
            </div>
            <div className="p-3">
              {wEx.sets.map((set, i) => (
                <div key={set.id} className={`grid grid-cols-4 gap-2 items-center mb-2 p-2 rounded-xl ${set.completed ? 'bg-green-500/10' : ''}`}>
                  <div className="text-center font-black text-gray-300">{i + 1}</div>
                  <input type="number" value={set.weight} onChange={(e) => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: ex.sets.map(s => s.id === set.id ? {...s, weight: e.target.value} : s)} : ex)})} className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl text-center font-bold dark:text-white" placeholder="0"/>
                  <input type="number" value={set.reps} onChange={(e) => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: ex.sets.map(s => s.id === set.id ? {...s, reps: e.target.value} : s)} : ex)})} className="bg-gray-100 dark:bg-gray-800 p-3 rounded-xl text-center font-bold dark:text-white" placeholder="0"/>
                  <button onClick={() => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: ex.sets.map(s => s.id === set.id ? {...s, completed: !s.completed} : s)} : ex)})} className={`h-11 rounded-xl flex items-center justify-center transition-colors ${set.completed ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-400'}`}><Check size={20} /></button>
                </div>
              ))}
              <button onClick={() => setWorkout({...workout, exercises: workout.exercises.map(ex => ex.id === wEx.id ? {...ex, sets: [...ex.sets, {id: Math.random().toString(), weight: '', reps: '', completed: false}]} : ex)})} className="w-full mt-4 py-3 text-blue-500 font-black border-2 border-dashed border-blue-500/20 rounded-2xl">+ Добавить сет</button>
            </div>
          </div>
        ))}
        <button onClick={() => setIsSelecting(true)} className="w-full py-6 bg-white dark:bg-gray-900 border-2 border-dashed dark:border-gray-800 text-blue-500 font-black rounded-3xl">+ Добавить упражнение</button>
      </div>
      {isSelecting && (
        <div className="absolute inset-0 bg-white dark:bg-gray-950 z-50 flex flex-col">
          <div className="p-6 flex justify-between items-center border-b dark:border-gray-800">
            <h2 className="text-xl font-black dark:text-white">Выберите из базы</h2>
            <button onClick={() => setIsSelecting(false)} className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full"><X size={28} /></button>
          </div>
          <div className="p-4 space-y-3 overflow-y-auto">
            {exercises.map(ex => (
              <button key={ex.id} onClick={() => { setWorkout({...workout, exercises: [...workout.exercises, {id: Math.random().toString(), exerciseId: ex.id, name: ex.name, sets: [{id: Math.random().toString(), weight: '', reps: '', completed: false}]}]}); setIsSelecting(false); }} className="w-full p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl text-left border dark:border-gray-800">
                <div className="font-black text-lg dark:text-white">{ex.name}</div>
                <div className="text-xs text-gray-400 uppercase font-bold mt-1 tracking-widest">{ex.bodyPart}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Оставшиеся модалки (Stats, Manage, Form) теперь также используют явные цвета текста
function ExerciseStatsModal({ exercise, workouts, weightUnit, onClose }) {
  const history = workouts.filter(w => w.exercises.some(e => e.exerciseId === exercise.id));
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#f2f2f7] dark:bg-black">
      <div className="p-6 bg-white dark:bg-gray-900 flex items-center gap-4 border-b dark:border-gray-800">
        <button onClick={onClose}><ChevronLeft size={32} className="text-blue-500" /></button>
        <h2 className="text-2xl font-black dark:text-white">{exercise.name}</h2>
      </div>
      <div className="p-6 overflow-y-auto space-y-4">
        {history.length === 0 ? <p className="text-center text-gray-400 py-10">Пока нет записей</p> : history.map(w => {
          const exData = w.exercises.find(e => e.exerciseId === exercise.id);
          return (
            <div key={w.id} className="bg-white dark:bg-gray-900 p-5 rounded-3xl border dark:border-gray-800">
              <div className="font-black text-blue-500 mb-4">{new Date(w.startTime).toLocaleDateString()}</div>
              <div className="grid grid-cols-2 gap-3">
                {exData.sets.map((s, i) => <div key={i} className="text-sm font-bold bg-gray-50 dark:bg-gray-800 p-3 rounded-2xl dark:text-gray-300">{i+1}. {s.weight} {weightUnit} x {s.reps}</div>)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ManageExercisesModal({ exercises, onClose, onAdd, onEdit, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#f2f2f7] dark:bg-black">
      <div className="p-6 bg-white dark:bg-gray-900 flex justify-between items-center border-b dark:border-gray-800">
        <button onClick={onClose}><ChevronLeft size={32} className="text-blue-500" /></button>
        <h2 className="text-xl font-black dark:text-white">База</h2>
        <button onClick={onAdd} className="bg-blue-500 text-white p-2 rounded-full"><Plus /></button>
      </div>
      <div className="p-4 space-y-2 overflow-y-auto">
        {exercises.map(ex => (
          <div key={ex.id} className="bg-white dark:bg-gray-900 p-5 rounded-2xl flex justify-between items-center border dark:border-gray-800">
            <div><div className="font-black dark:text-white">{ex.name}</div><div className="text-xs text-gray-400 font-bold uppercase">{ex.bodyPart}</div></div>
            <div className="flex gap-2">
              <button onClick={() => onEdit(ex)} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"><Edit2 size={18} /></button>
              <button onClick={() => onDelete(ex.id)} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-red-400"><Trash2 size={18}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExerciseFormModal({ initialData, onSave, onClose }) {
  const [name, setName] = useState(initialData?.name || '');
  const [part, setPart] = useState(initialData?.bodyPart || 'Грудь');
  return (
    <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-sm rounded-[40px] p-8 shadow-2xl">
        <h2 className="text-2xl font-black mb-6 dark:text-white">{initialData?.id ? 'Изменить' : 'Новое'}</h2>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl mb-4 font-bold dark:text-white outline-none" placeholder="Название"/>
        <select value={part} onChange={e => setPart(e.target.value)} className="w-full bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl mb-8 font-bold dark:text-white outline-none">
          {['Грудь', 'Спина', 'Ноги', 'Плечи', 'Бицепс', 'Трицепс', 'Пресс', 'Кардио'].map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl font-black dark:text-white">Отмена</button>
          <button onClick={() => onSave({id: initialData?.id, name, bodyPart: part})} className="flex-1 py-4 bg-blue-500 text-white rounded-2xl font-black">ОК</button>
        </div>
      </div>
    </div>
  );
}