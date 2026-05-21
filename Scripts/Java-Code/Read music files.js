import android.provider.MediaStore;
import android.database.Cursor;
import android.net.Uri;

Uri uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;

Cursor cursor = appContext.getContentResolver().query(
    uri,
    null,
    null,
    null,
    null
);

if (cursor != null) {
    while (cursor.moveToNext()) {

        String title = cursor.getString(
            cursor.getColumnIndex(MediaStore.Audio.Media.TITLE)
        );

        String artist = cursor.getString(
            cursor.getColumnIndex(MediaStore.Audio.Media.ARTIST)
        );

        System.out.println(title + " - " + artist);
    }
    cursor.close();
}
