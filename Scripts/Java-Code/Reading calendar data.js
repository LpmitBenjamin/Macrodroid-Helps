import android.database.Cursor;
import android.provider.CalendarContract;
import android.net.Uri;

String[] projection = new String[]{
    CalendarContract.Calendars._ID,
    CalendarContract.Calendars.ACCOUNT_NAME,
    CalendarContract.Calendars.CALENDAR_DISPLAY_NAME
};

Cursor cursor = appContext.getContentResolver().query(
    CalendarContract.Calendars.CONTENT_URI, 
    projection, 
    null, null, null
);

if (cursor != null) {
    while (cursor.moveToNext()) {
        long id = cursor.getLong(0);
        String account = cursor.getString(1);
        String name = cursor.getString(2);
        
        System.out.println("ID: " + id + " | Name: " + name + " | Konto: " + account);
    }
    cursor.close();
}
