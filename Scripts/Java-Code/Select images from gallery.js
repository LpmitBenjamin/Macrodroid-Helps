import android.database.Cursor;
import android.provider.MediaStore;
import android.net.Uri;

Uri uri = MediaStore.Images.Media.EXTERNAL_CONTENT_URI;

String[] projection = {
    MediaStore.Images.Media.DISPLAY_NAME,
    MediaStore.Images.Media.DATA
};

Cursor cursor = appContext.getContentResolver().query(
    uri,
    projection,
    null,
    null,
    MediaStore.Images.Media.DATE_ADDED + " DESC"
);

if (cursor != null) {
    while (cursor.moveToNext()) {

        String name = cursor.getString(0);
        String path = cursor.getString(1);

        System.out.println("🔴 IMG: " + name + "\n🟢" + path + "\n");
    }
    cursor.close();
}
