import android.net.ConnectivityManager;
import android.net.NetworkInfo;

ConnectivityManager cm = (ConnectivityManager) appContext.getSystemService("connectivity");

NetworkInfo active = cm.getActiveNetworkInfo();

if (active != null && active.isConnected()) {
    if (active.getType() == ConnectivityManager.TYPE_WIFI) {
        System.out.println("Network: WiFi");
    } else if (active.getType() == ConnectivityManager.TYPE_MOBILE) {
        System.out.println("Network: Mobile data");
    }
} else {
    System.out.println("No network");
}
