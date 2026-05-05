import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart, 
  Dumbbell, 
  List, 
  Settings as SettingsIcon,
  Plus, 
  X, 
  Check, 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Play,
  Clock,
  Trash2,
  Trophy,
  Calendar,
  Moon,
  Sun,
  Scale,
  Edit2,
  Download,
  Upload,
  FileSpreadsheet
} from 'lucide-react';

// --- ИМПОРТЫ И НАСТРОЙКА FIREBASE ---
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, deleteDoc, onSnapshot } from "firebase/firestore";

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

const APP_ID = typeof __app_id !== 'undefined' ? __app_id : 'fitrack-default';

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

  const fileInputRef = useRef(null);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Ошибка авторизации Firebase:", error);
        if (error.code === 'auth/configuration-not-found') {
          setAuthError("В вашем проекте Firebase не включена анонимная авторизация. Перейдите в Firebase Console -> Authentication -> Sign-in method и включите провайдер 'Anonymous'.");
        } else {
          setAuthError(error.message);
        }
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    const workoutsRef = collection(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts');
    const exercisesRef = collection(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises');
    const settingsRef = doc(db, 'artifacts', APP_ID, 'users', user.uid, 'settings', 'userSettings');

    const unsubWorkouts = onSnapshot(workoutsRef, (snapshot) => {
      const w = snapshot.docs.map(d => d.data());
      setWorkouts(w.sort((a, b) => b.startTime - a.startTime)); 
    }, (err) => console.error("Ошибка синхронизации тренировок:", err));

    const unsubExercises = onSnapshot(exercisesRef, (snapshot) => {
      if (snapshot.empty) {
        INITIAL_EXERCISES.forEach(ex => {
          setDoc(doc(exercisesRef, ex.id), ex).catch(err => console.error(err));
        });
      } else {
        setExercises(snapshot.docs.map(d => d.data()));
      }
      setIsSyncing(false); 
    }, (err) => console.error("Ошибка синхронизации упражнений:", err));

    const unsubSettings = onSnapshot(settingsRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.weightUnit) setWeightUnit(data.weightUnit);
        if (data.isDarkMode !== undefined) setIsDarkMode(data.isDarkMode);
      }
    }, (err) => console.error("Ошибка синхронизации настроек:", err));

    return () => {
      unsubWorkouts();
      unsubExercises();
      unsubSettings();
    };
  }, [user]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const generateId = () => Math.random().toString(36).substr(2, 9);
  const formatDate = (timestamp) => new Date(timestamp).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
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
    } catch (e) { console.error("Ошибка при сохранении настроек:", e); }
  };

  const handleSaveExercise = async (exerciseData) => {
    if (!user) return;
    const id = exerciseData.id || generateId();
    const ex = { ...exerciseData, id };
    try {
      await setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', id), ex);
      setExerciseToEdit(null);
    } catch (e) { console.error(e); }
  };

  const handleDeleteExercise = async (id) => {
    if (!user) return;
    try { await deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', id)); } catch (e) { console.error(e); }
  };

  const handleStartWorkout = () => {
    setActiveWorkout({ id: generateId(), startTime: selectedDate.getTime(), exercises: [] });
  };

  const handleFinishWorkout = async () => {
    if (!activeWorkout || !user) return;
    let totalVolume = 0;
    const completedExercises = activeWorkout.exercises.map(ex => {
      const completedSets = ex.sets.filter(s => s.completed);
      completedSets.forEach(s => { totalVolume += (parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0); });
      return { ...ex, sets: completedSets };
    }).filter(ex => ex.sets.length > 0);

    try {
      if (completedExercises.length > 0) {
        const finishedWorkout = { ...activeWorkout, endTime: activeWorkout.endTime || Date.now(), exercises: completedExercises, volume: totalVolume };
        await setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', finishedWorkout.id), finishedWorkout);
      } else {
        await deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', activeWorkout.id));
      }
      setActiveWorkout(null);
    } catch (e) { console.error("Ошибка сохранения тренировки:", e); }
  };

  const handleDeleteWorkout = async (id) => {
    if (!user) return;
    try { await deleteDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', id)); } catch (e) { console.error(e); }
  };

  const loadXLSX = () => {
    return new Promise((resolve, reject) => {
      if (window.XLSX) return resolve(window.XLSX);
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
      script.onload = () => resolve(window.XLSX);
      script.onerror = () => reject(new Error('Не удалось загрузить библиотеку для Excel'));
      document.head.appendChild(script);
    });
  };
  
  const handleExportData = async () => {
    try {
      const XLSX = await loadXLSX();
      const workoutRows = [];
      workouts.forEach(w => {
        if (w.exercises.length === 0) {
          workoutRows.push({ WorkoutID: w.id, Date: new Date(w.startTime).toISOString(), TotalVolume: w.volume || 0, ExerciseID: '', ExerciseName: '', SetID: '', Weight: '', Reps: '', Completed: '' });
        } else {
          w.exercises.forEach(ex => {
            ex.sets.forEach(set => {
              workoutRows.push({ WorkoutID: w.id, Date: new Date(w.startTime).toISOString(), TotalVolume: w.volume || 0, ExerciseID: ex.exerciseId, ExerciseName: ex.name, SetID: set.id, Weight: set.weight, Reps: set.reps, Completed: set.completed });
            });
          });
        }
      });
      const exerciseRows = exercises.map(ex => ({ ID: ex.id, Name: ex.name, BodyPart: ex.bodyPart }));
      const settingsRows = [{ Key: 'weightUnit', Value: weightUnit }];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(workoutRows), "Тренировки");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(exerciseRows), "База упражнений");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(settingsRows), "Настройки");
      XLSX.writeFile(wb, "FitTrack_Backup.xlsx");
    } catch (e) { alert("Ошибка при экспорте: " + e.message); }
  };

  const handleDownloadExample = async () => {
    try {
      const XLSX = await loadXLSX();
      const workoutRows = [{ WorkoutID: 'wk_1', Date: new Date().toISOString(), TotalVolume: 200, ExerciseID: 'ex_1', ExerciseName: 'Пример: Жим лежа', SetID: 's_1', Weight: '50', Reps: '4', Completed: true }];
      const exerciseRows = [{ ID: 'ex_1', Name: 'Пример: Жим лежа', BodyPart: 'Грудь' }];
      const settingsRows = [{ Key: 'weightUnit', Value: 'кг' }];
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(workoutRows), "Тренировки");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(exerciseRows), "База упражнений");
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(settingsRows), "Настройки");
      XLSX.writeFile(wb, "FitTrack_Example.xlsx");
    } catch (e) { alert("Ошибка: " + e.message); }
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file || !user) return;
    try {
      const XLSX = await loadXLSX();
      const reader = new FileReader();
      reader.onload = async (e) => {
        setIsSyncing(true);
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, {type: 'array'});
          
          if (workbook.Sheets["Настройки"]) {
            const settingsRows = XLSX.utils.sheet_to_json(workbook.Sheets["Настройки"]);
            const wUnitRow = settingsRows.find(r => r.Key === 'weightUnit');
            if (wUnitRow) await updateSetting('weightUnit', wUnitRow.Value);
          }
          if (workbook.Sheets["База упражнений"]) {
            const exerciseRows = XLSX.utils.sheet_to_json(workbook.Sheets["База упражнений"]);
            for (const r of exerciseRows) {
              const ex = { id: String(r.ID), name: String(r.Name), bodyPart: String(r.BodyPart) };
              await setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'exercises', ex.id), ex);
            }
          }
          if (workbook.Sheets["Тренировки"]) {
            const workoutRows = XLSX.utils.sheet_to_json(workbook.Sheets["Тренировки"]);
            const workoutsMap = {};
            workoutRows.forEach(row => {
              const wId = String(row.WorkoutID);
              if (!workoutsMap[wId]) {
                workoutsMap[wId] = { id: wId, startTime: new Date(row.Date).getTime() || Date.now(), volume: Number(row.TotalVolume) || 0, exercises: [] };
              }
              if (row.ExerciseID && row.ExerciseName) {
                const w = workoutsMap[wId];
                let ex = w.exercises.find(e => e.exerciseId === String(row.ExerciseID));
                if (!ex) {
                  ex = { id: Math.random().toString(36).substring(2, 9), exerciseId: String(row.ExerciseID), name: String(row.ExerciseName), sets: [] };
                  w.exercises.push(ex);
                }
                if (row.SetID || row.Weight || row.Reps) {
                  ex.sets.push({ id: String(row.SetID) || Math.random().toString(36).substring(2, 9), weight: String(row.Weight || ''), reps: String(row.Reps || ''), completed: row.Completed === true || String(row.Completed).toLowerCase() === 'true' });
                }
              }
            });
            for (const w of Object.values(workoutsMap)) {
               await setDoc(doc(db, 'artifacts', APP_ID, 'users', user.uid, 'workouts', w.id), w);
            }
          }
          event.target.value = null;
          alert('Данные из Excel успешно импортированы!');
        } catch (error) {
          alert('Ошибка при разборе Excel файла.');
          console.error(error);
        } finally {
          setIsSyncing(false);
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (e) { alert("Ошибка при загрузке библиотеки Excel: " + e.message); }
  };

  const WorkoutCard = ({ workout }) => (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Тренировка</h3>
            <button onClick={() => setActiveWorkout(workout)} className="text-gray-400 hover:text-blue-500 transition-colors p-1">
              <Edit2 size={16} />
            </button>
            <button onClick={() => handleDeleteWorkout(workout.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
              <Trash2 size={16} />
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
            <Clock size={14} className="mr-1" />
            {formatDate(workout.startTime)}
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
          {workout.volume} {weightUnit}
        </div>
      </div>
      
      <div className="space-y-2">
        {workout.exercises.map(ex => (
          <div key={ex.id} className="text-sm flex justify-between border-b border-gray-50 dark:border-gray-800/50 pb-2 last:border-0 last:pb-0">
            <span className="text-gray-700 dark:text-gray-300 font-medium">{ex.name}</span>
            <span className="text-gray-500 dark:text-gray-500">{ex.sets.length} подходов</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (isSyncing) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center p-6 ${isDarkMode ? 'dark bg-gray-950 text-white' : 'bg-[#f2f2f7] text-gray-900'}`}>
        {authError ? (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-3xl max-w-sm text-center border border-red-100 dark:border-red-900/50 shadow-xl">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <X size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Ошибка подключения</h3>
            <p className="text-sm font-medium">{authError}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Dumbbell className="text-blue-500" size={32} />
            </div>
            <p className="font-medium text-gray-500 dark:text-gray-400">Синхронизация данных...</p>
          </div>
        )}
      </div>
    );
  }

  const renderStats = () => {
    const totalWorkouts = workouts.length;
    const totalVolume = workouts.reduce((sum, w) => sum + (w.volume || 0), 0);
    
    const last6Months = Array.from({length: 6}).map((_, i) => {
      const d = new Date();
      d.setMonth(d.getMonth() - (5 - i));
      return { label: d.toLocaleString('ru-RU', { month: 'short' }), month: d.getMonth(), year: d.getFullYear() };
    });

    const workoutsByMonth = last6Months.map(m => {
      const count = workouts.filter(w => {
        const wd = new Date(w.startTime);
        return wd.getMonth() === m.month && wd.getFullYear() === m.year;
      }).length;
      return { ...m, count };
    });

    const maxWorkoutsInMonth = Math.max(...workoutsByMonth.map(m => m.count), 1);

    return (
      <div className="space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10">Статистика</h1>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
              <Dumbbell className="text-blue-500 dark:text-blue-400" size={24} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Всего тренировок</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalWorkouts}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4">
              <Trophy className="text-green-500 dark:text-green-400" size={24} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Общий тоннаж ({weightUnit})</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalVolume}</p>
          </div>
        </div>

        <div className="px-4 md:px-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-100">Тренировки по месяцам</h2>
            <div className="flex items-end justify-between h-40 gap-2 md:gap-6">
              {workoutsByMonth.map((monthData, i) => {
                const height = workouts.length > 0 ? `${Math.max(15, (monthData.count / maxWorkoutsInMonth) * 100)}%` : '15%';
                return (
                  <div key={i} className="flex flex-col items-center gap-3 flex-1 relative group">
                    <div className="w-full bg-blue-50 dark:bg-gray-800 rounded-t-xl relative flex-1 flex items-end overflow-hidden">
                      <div 
                        className="w-full bg-blue-500 dark:bg-blue-600 rounded-t-xl transition-all duration-700 ease-out flex items-start justify-center pt-2 group-hover:bg-blue-400 dark:group-hover:bg-blue-500" 
                        style={{ height: height }}
                      >
                        {monthData.count > 0 && <span className="text-xs md:text-sm text-white font-bold">{monthData.count}</span>}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm text-gray-400 font-medium capitalize">{monthData.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-4">Прогресс по упражнениям</h2>
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            {exercises.map((ex, index) => (
              <button 
                key={ex.id} 
                onClick={() => setSelectedExerciseForStats(ex)}
                className={`w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${index !== exercises.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}
              >
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white md:text-lg">{ex.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{ex.bodyPart}</p>
                </div>
                <ChevronRight className="text-gray-300 dark:text-gray-600" size={24} />
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-8 space-y-4 pt-6 mt-6 border-t border-gray-200/50 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">История всех тренировок</h2>
          {workouts.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <List className="mx-auto text-gray-300 dark:text-gray-600 mb-4" size={48} />
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">История пуста.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workouts.map(w => <WorkoutCard key={w.id} workout={w} />)}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderWorkouts = () => {
    const daysInMonth = new Date(currentMonthView.getFullYear(), currentMonthView.getMonth() + 1, 0).getDate();
    const firstDayIndex = (new Date(currentMonthView.getFullYear(), currentMonthView.getMonth(), 1).getDay() + 6) % 7; 
    
    const prevMonth = () => setCurrentMonthView(new Date(currentMonthView.getFullYear(), currentMonthView.getMonth() - 1, 1));
    const nextMonth = () => setCurrentMonthView(new Date(currentMonthView.getFullYear(), currentMonthView.getMonth() + 1, 1));

    const isoSelected = toISODate(selectedDate);
    const dayWorkouts = workouts.filter(w => toISODate(w.startTime) === isoSelected);
    const collapsedDays = getWeekDays(selectedDate);

    return (
      <div className="space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-5xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-8 mt-6 md:mt-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Тренировки</h1>
          <button 
            onClick={() => {
              setIsCalendarExpanded(!isCalendarExpanded);
              if (!isCalendarExpanded) setCurrentMonthView(new Date(selectedDate));
            }} 
            className="p-3 text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-sm"
          >
            {isCalendarExpanded ? <ChevronUp size={24} /> : <Calendar size={24} />}
          </button>
        </div>

        <div className="px-4 md:px-8 -mt-2">
          {isCalendarExpanded ? (
            <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 animate-in slide-in-from-top-4 fade-in duration-200">
              <div className="flex justify-between items-center mb-6">
                <button onClick={prevMonth} className="p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full"><ChevronLeft size={20}/></button>
                <span className="font-bold text-lg capitalize dark:text-white">{currentMonthView.toLocaleString('ru-RU', {month: 'long', year: 'numeric'})}</span>
                <button onClick={nextMonth} className="p-2 text-gray-400 hover:text-blue-500 bg-gray-50 dark:bg-gray-800 rounded-full"><ChevronRight size={20}/></button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => <div key={day} className="text-xs md:text-sm font-bold text-gray-400 py-1">{day}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-y-2 gap-x-1 md:gap-2 text-center">
                {Array.from({length: firstDayIndex}).map((_, i) => <div key={`empty-${i}`}/>)}
                {Array.from({length: daysInMonth}).map((_, i) => {
                  const dayDate = new Date(currentMonthView.getFullYear(), currentMonthView.getMonth(), i + 1);
                  const iso = toISODate(dayDate);
                  const isSelected = isoSelected === iso;
                  const hasWorkout = workouts.some(w => toISODate(w.startTime) === iso);
                  return (
                    <button 
                      key={iso}
                      onClick={() => { setSelectedDate(dayDate); setIsCalendarExpanded(false); }} 
                      className={`h-12 md:h-14 w-full rounded-2xl md:rounded-3xl flex flex-col items-center justify-center relative transition-all ${isSelected ? 'bg-blue-500 text-white shadow-md' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                      <span className="text-sm md:text-base font-semibold">{i + 1}</span>
                      {hasWorkout && <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full absolute bottom-1.5 md:bottom-2 ${isSelected ? 'bg-white' : 'bg-blue-500'}`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-2 md:p-3 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 gap-1 md:gap-3">
              {collapsedDays.map(d => {
                const iso = toISODate(d);
                const isSelected = isoSelected === iso;
                const hasWorkout = workouts.some(w => toISODate(w.startTime) === iso);
                return (
                  <button 
                    key={iso}
                    onClick={() => setSelectedDate(d)}
                    className={`flex flex-col items-center justify-center flex-1 aspect-[3/4] md:aspect-square rounded-2xl transition-all ${isSelected ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    <span className="text-[10px] md:text-xs font-medium opacity-80 uppercase tracking-wider mb-1">
                      {d.toLocaleDateString('ru-RU', {weekday: 'short'})}
                    </span>
                    <span className={`text-lg md:text-2xl font-bold leading-none ${isSelected ? 'text-white' : 'text-gray-900 dark:text-gray-200'}`}>{d.getDate()}</span>
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mt-1.5 md:mt-2 ${isSelected ? 'bg-white' : (hasWorkout ? 'bg-blue-500' : 'bg-transparent')}`} />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="px-4 md:px-8">
          <button 
            onClick={handleStartWorkout}
            className="w-full bg-blue-500 hover:bg-blue-600 active:scale-[0.98] transition-all text-white font-semibold py-4 md:py-5 text-lg rounded-2xl md:rounded-3xl flex items-center justify-center shadow-md hover:shadow-lg"
          >
            <Plus size={24} className="mr-2 stroke-[2.5px]" />
            Добавить тренировку
          </button>
        </div>

        <div className="px-4 md:px-8 space-y-4 pt-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 capitalize">
            {formatDate(selectedDate.getTime())}
          </h2>
          {dayWorkouts.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Dumbbell className="mx-auto text-gray-300 dark:text-gray-600 mb-4" size={56} />
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">Нет тренировок в этот день.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {dayWorkouts.map(workout => <WorkoutCard key={workout.id} workout={workout} />)}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSettings = () => {
    return (
      <div className="space-y-6 pb-24 md:pb-8 animate-in fade-in max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white px-4 md:px-8 mt-6 md:mt-10">Настройки</h1>

        <div className="px-4 md:px-8 space-y-8">
          <div>
            <h2 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Основные</h2>
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-indigo-900/30' : 'bg-orange-100'}`}>
                    {isDarkMode ? <Moon size={24} className="text-indigo-400"/> : <Sun size={24} className="text-orange-500"/>}
                  </div>
                  <span className="font-medium text-lg text-gray-900 dark:text-white">Темная тема</span>
                </div>
                <button 
                  onClick={() => updateSetting('isDarkMode', !isDarkMode)}
                  className={`w-14 h-8 rounded-full transition-colors flex items-center px-1 ${isDarkMode ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}
                >
                  <div className={`w-6 h-6 rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : ''} shadow-sm`} />
                </button>
              </div>

              <button 
                onClick={() => updateSetting('weightUnit', weightUnit === 'кг' ? 'lbs' : 'кг')}
                className="w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-green-100 dark:bg-green-900/30">
                    <Scale size={24} className="text-green-500" />
                  </div>
                  <span className="font-medium text-lg text-gray-900 dark:text-white">Единицы веса</span>
                </div>
                <span className="text-base text-blue-500 font-bold uppercase bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg">{weightUnit}</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider mb-3 ml-2">Данные</h2>
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <button 
                onClick={() => setIsManagingExercises(true)}
                className="w-full p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30">
                    <Dumbbell size={24} className="text-purple-500" />
                  </div>
                  <span className="font-medium text-lg text-gray-900 dark:text-white">База упражнений</span>
                </div>
                <ChevronRight size={24} className="text-gray-300 dark:text-gray-600" />
              </button>

              <button 
                onClick={handleExportData}
                className="w-full p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <Download size={24} className="text-blue-500" />
                  </div>
                  <span className="font-medium text-lg text-gray-900 dark:text-white">Экспорт в Excel</span>
                </div>
              </button>

              <button 
                onClick={handleImportClick}
                className="w-full p-5 md:p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-teal-100 dark:bg-teal-900/30">
                    <Upload size={24} className="text-teal-500" />
                  </div>
                  <span className="font-medium text-lg text-gray-900 dark:text-white">Импорт из Excel</span>
                </div>
                <input type="file" accept=".xlsx, .xls" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
              </button>
              
              <button 
                onClick={handleDownloadExample}
                className="w-full p-5 md:p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800">
                    <FileSpreadsheet size={24} className="text-gray-500 dark:text-gray-400" />
                  </div>
                  <span className="font-medium text-lg text-gray-900 dark:text-white">Скачать пример Excel</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className={`fixed inset-0 flex justify-center ${isDarkMode ? 'dark bg-gray-950' : 'bg-white'}`}>
      <div className="w-full h-full bg-[#f2f2f7] dark:bg-gray-950 relative overflow-hidden shadow-2xl flex flex-col md:flex-row font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* БОКОВОЕ МЕНЮ (НА ПК) */}
        <div className="hidden md:flex w-72 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 z-40 transition-colors shadow-sm">
          <div className="flex items-center gap-3 mb-12 mt-4 text-blue-500 px-2">
            <Dumbbell size={36} strokeWidth={2.5} />
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">FitTrack</h1>
          </div>
          
          <nav className="flex flex-col gap-3">
            <button onClick={() => setActiveTab('stats')} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === 'stats' ? 'bg-blue-500 shadow-md text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
              <BarChart size={24} className={activeTab === 'stats' ? 'stroke-[2.5px]' : ''} />
              <span className="font-semibold text-lg">Статистика</span>
            </button>
            <button onClick={() => setActiveTab('workouts')} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === 'workouts' ? 'bg-blue-500 shadow-md text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
              <List size={24} className={activeTab === 'workouts' ? 'stroke-[2.5px]' : ''} />
              <span className="font-semibold text-lg">Тренировки</span>
            </button>
            <button onClick={() => setActiveTab('settings')} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${activeTab === 'settings' ? 'bg-blue-500 shadow-md text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
              <SettingsIcon size={24} className={activeTab === 'settings' ? 'stroke-[2.5px]' : ''} />
              <span className="font-semibold text-lg">Настройки</span>
            </button>
          </nav>
        </div>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <div className="flex-1 h-full overflow-y-auto relative">
          {activeTab === 'stats' && renderStats()}
          {activeTab === 'workouts' && renderWorkouts()}
          {activeTab === 'settings' && renderSettings()}
        </div>

        {/* НИЖНЕЕ МЕНЮ (НА МОБИЛЬНЫХ) */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800/50 pb-safe pt-2 px-6 flex justify-between z-40 transition-colors">
          <button onClick={() => setActiveTab('stats')} className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'stats' ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'}`}>
            <BarChart size={24} className={activeTab === 'stats' ? 'stroke-[2.5px]' : ''} />
            <span className="text-[10px] font-medium mt-1">Статистика</span>
          </button>
          <button onClick={() => setActiveTab('workouts')} className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'workouts' ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'}`}>
            <List size={24} className={activeTab === 'workouts' ? 'stroke-[2.5px]' : ''} />
            <span className="text-[10px] font-medium mt-1">Тренировки</span>
          </button>
          <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center p-2 transition-colors ${activeTab === 'settings' ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'}`}>
            <SettingsIcon size={24} className={activeTab === 'settings' ? 'stroke-[2.5px]' : ''} />
            <span className="text-[10px] font-medium mt-1">Настройки</span>
          </button>
        </div>

        {/* МОДАЛЬНЫЕ ОКНА */}
        {activeWorkout && (
          <ActiveWorkoutModal workout={activeWorkout} setWorkout={setActiveWorkout} exercises={exercises} weightUnit={weightUnit} onFinish={handleFinishWorkout} onCancel={() => setActiveWorkout(null)} />
        )}

        {selectedExerciseForStats && (
          <ExerciseStatsModal exercise={selectedExerciseForStats} workouts={workouts} weightUnit={weightUnit} onClose={() => setSelectedExerciseForStats(null)} />
        )}

        {isManagingExercises && (
          <ManageExercisesModal exercises={exercises} onClose={() => setIsManagingExercises(false)} onAdd={() => setExerciseToEdit({ name: '', bodyPart: 'Грудь' })} onEdit={setExerciseToEdit} onDelete={handleDeleteExercise} />
        )}

        {exerciseToEdit && (
          <ExerciseFormModal initialData={exerciseToEdit} onSave={handleSaveExercise} onClose={() => setExerciseToEdit(null)} />
        )}

      </div>
    </div>
  );
}

// ============================================================================
// КОМПОНЕНТ СТАТИСТИКИ УПРАЖНЕНИЯ
// ============================================================================
function ExerciseStatsModal({ exercise, workouts, weightUnit, onClose }) {
  const exerciseHistory = workouts
    .map(w => {
      const exData = w.exercises.find(e => e.exerciseId === exercise.id);
      if (exData) return { date: w.startTime, sets: exData.sets.filter(s => s.completed) };
      return null;
    })
    .filter(item => item && item.sets.length > 0)
    .sort((a, b) => b.date - a.date);

  const chronologicalHistory = [...exerciseHistory].reverse();
  const volumeData = chronologicalHistory.map(h => ({
    label: new Date(h.date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }),
    value: h.sets.reduce((sum, s) => sum + ((parseFloat(s.weight) || 0) * (parseInt(s.reps) || 0)), 0)
  }));
  const maxWeightData = chronologicalHistory.map(h => ({
    label: new Date(h.date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }),
    value: Math.max(...h.sets.map(s => parseFloat(s.weight) || 0))
  }));

  let maxWeight = 0; let totalVolume = 0;
  exerciseHistory.forEach(historyItem => {
    historyItem.sets.forEach(set => {
      const weight = parseFloat(set.weight) || 0;
      if (weight > maxWeight) maxWeight = weight;
      totalVolume += weight * (parseInt(set.reps) || 0);
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center bg-[#f2f2f7] dark:bg-gray-950 md:bg-black/50 md:dark:bg-black/70 md:backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex-1 md:flex-none w-full h-full md:h-[85vh] md:max-w-3xl bg-[#f2f2f7] dark:bg-gray-950 md:rounded-[32px] md:shadow-2xl md:border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden relative animate-in slide-in-from-bottom-10 md:zoom-in-95">
        
        <div className="bg-white dark:bg-gray-900 px-4 md:px-6 pt-6 md:pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex items-center shadow-sm sticky top-0 z-10">
          <button onClick={onClose} className="p-2 -ml-2 md:ml-0 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-colors mr-3">
            <ChevronLeft size={28} />
          </button>
          <div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight dark:text-white">{exercise.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exercise.bodyPart}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                <TrendingUp className="text-blue-500" size={20} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Макс. вес</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{maxWeight > 0 ? `${maxWeight} ${weightUnit}` : '-'}</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-3">
                <Trophy className="text-green-500" size={20} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Тоннаж в упр.</p>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{totalVolume > 0 ? `${totalVolume} ${weightUnit}` : '-'}</p>
            </div>
          </div>

          <div className="pb-6">
            {exerciseHistory.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm mt-4">
                <Dumbbell className="mx-auto text-gray-300 dark:text-gray-600 mb-3" size={48} />
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">Вы еще не выполняли это упражнение.</p>
              </div>
            ) : (
              <div className="space-y-6 md:space-y-8">
                <MiniChart data={maxWeightData} title="Динамика макс. веса" colorClass="text-blue-500" valueSuffix={weightUnit} />
                <MiniChart data={volumeData} title="Рост тоннажа" colorClass="text-green-500" valueSuffix={weightUnit} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChart({ data, title, colorClass, valueSuffix }) {
  if (!data || data.length === 0) return null;
  const maxVal = Math.max(...data.map(d => d.value));
  const minVal = Math.min(...data.map(d => d.value));
  const range = maxVal - minVal || 1;
  const yMax = maxVal + range * 0.15;
  const yMin = Math.max(0, minVal - range * 0.15);
  const yRange = yMax - yMin || 1;

  const points = data.map((d, i) => ({
    x: data.length === 1 ? 50 : (i / (data.length - 1)) * 100,
    y: 100 - ((d.value - yMin) / yRange) * 100,
    value: d.value, label: d.label
  }));
  const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;

  return (
    <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-end mb-8">
        <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100">{title}</h3>
        {data.length > 0 && (
          <span className={`text-base font-bold ${colorClass} bg-current/10 px-3 py-1 rounded-lg`}>
            {data[data.length - 1].value} {valueSuffix}
          </span>
        )}
      </div>
      
      <div className="h-40 md:h-56 w-full relative mb-4">
        {data.length > 1 ? (
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeDasharray="2 2" className="text-gray-200 dark:text-gray-800" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeDasharray="2 2" className="text-gray-200 dark:text-gray-800" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="currentColor" strokeDasharray="2 2" className="text-gray-200 dark:text-gray-800" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <path d={pathD} fill="none" className={colorClass} stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
            {points.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="5" fill="currentColor" className={`text-white dark:text-gray-900 stroke-current ${colorClass}`} strokeWidth="3" vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
        ) : (
           <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
             <div className={`w-4 h-4 rounded-full bg-current ${colorClass} mb-3`}></div>
             <span className="text-sm">Только 1 запись</span>
           </div>
        )}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs md:text-sm text-gray-400 font-medium">
          <span>{data[0]?.label}</span>
          {data.length > 1 && <span>{data[data.length - 1]?.label}</span>}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// КОМПОНЕНТ АКТИВНОЙ ТРЕНИРОВКИ
// ============================================================================
function ActiveWorkoutModal({ workout, setWorkout, exercises, weightUnit, onFinish, onCancel }) {
  const [isSelectingExercise, setIsSelectingExercise] = useState(false);

  const handleDateChange = (e) => {
    const [year, month, day] = e.target.value.split('-');
    if (year && month && day) {
      const newDate = new Date(workout.startTime);
      newDate.setFullYear(year, month - 1, day);
      setWorkout({...workout, startTime: newDate.getTime()});
    }
  };

  const addExerciseToWorkout = (exercise) => {
    setWorkout({ ...workout, exercises: [...workout.exercises, { id: Math.random().toString(), exerciseId: exercise.id, name: exercise.name, sets: [{ id: Math.random().toString(), weight: '', reps: '', completed: false }] }] });
    setIsSelectingExercise(false);
  };

  const updateSet = (eId, sId, f, v) => setWorkout({ ...workout, exercises: workout.exercises.map(ex => ex.id === eId ? { ...ex, sets: ex.sets.map(s => s.id === sId ? { ...s, [f]: v } : s) } : ex) });
  const addSet = (eId) => setWorkout({ ...workout, exercises: workout.exercises.map(ex => ex.id === eId ? { ...ex, sets: [...ex.sets, { id: Math.random().toString(), weight: ex.sets[ex.sets.length-1]?.weight || '', reps: ex.sets[ex.sets.length-1]?.reps || '', completed: false }] } : ex) });
  const toggleSet = (eId, sId) => setWorkout({ ...workout, exercises: workout.exercises.map(ex => ex.id === eId ? { ...ex, sets: ex.sets.map(s => s.id === sId ? { ...s, completed: !s.completed } : s) } : ex) });
  const removeEx = (eId) => setWorkout({ ...workout, exercises: workout.exercises.filter(ex => ex.id !== eId) });

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center bg-[#f2f2f7] dark:bg-gray-950 md:bg-black/50 md:dark:bg-black/70 md:backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex-1 md:flex-none w-full h-full md:h-[90vh] md:max-w-3xl bg-[#f2f2f7] dark:bg-gray-950 md:rounded-[32px] md:shadow-2xl md:border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden relative animate-in slide-in-from-bottom-10 md:zoom-in-95">
        
        <div className="bg-white dark:bg-gray-900 px-4 md:px-8 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center shadow-sm z-10">
          <button onClick={onCancel} className="text-gray-500 dark:text-gray-400 font-medium md:text-lg hover:text-gray-900 dark:hover:text-white transition-colors">Отменить</button>
          <h2 className="text-lg md:text-xl font-bold dark:text-white">Тренировка</h2>
          <button onClick={onFinish} className="text-blue-500 font-semibold bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 md:py-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">Завершить</button>
        </div>

        <div className="bg-white dark:bg-gray-900 px-4 md:px-8 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center z-10 shadow-sm">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar size={20} className="mr-3" />
            <span className="font-medium text-base">Дата</span>
          </div>
          <input 
            type="date" 
            value={new Date(workout.startTime - new Date().getTimezoneOffset()*60000).toISOString().slice(0, 10)}
            onChange={handleDateChange}
            className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl text-sm md:text-base font-semibold outline-none text-blue-600 dark:text-blue-400 cursor-pointer"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8">
          {workout.exercises.map((wEx) => (
            <div key={wEx.id} className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <div className="p-4 md:p-5 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 md:text-lg">{wEx.name}</h3>
                <button onClick={() => removeEx(wEx.id)} className="text-red-400 hover:text-red-500 p-2 bg-red-50 dark:bg-red-900/20 rounded-full transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
              
              <div className="p-3 md:p-5">
                <div className="grid grid-cols-4 gap-2 md:gap-4 mb-3 text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider text-center">
                  <div>Сет</div><div>Вес ({weightUnit})</div><div>Повт</div><div>✓</div>
                </div>

                {wEx.sets.map((set, i) => (
                  <div key={set.id} className={`grid grid-cols-4 gap-2 md:gap-4 items-center mb-2 md:mb-3 p-1 md:p-2 rounded-2xl transition-colors ${set.completed ? 'bg-green-50/50 dark:bg-green-900/20' : ''}`}>
                    <div className="text-center font-bold text-gray-500 dark:text-gray-400">{i + 1}</div>
                    <div><input type="number" value={set.weight} onChange={(e) => updateSet(wEx.id, set.id, 'weight', e.target.value)} disabled={set.completed} className="w-full bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded-xl text-center font-bold outline-none focus:ring-2 focus:ring-blue-300 dark:text-white disabled:opacity-50" placeholder="-"/></div>
                    <div><input type="number" value={set.reps} onChange={(e) => updateSet(wEx.id, set.id, 'reps', e.target.value)} disabled={set.completed} className="w-full bg-gray-100 dark:bg-gray-800 p-2 md:p-3 rounded-xl text-center font-bold outline-none focus:ring-2 focus:ring-blue-300 dark:text-white disabled:opacity-50" placeholder="-"/></div>
                    <div className="flex justify-center">
                      <button onClick={() => toggleSet(wEx.id, set.id)} className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all ${set.completed ? 'bg-green-500 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'}`}><Check size={20} strokeWidth={set.completed ? 3 : 2} /></button>
                    </div>
                  </div>
                ))}
                <button onClick={() => addSet(wEx.id)} className="w-full mt-4 py-3 md:py-4 text-sm md:text-base font-bold text-blue-500 dark:text-blue-400 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-800 rounded-2xl transition-colors"><Plus size={20} className="mr-2" /> Добавить подход</button>
              </div>
            </div>
          ))}
          <button onClick={() => setIsSelectingExercise(true)} className="w-full py-5 md:py-6 border-2 border-dashed border-blue-200 dark:border-blue-900/50 text-blue-500 dark:text-blue-400 md:text-lg font-bold rounded-3xl flex items-center justify-center bg-blue-50/30 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"><Plus size={24} className="mr-3" /> Добавить упражнение</button>
        </div>

        {isSelectingExercise && (
          <div className="absolute inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col animate-in slide-in-from-bottom-10">
            <div className="px-4 md:px-8 py-5 md:py-6 border-b border-gray-100 dark:border-gray-800 flex items-center shadow-sm">
              <button onClick={() => setIsSelectingExercise(false)} className="p-2 -ml-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"><X size={28} /></button>
              <h3 className="text-xl md:text-2xl font-bold ml-3 dark:text-white">Выбрать упражнение</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3">
              {exercises.map((ex) => (
                <button key={ex.id} onClick={() => addExerciseToWorkout(ex)} className="w-full flex items-center justify-between p-5 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-3xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                  <div>
                    <div className="font-bold md:text-lg text-gray-900 dark:text-white">{ex.name}</div>
                    <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">{ex.bodyPart}</div>
                  </div>
                  <ChevronRight className="text-gray-300 dark:text-gray-600" size={24} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// КОМПОНЕНТ УПРАВЛЕНИЯ БАЗОЙ УПРАЖНЕНИЙ
// ============================================================================
function ManageExercisesModal({ exercises, onClose, onAdd, onEdit, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row md:items-center md:justify-center bg-[#f2f2f7] dark:bg-gray-950 md:bg-black/50 md:dark:bg-black/70 md:backdrop-blur-sm animate-in fade-in duration-200">
      <div className="flex-1 md:flex-none w-full h-full md:h-[80vh] md:max-w-2xl bg-[#f2f2f7] dark:bg-gray-950 md:rounded-[32px] md:shadow-2xl md:border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden relative animate-in slide-in-from-right-full md:slide-in-from-bottom-10 md:zoom-in-95">
        <div className="bg-white dark:bg-gray-900 px-4 md:px-8 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between shadow-sm">
          <div className="flex items-center">
            <button onClick={onClose} className="p-2 -ml-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-colors mr-3">
              <ChevronLeft size={28} />
            </button>
            <h2 className="text-xl md:text-2xl font-bold dark:text-white">База упражнений</h2>
          </div>
          <button onClick={onAdd} className="text-white p-2.5 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-colors">
            <Plus size={24} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-3">
          {exercises.map((ex) => (
            <div key={ex.id} className="bg-white dark:bg-gray-900 p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold md:text-lg text-gray-900 dark:text-white">{ex.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{ex.bodyPart}</p>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <button onClick={() => onEdit(ex)} className="p-3 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-colors"><Edit2 size={20} /></button>
                <button onClick={() => onDelete(ex.id)} className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-full transition-colors"><Trash2 size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// КОМПОНЕНТ ДОБАВЛЕНИЯ/РЕДАКТИРОВАНИЯ УПРАЖНЕНИЯ
// ============================================================================
function ExerciseFormModal({ initialData, onSave, onClose }) {
  const [name, setName] = useState(initialData?.name || '');
  const [bodyPart, setBodyPart] = useState(initialData?.bodyPart || 'Грудь');
  const isEditing = !!initialData?.id;
  const bodyParts = ['Грудь', 'Спина', 'Ноги', 'Плечи', 'Бицепс', 'Трицепс', 'Пресс', 'Кардио'];

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center p-4 md:p-0 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 w-full max-w-sm md:max-w-md rounded-[32px] p-6 md:p-8 animate-in slide-in-from-bottom-10 md:zoom-in-95 shadow-2xl border border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold dark:text-white">{isEditing ? 'Редактировать' : 'Новое упражнение'}</h2>
          <button onClick={onClose} className="bg-gray-100 dark:bg-gray-800 p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><X size={20} /></button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 ml-1">Название</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Например: Выпады с гантелями" className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-900 dark:text-white font-medium text-lg"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2 ml-1">Группа мышц</label>
            <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-900 dark:text-white font-medium text-lg appearance-none cursor-pointer">
              {bodyParts.map(part => <option key={part} value={part}>{part}</option>)}
            </select>
          </div>
          <button onClick={() => name.trim() && onSave({ id: initialData?.id, name, bodyPart })} disabled={!name.trim()} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 dark:disabled:bg-blue-900/50 disabled:cursor-not-allowed text-white font-bold py-4 text-lg rounded-2xl shadow-md transition-all active:scale-[0.98]">Сохранить</button>
        </div>
      </div>
    </div>
  );
}