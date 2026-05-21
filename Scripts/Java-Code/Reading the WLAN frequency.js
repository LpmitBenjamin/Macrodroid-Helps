import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;

WifiManager wifiManager = (WifiManager) appContext.getSystemService("wifi");
WifiInfo wifiInfo = wifiManager.getConnectionInfo();

if (wifiInfo != null) {
    int freq = wifiInfo.getFrequency();

    System.out.println("Frequenz: " + freq + " MHz");

    if (freq >= 5000) {
        System.out.println("Status: 5 GHz");
    } else {
        System.out.println("Status: 2.4 GHz");
    }
} else {
    System.out.println("Error: WLAN data could not be retrieved.");
}
