// מחכים שהדף יטען במלואו לפני שמפעילים את הקוד
document.addEventListener('DOMContentLoaded', function() {
   
    // מוצאים את הטופס לפי ה-ID שלו
    const form = document.getElementById('signupForm');
   
    // מאזינים לאירוע השליחה של הטופס
    /**
 * פונקציה לטיפול באירוע שליחת הטופס.
 * מונעת את רענון הדף, שולפת את הנתונים מהשדות ומציגה הודעת הצלחה.
 *
 * @param {Event} event - אובייקט האירוע של שליחת הטופס
 */
    form.addEventListener('submit', function(event) {
       
        // עוצרים את רענון הדף האוטומטי
        event.preventDefault();
       
        // לוקחים את הערכים שהמשתמש הזין
        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email').value;
       
        // מציגים הודעת הצלחה עם השם של המשתמש
        alert('תודה רבה ' + nameValue + '! \nפרטיך נקלטו בהצלחה עם כתובת המייל: ' + emailValue);
       
        // מנקים את השדות של הטופס אחרי השליחה
        form.reset();
    });
});