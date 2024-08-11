import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './LoginHome.module.css'; // CSS dosyasını da ekliyoruz
/* BURASI ÖĞRENCİ ÖĞRETMEN ORTAK ALANI */
function LoginHome() {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, { date: date.toDateString(), text: noteText }]);
      setNoteText('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Hoşgeldiniz!</h1>
      
      <div className={styles.calendarSection}>
        <h2>Takvim</h2>
        <Calendar onChange={setDate} value={date} />
      </div>

      <div className={styles.notesSection}>
        <h2>Notlar</h2>
        <textarea 
          value={noteText} 
          onChange={(e) => setNoteText(e.target.value)} 
          placeholder="Notunuzu buraya yazın..." 
          className={styles.noteInput}
        />
        <button onClick={handleAddNote} className={styles.addButton}>Not Ekle</button>
        <ul className={styles.notesList}>
          {notes.map((note, index) => (
            <li key={index}>
              <strong>{note.date}:</strong> {note.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoginHome;
