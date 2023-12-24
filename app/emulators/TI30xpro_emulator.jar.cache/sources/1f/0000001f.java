package com.p000ti.p001et.smartview.jsemulator;

import com.p000ti.p001et.goioComm.goioCommManager.GoIOCommManager;
import com.p000ti.p001et.pythonComm.PythonCommManager;
import com.p000ti.p001et.smartview.jsemulator.keymapping.JSKeyManager;
import com.p000ti.p001et.smartview.jsemulator.skins.JSSkinManager;
import com.p000ti.p001et.smartview.jsemulator.virtuastream.VirtualStreamInterface;
import com.p000ti.p001et.smartview.jsemulator.virtuastream.impl.JavaPluginVirtualStream;
import com.p000ti.p001et.smartview.jsemulator.virtuastream.impl.JavaPluginVirtualStreamChannel;
import com.p000ti.p001et.smartview.jsemulator.virtuastream.impl.TCPClientVirtualStream;
import com.teamdev.jxbrowser.chromium.Browser;
import com.teamdev.jxbrowser.chromium.BrowserContext;
import com.teamdev.jxbrowser.chromium.BrowserContextParams;
import com.teamdev.jxbrowser.chromium.BrowserType;
import com.teamdev.jxbrowser.chromium.JSBoolean;
import com.teamdev.jxbrowser.chromium.JSNumber;
import com.teamdev.jxbrowser.chromium.JSObject;
import com.teamdev.jxbrowser.chromium.JSString;
import com.teamdev.jxbrowser.chromium.JSUndefined;
import com.teamdev.jxbrowser.chromium.JSValue;
import com.teamdev.jxbrowser.chromium.events.FailLoadingEvent;
import com.teamdev.jxbrowser.chromium.events.FinishLoadingEvent;
import com.teamdev.jxbrowser.chromium.events.FrameLoadEvent;
import com.teamdev.jxbrowser.chromium.events.LoadEvent;
import com.teamdev.jxbrowser.chromium.events.LoadListener;
import com.teamdev.jxbrowser.chromium.events.NetError;
import com.teamdev.jxbrowser.chromium.events.ProvisionalLoadingEvent;
import com.teamdev.jxbrowser.chromium.events.ScriptContextAdapter;
import com.teamdev.jxbrowser.chromium.events.ScriptContextEvent;
import com.teamdev.jxbrowser.chromium.events.StartLoadingEvent;
import com.teamdev.jxbrowser.chromium.javafx.BrowserView;
import com.ti.et.smartview.exports.IMetadata;
import com.ti.et.smartview.exports.IPluginListener;
import com.ti.et.smartview.exports.ITIImage;
import com.ti.et.smartview.exports.ITIMultiviewItem;
import com.ti.et.smartview.exports.ITIStateFile;
import com.ti.et.smartview.exports.SDA.EmulatorLoader;
import com.ti.et.smartview.exports.SDA.EmulatorMap;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.channels.Pipe;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.FileAttribute;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javafx.application.Platform;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.EventHandler;
import javafx.scene.Node;
import javafx.scene.image.Image;
import javafx.scene.input.ClipboardContent;
import javafx.scene.input.DataFormat;
import javafx.scene.input.DragEvent;
import javafx.scene.input.Dragboard;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyEvent;
import javafx.scene.input.MouseEvent;
import javafx.scene.input.TransferMode;
import javafx.scene.layout.BorderPane;

/* renamed from: com.ti.et.smartview.jsemulator.EmulatorView */
/* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView.class */
public class EmulatorView extends BorderPane {
    protected BrowserView webView;
    protected Browser webEngine;

    /* renamed from: a */
    private Node f81a;
    public String screenContents;

    /* renamed from: f */
    private LoadListener f86f;

    /* renamed from: g */
    private String f87g;

    /* renamed from: h */
    private boolean f88h;

    /* renamed from: j */
    private VirtualStreamInterface f90j;

    /* renamed from: m */
    private EventHandler<DragEvent> f93m;

    /* renamed from: n */
    private EventHandler<MouseEvent> f94n;

    /* renamed from: o */
    private EventHandler<MouseEvent> f95o;
    protected JavaApp javaApp;

    /* renamed from: B */
    private EventHandler<MouseEvent> f108B;

    /* renamed from: b */
    private static Logger f82b = Logger.getLogger(EmulatorView.class.getSimpleName());

    /* renamed from: k */
    private static int f91k = 2;
    protected JSEmulator emulator = null;
    protected JSKeyManager keyManager = null;

    /* renamed from: c */
    private JSSkinManager f83c = null;
    protected JSLargeScreenView largeScreenView = null;

    /* renamed from: d */
    private ITIStateFile f84d = null;

    /* renamed from: e */
    private boolean f85e = false;
    public AtomicBoolean screenCaptureAvailable = new AtomicBoolean(false);

    /* renamed from: i */
    private boolean f89i = false;
    protected boolean forceReinitFlag = false;

    /* renamed from: l */
    private boolean f92l = false;

    /* renamed from: p */
    private boolean f96p = false;
    protected boolean isView3Refreshing = false;

    /* renamed from: q */
    private List<IPluginListener> f97q = new ArrayList();

    /* renamed from: r */
    private Path f98r = null;

    /* renamed from: s */
    private ScriptContextAdapter f99s = null;

    /* renamed from: t */
    private List<KeyCode> f100t = (List) Stream.of((Object[]) new KeyCode[]{KeyCode.UP, KeyCode.DOWN, KeyCode.RIGHT, KeyCode.LEFT}).collect(Collectors.toList());

    /* renamed from: u */
    private EventHandler<KeyEvent> f101u = new EventHandler<KeyEvent>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.5
        public void handle(KeyEvent event) {
            KeyEvent keyEvent = (KeyEvent) event.clone();
            event.consume();
            if ((!event.isControlDown() || !event.isMetaDown()) && ((!EmulatorView.m36a(event) || !event.isMetaDown()) && ((!EmulatorView.m36a(event) || !event.isShiftDown()) && !EmulatorView.this.f100t.contains(event.getCode())))) {
                EmulatorView.this.getParent().fireEvent(keyEvent);
                keyEvent.consume();
            }
            EmulatorView.this.emulator.keyPressed(event);
        }
    };

    /* renamed from: v */
    private EventHandler<KeyEvent> f102v = new EventHandler<KeyEvent>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.6
        public void handle(KeyEvent event) {
            KeyEvent keyEvent = (KeyEvent) event.clone();
            event.consume();
            if ((!event.isControlDown() || !event.isMetaDown()) && ((!EmulatorView.m36a(event) || !event.isMetaDown()) && ((!EmulatorView.m36a(event) || !event.isShiftDown()) && !EmulatorView.this.f100t.contains(event.getCode())))) {
                EmulatorView.this.getParent().fireEvent(keyEvent);
                keyEvent.consume();
            }
            EmulatorView.this.emulator.keyReleased(event);
        }
    };

    /* renamed from: w */
    private ExecuteScriptCallable f103w = new ExecuteScriptCallable();

    /* renamed from: x */
    private KeyCode f104x = null;

    /* renamed from: y */
    private IOProxy f105y = null;

    /* renamed from: z */
    private boolean f106z = false;

    /* renamed from: A */
    private Runnable f107A = new Runnable() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.8
        @Override // java.lang.Runnable
        public void run() {
            if (EmulatorView.this.webEngine != null || EmulatorView.this.f89i) {
                EmulatorView.f82b.log(Level.FINEST, "About to finalize the webView");
                if (EmulatorView.this.webEngine != null && !EmulatorView.this.webEngine.isDisposed()) {
                    EmulatorView.this.webEngine.dispose();
                    EmulatorView.this.f97q.stream().forEach(iPluginListener -> {
                        iPluginListener.onPluginDisposed();
                    });
                    EmulatorView.this.webEngine.removeScriptContextListener(EmulatorView.this.f99s);
                    EmulatorView.this.f97q.clear();
                    EmulatorView.this.cleanBrowserContextFolders();
                }
                EmulatorView.this.webEngine = null;
                EmulatorView.this.webView = null;
                EmulatorView.this.f106z = false;
                if (EmulatorView.this.forceReinitFlag) {
                    EmulatorView.f82b.log(Level.INFO, "Will reinitialize");
                    EmulatorView.this.emulator.forcedInitEmulatorView();
                    EmulatorView.this.forceReinitFlag = false;
                    return;
                }
                return;
            }
            EmulatorView.f82b.log(Level.FINEST, "Couldn't finalize the webView");
            EmulatorView.this.eliminateReferences();
        }
    };

    /* renamed from: C */
    private boolean f109C = false;

    public void init(JSEmulator emulator, JSKeyManager svKeyManager, JSLargeScreenView largeScreenView, JSSkinManager skinManager, ITIStateFile currentState, String currentFaceplate, boolean noDisplay) {
        this.f81a = this;
        paintBGColor("#7E8080");
        this.webEngine = new Browser(BrowserType.LIGHTWEIGHT, createBrowserContext());
        f82b.log(Level.INFO, "Setting up context folder in " + this.webEngine.getContext().getDataDir());
        this.webView = new BrowserView(this.webEngine);
        this.emulator = emulator;
        this.keyManager = svKeyManager;
        this.f83c = skinManager;
        this.largeScreenView = largeScreenView;
        this.f84d = currentState;
        this.f87g = currentFaceplate;
        this.f88h = noDisplay;
        this.largeScreenView.setNoRefresh(noDisplay);
        this.webView.setId("webviewEmulator");
        if (!this.webView.getStyleClass().contains("paneEmulatorView")) {
            this.webView.getStyleClass().add("paneEmulatorView");
        }
        if (!getStyleClass().contains("paneEmulatorView")) {
            getStyleClass().add("paneEmulatorView");
        }
        addEventFilter(KeyEvent.KEY_PRESSED, this.f101u);
        addEventFilter(KeyEvent.KEY_RELEASED, this.f102v);
        this.f93m = new EventHandler<DragEvent>(this) { // from class: com.ti.et.smartview.jsemulator.EmulatorView.1
            public void handle(DragEvent evt) {
                evt.consume();
            }
        };
        this.f108B = new EventHandler<MouseEvent>(this) { // from class: com.ti.et.smartview.jsemulator.EmulatorView.2
            public void handle(MouseEvent evt) {
                evt.consume();
            }
        };
        this.f94n = new EventHandler<MouseEvent>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.3
            public void handle(MouseEvent evt) {
                if (EmulatorView.this.f85e) {
                    Dragboard startDragAndDrop = EmulatorView.this.startDragAndDrop(new TransferMode[]{TransferMode.COPY});
                    startDragAndDrop.clear();
                    ClipboardContent clipboardContent = new ClipboardContent();
                    ArrayList arrayList = new ArrayList();
                    EmulatorView.f82b.log(Level.FINEST, "It's Windows, attempting to drag image");
                    Image draggableImage = EmulatorView.this.largeScreenView.getDraggableImage();
                    if (draggableImage != null) {
                        clipboardContent.put(DataFormat.IMAGE, draggableImage);
                        arrayList.add(EmulatorView.this.largeScreenView.getDraggableFile());
                        clipboardContent.putFiles(arrayList);
                        clipboardContent.put(EmulatorView.this.largeScreenView.getTIImageDataFormat(), EmulatorView.this.largeScreenView.getLastARGBDataAsString());
                        startDragAndDrop.setContent(clipboardContent);
                    }
                }
                EmulatorView.this.f85e = false;
                evt.consume();
            }
        };
        this.f95o = new EventHandler<MouseEvent>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.4
            public void handle(MouseEvent arg0) {
                EmulatorView.this.executeScript("calc_instance.relSVGKey()");
            }
        };
        initBrowser();
        this.f96p = System.getProperty("os.name").toLowerCase().indexOf("win") >= 0;
    }

    /* renamed from: a */
    private void m42a() {
        addEventFilter(MouseEvent.MOUSE_DRAGGED, this.f108B);
        addEventFilter(MouseEvent.DRAG_DETECTED, this.f94n);
        this.webView.addEventFilter(DragEvent.DRAG_OVER, this.f93m);
        this.webView.addEventFilter(DragEvent.DRAG_ENTERED, this.f93m);
        this.webView.addEventFilter(DragEvent.DRAG_ENTERED_TARGET, this.f93m);
        this.webView.addEventFilter(DragEvent.DRAG_DONE, this.f93m);
        this.webView.addEventFilter(DragEvent.DRAG_DROPPED, this.f93m);
        this.webView.addEventFilter(DragEvent.DRAG_EXITED, this.f93m);
        this.webView.addEventFilter(DragEvent.DRAG_EXITED_TARGET, this.f93m);
        this.webView.addEventFilter(MouseEvent.MOUSE_EXITED, this.f95o);
    }

    /* renamed from: a */
    private static boolean m36a(KeyEvent keyEvent) {
        KeyCode code = keyEvent.getCode();
        return code == KeyCode.ALT || code == KeyCode.ALT_GRAPH || keyEvent.isAltDown();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$EmulatorViewWebListener */
    /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$EmulatorViewWebListener.class */
    public class EmulatorViewWebListener implements LoadListener {

        /* renamed from: a */
        private String f126a;

        /* renamed from: b */
        private boolean f127b;

        /* renamed from: c */
        private JSSkinManager f128c;

        public EmulatorViewWebListener(JSSkinManager skinManager, String currentFaceplate, boolean noDisplay, JSLargeScreenView largeScreenView) {
            this.f128c = null;
            this.f126a = currentFaceplate;
            this.f127b = noDisplay;
            this.f128c = skinManager;
            largeScreenView.setNoRefresh(noDisplay);
        }

        public void onFinishLoadingFrame(FinishLoadingEvent arg0) {
            EmulatorView.f82b.log(Level.INFO, "Main Frame has finished loading.");
            JSValue jSValue = (JSValue) EmulatorView.this.executeScript("window");
            if (EmulatorView.this.f109C) {
                if (EmulatorView.f91k == 0) {
                    EmulatorView.this.f90j = new TCPClientVirtualStream();
                } else if (EmulatorView.f91k == 1) {
                    EmulatorView.f82b.log(Level.INFO, "JavaPluginVirtualStream() created");
                    EmulatorView.this.f90j = new JavaPluginVirtualStream();
                } else {
                    EmulatorView.f82b.log(Level.INFO, "JavaPluginVirtualStreamChannel() created");
                    EmulatorView.this.f90j = new JavaPluginVirtualStreamChannel();
                }
            }
            if (jSValue != null) {
                jSValue.asObject().setProperty("app", new JavaApp(EmulatorView.this.f90j));
            }
            String bGColor = this.f128c.getBGColor(this.f126a, this.f127b);
            EmulatorView.this.paintBGColor(bGColor);
            if (EmulatorView.this.executeScript("var state_sv = " + (EmulatorView.this.f84d != null ? EmulatorView.this.f84d.getData() : null)) == null) {
                EmulatorView.f82b.log(Level.SEVERE, "Error loading StateFile");
                EmulatorView.f82b.log(Level.SEVERE, "Restoring to Default State");
                EmulatorView.this.forceReinitFlag = true;
                EmulatorView.this.f89i = true;
                EmulatorView.this.shutDown();
                return;
            }
            EmulatorView.f82b.log(Level.INFO, "Launch emulator...");
            EmulatorView.this.executeScript("calc_instance.launchEmulator(state_sv, " + this.f127b + ", '" + bGColor + "', '" + this.f128c.getThemeName(this.f126a) + "')");
            Platform.runLater(() -> {
                EmulatorView.this.largeScreenView.setDisplaySettings(EmulatorView.this.getDisplaySettings());
            });
            EmulatorView.this.emulator.notifyEmulatorFinishLoading(true);
            int i = 20;
            while (!EmulatorView.this.isInitialized() && i > 0) {
                i--;
                EmulatorView.f82b.log(Level.INFO, "Waiting for EMU to be initialized");
                try {
                    Thread.sleep(100L);
                } catch (InterruptedException unused) {
                }
            }
            EmulatorView.this.m42a();
            if (EmulatorView.this.emulator.supportsUserStatefiles()) {
                EmulatorView.f82b.log(Level.INFO, "About to get metadata from javascript");
                jSValue.asObject().setProperty("metadata", EmulatorView.this.emulator.getHostApplication().getMetadata());
                EmulatorView.this.emulator.getHostApplication().getMetadata().storeMetadata(EmulatorView.this.getCurrentMetadata());
            } else if (jSValue != null && jSValue.asObject().hasProperty("metadata")) {
                jSValue.asObject().removeProperty("metadata");
            }
            EmulatorView.this.f97q.stream().forEach(iPluginListener -> {
                iPluginListener.onPluginFinishLoading();
            });
        }

        public void onStartLoadingFrame(StartLoadingEvent event) {
            if (event.isMainFrame()) {
                EmulatorView.this.emulator.notifyEmulatorFinishLoading(false);
                EmulatorView.f82b.log(Level.INFO, "Main frame has started loading");
                EmulatorView.this.f97q.stream().forEach(iPluginListener -> {
                    iPluginListener.onPluginStartLoading();
                });
            }
        }

        public void onProvisionalLoadingFrame(ProvisionalLoadingEvent event) {
            if (event.isMainFrame()) {
                EmulatorView.f82b.log(Level.INFO, "Provisional load was committed for a frame");
            }
        }

        public void onFailLoadingFrame(FailLoadingEvent event) {
            NetError errorCode = event.getErrorCode();
            if (event.isMainFrame()) {
                EmulatorView.f82b.log(Level.INFO, "Main frame has failed loading: " + errorCode);
                EmulatorView.this.webEngine.loadHTML("<html><body></body></html>");
            }
        }

        public void onDocumentLoadedInFrame(FrameLoadEvent event) {
            EmulatorView.f82b.log(Level.INFO, "Frame document is loaded.");
        }

        public void onDocumentLoadedInMainFrame(LoadEvent event) {
            EmulatorView.f82b.log(Level.INFO, "Main frame document is loaded.");
        }
    }

    public void paintBGColor(String bgColor) {
        f82b.log(Level.FINE, "bgColor: " + bgColor);
        setStyle("-fx-padding: 20 15 20 15;" + MessageFormat.format("-fx-background-color:{0};", bgColor));
    }

    public void initBrowser() {
        f82b.log(Level.INFO, "Extract Emulator...");
        boolean z = false;
        if (EmulatorResourceExtractor.getInstance().extractEmulatorContent()) {
            if (!EmulatorMap.getInstance().isEmulatorLoaded(this.emulator.getCalculatorModelName())) {
                String loadEmulatorN = EmulatorLoader.loadEmulatorN(EmulatorResourceExtractor.getInstance().getEmulatorMinFilePath(), System.getProperty("APP_NAME", ""));
                if (loadEmulatorN != null) {
                    EmulatorMap.getInstance().addEmulatorCode(this.emulator.getCalculatorModelName(), loadEmulatorN);
                }
            }
            z = true;
        }
        if (z) {
            this.f99s = new ScriptContextAdapter() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.7
                public void onScriptContextCreated(ScriptContextEvent evt) {
                    EmulatorView.f82b.log(Level.INFO, "Load emulator code.");
                    Browser browser = evt.getBrowser();
                    String calculatorModelName = EmulatorView.this.emulator.getCalculatorModelName();
                    String emulatorCode = EmulatorMap.getInstance().getEmulatorCode(calculatorModelName);
                    if (emulatorCode != null) {
                        EmulatorView.f82b.log(Level.FINEST, "emuModelName=" + calculatorModelName + ",jsEmuCodeLen=" + emulatorCode.length());
                        if (browser.executeJavaScriptAndReturnValue(emulatorCode).isNull()) {
                            EmulatorView.f82b.log(Level.SEVERE, "Error while loading emulator");
                            Platform.exit();
                        }
                        EmulatorView.f82b.log(Level.INFO, "Emulator code is ready.");
                        return;
                    }
                    EmulatorView.f82b.log(Level.SEVERE, "Error while getting Emulator code.");
                    Platform.exit();
                }
            };
            this.webEngine.addScriptContextListener(this.f99s);
            this.f86f = new EmulatorViewWebListener(this.f83c, this.f87g, this.f88h, this.largeScreenView);
            this.webEngine.addLoadListener(this.f86f);
            this.webEngine.loadURL("file://" + EmulatorResourceExtractor.getInstance().getEmulatorHTML());
            setCenter(this.webView);
            return;
        }
        f82b.log(Level.SEVERE, "Failed to load Emulator");
    }

    public String sendDebugCommand(String command) {
        return (String) executeScript("calc_instance.sendDebugCommand('" + command + "')");
    }

    public int restoreDefaultState() {
        boolean booleanValue = ((Boolean) executeScript("calc_instance.resetSVEmulator()")).booleanValue();
        if (booleanValue && this.emulator.supportsUserStatefiles()) {
            this.emulator.getHostApplication().getMetadata().storeMetadata(getCurrentMetadata());
        }
        return booleanValue ? 1 : 0;
    }

    public boolean clearHighlightedKey() {
        return ((Boolean) executeScript("calc_instance.clearHighlightedKey()")).booleanValue();
    }

    public void setMetadataInfo(String infoStr) {
        executeScript("calc_instance.setMetadataInfo('" + infoStr + "')");
    }

    public Map<IMetadata.Info, String> verifyChecksumAndGetMetaInfo(String stateFileData) {
        return m39a("calc_instance.verifyChecksumAndGetMetaInfo(" + stateFileData + ")");
    }

    public Map<IMetadata.Info, String> getCurrentMetadata() {
        return m39a("calc_instance.getCurrentMetaInfo()");
    }

    public String getFactoryDefaultOSVersion() {
        String str = null;
        Object executeScript = executeScript("calc_instance.getFactoryDefaultOSVersion()");
        if (executeScript != null && (executeScript instanceof JSString)) {
            String stringValue = ((JSString) executeScript).getStringValue();
            str = stringValue;
            if (stringValue.equals("undefined")) {
                str = null;
            }
        }
        return str;
    }

    /* renamed from: a */
    private Map<IMetadata.Info, String> m39a(String str) {
        int i = 5;
        Map<IMetadata.Info, String> map = null;
        while (i > 0 && (map == null || map.isEmpty())) {
            Object executeScript = executeScript(str);
            if (executeScript != null && (executeScript instanceof JSValue) && ((JSValue) executeScript).isObject()) {
                f82b.log(Level.INFO, "Got response, now try to parse the info.");
                map = m41a(((JSValue) executeScript).asObject());
            } else {
                f82b.log(Level.INFO, "Could not parse info, not the expected format.");
            }
            i--;
            try {
                Thread.sleep(100L);
            } catch (InterruptedException unused) {
            }
        }
        if (map == null || map.isEmpty()) {
            f82b.log(Level.SEVERE, "Failed to retrive Metadata from emulator.");
        } else {
            f82b.log(Level.INFO, "Metadata retrieved successfully.");
        }
        return map;
    }

    /* JADX WARN: Code restructure failed: missing block: B:14:0x0061, code lost:
        r5 = null;
        com.p000ti.p001et.smartview.jsemulator.EmulatorView.f82b.log(java.util.logging.Level.WARNING, "Failed to parse field: " + r0.getKey() + ", either the property was not found in the object or the value is not a String or Number.");
     */
    /* renamed from: a */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct code enable 'Show inconsistent code' option in preferences
    */
    private static java.util.Map<com.ti.et.smartview.exports.IMetadata.Info, java.lang.String> m41a(com.teamdev.jxbrowser.chromium.JSObject r4) {
        /*
            r0 = 0
            r5 = r0
            r0 = r4
            if (r0 == 0) goto La2
            java.util.HashMap r0 = new java.util.HashMap
            r1 = r0
            r1.<init>()
            r5 = r0
            java.util.logging.Logger r0 = com.p000ti.p001et.smartview.jsemulator.EmulatorView.f82b     // Catch: java.lang.Throwable -> L8d
            java.util.logging.Level r1 = java.util.logging.Level.INFO     // Catch: java.lang.Throwable -> L8d
            java.lang.String r2 = "Parsing info..."
            r0.log(r1, r2)     // Catch: java.lang.Throwable -> L8d
            com.ti.et.smartview.exports.IMetadata$Info[] r0 = com.ti.et.smartview.exports.IMetadata.Info.values()     // Catch: java.lang.Throwable -> L8d
            r1 = r0
            r6 = r1
            int r0 = r0.length     // Catch: java.lang.Throwable -> L8d
            r7 = r0
            r0 = 0
            r8 = r0
        L23:
            r0 = r8
            r1 = r7
            if (r0 >= r1) goto L8a
            r0 = r6
            r1 = r8
            r0 = r0[r1]     // Catch: java.lang.Throwable -> L8d
            r9 = r0
            r0 = r4
            r1 = r9
            java.lang.String r1 = r1.getKey()     // Catch: java.lang.Throwable -> L8d
            com.teamdev.jxbrowser.chromium.JSValue r0 = r0.getProperty(r1)     // Catch: java.lang.Throwable -> L8d
            r1 = r0
            r10 = r1
            boolean r0 = r0.isString()     // Catch: java.lang.Throwable -> L8d
            if (r0 == 0) goto L4b
            r0 = r10
            java.lang.String r0 = r0.getStringValue()     // Catch: java.lang.Throwable -> L8d
            r10 = r0
            goto L79
        L4b:
            r0 = r10
            boolean r0 = r0.isNumber()     // Catch: java.lang.Throwable -> L8d
            if (r0 == 0) goto L61
            r0 = r10
            double r0 = r0.getNumberValue()     // Catch: java.lang.Throwable -> L8d
            int r0 = (int) r0     // Catch: java.lang.Throwable -> L8d
            java.lang.String r0 = java.lang.String.valueOf(r0)     // Catch: java.lang.Throwable -> L8d
            r10 = r0
            goto L79
        L61:
            r0 = 0
            r5 = r0
            java.util.logging.Logger r0 = com.p000ti.p001et.smartview.jsemulator.EmulatorView.f82b     // Catch: java.lang.Throwable -> L8d
            java.util.logging.Level r1 = java.util.logging.Level.WARNING     // Catch: java.lang.Throwable -> L8d
            r2 = r9
            java.lang.String r2 = r2.getKey()     // Catch: java.lang.Throwable -> L8d
            java.lang.String r2 = "Failed to parse field: " + r2 + ", either the property was not found in the object or the value is not a String or Number."     // Catch: java.lang.Throwable -> L8d
            r0.log(r1, r2)     // Catch: java.lang.Throwable -> L8d
            goto La2
        L79:
            r0 = r5
            r1 = r9
            r2 = r10
            java.lang.Object r0 = r0.put(r1, r2)     // Catch: java.lang.Throwable -> L8d
            int r8 = r8 + 1
            goto L23
        L8a:
            goto La2
        L8d:
            r6 = move-exception
            r0 = 0
            r5 = r0
            java.util.logging.Logger r0 = com.p000ti.p001et.smartview.jsemulator.EmulatorView.f82b
            java.util.logging.Level r1 = java.util.logging.Level.SEVERE
            r2 = r6
            java.lang.String r2 = r2.getMessage()
            java.lang.String r2 = "Failed to parse metadata info: " + r2
            r0.log(r1, r2)
        La2:
            r0 = r5
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.p000ti.p001et.smartview.jsemulator.EmulatorView.m41a(com.teamdev.jxbrowser.chromium.JSObject):java.util.Map");
    }

    public ITIStateFile getCurrentState() {
        JSValue jSValue;
        JSEmulatorState jSEmulatorState = new JSEmulatorState();
        executeScript("calc_instance.getStateData(true)");
        do {
            try {
                Thread.sleep(10L);
            } catch (InterruptedException e) {
                f82b.log(Level.WARNING, "Thread was interrupted.", e.getMessage());
            }
            jSValue = (JSValue) executeScript("calc_instance.getStateData(false)");
        } while (jSValue instanceof JSUndefined);
        jSEmulatorState.setData(jSValue.getStringValue());
        return jSEmulatorState;
    }

    public boolean setStateFile(ITIStateFile state) {
        boolean z = false;
        if (state != null) {
            z = ((Boolean) executeScript("calc_instance.setStateData('" + state.getData() + "')")).booleanValue();
        }
        return z;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$ExecuteScriptCallable */
    /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$ExecuteScriptCallable.class */
    public class ExecuteScriptCallable implements Callable<Object> {

        /* renamed from: a */
        private String f130a;

        private ExecuteScriptCallable() {
        }

        public void setScriptCode(String scriptCode) {
            this.f130a = scriptCode;
        }

        @Override // java.util.concurrent.Callable
        public Object call() throws Exception {
            EmulatorView.f82b.log(Level.INFO, "Running " + (this.f130a.length() > 100 ? this.f130a.substring(0, 100) : this.f130a));
            return EmulatorView.this.webEngine.executeJavaScriptAndReturnValue(this.f130a);
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v28, types: [java.lang.Object] */
    /* JADX WARN: Type inference failed for: r0v6, types: [com.ti.et.smartview.jsemulator.JSEmulator] */
    /* JADX WARN: Type inference failed for: r0v7, types: [java.lang.Exception] */
    protected Object executeScript(String scriptCode) {
        ?? r0;
        JSBoolean jSBoolean = null;
        if (this.webEngine == null || (r0 = this.emulator) == 0) {
            f82b.log(Level.SEVERE, "Skipping script execution due to null web engine or emulator");
            return null;
        }
        try {
            this.f103w.setScriptCode(scriptCode);
            if (!this.emulator.isEmulatorFinishLoading()) {
                f82b.log(Level.INFO, "Executing script when emulator not fully initialized yet (not necessarily an issue) " + (scriptCode.length() > 100 ? scriptCode.substring(0, 100) : scriptCode));
            }
            r0 = this.emulator.getHostApplication().getConcurrencyManager().runOnApplicationThread(this.f103w);
            jSBoolean = r0;
        } catch (Exception e) {
            String message = r0.getMessage();
            String str = message;
            if (message == null) {
                str = "UNKNOWN";
            }
            f82b.log(Level.SEVERE, "JSException: Script execution failed: " + str);
        }
        if (jSBoolean != null && (jSBoolean instanceof JSBoolean)) {
            jSBoolean = Boolean.valueOf(jSBoolean.getBooleanValue());
        }
        return jSBoolean;
    }

    public OutputStream getDataOut() {
        f82b.log(Level.INFO, "getDataOut");
        return this.f90j.getDataOut();
    }

    public void setDataIn(OutputStream os) {
        this.f90j.setDataIn(os);
    }

    public Pipe getPipe() {
        if (f91k == 2) {
            f82b.log(Level.INFO, "getPipe");
            return ((JavaPluginVirtualStreamChannel) this.f90j).getPipe();
        }
        return null;
    }

    public ITIImage getScreenCapture() {
        byte[] lastImageDataArray = this.largeScreenView.getLastImageDataArray();
        TIImageImpl tIImageImpl = null;
        if (lastImageDataArray.length > 0) {
            TIImageImpl tIImageImpl2 = new TIImageImpl(this.largeScreenView.getDisplaySettings().getPixelsWide(), this.largeScreenView.getDisplaySettings().getPixelsHeight());
            tIImageImpl = tIImageImpl2;
            tIImageImpl2.setImageData(lastImageDataArray);
        }
        return tIImageImpl;
    }

    public boolean keyPressed(KeyEvent event) {
        Boolean bool = Boolean.FALSE;
        String codeFromEvent = this.keyManager.getCodeFromEvent(event);
        f82b.log(Level.FINE, event.getCode().name() + " calc_instance.sendSVGKey('" + codeFromEvent + "')");
        if (codeFromEvent != null && !this.isView3Refreshing) {
            bool = (Boolean) executeScript("calc_instance.sendSVGKey('" + codeFromEvent + "')");
            this.f104x = event.getCode();
            f82b.log(Level.FINE, "Send key result: " + bool);
        }
        if (bool == null) {
            return false;
        }
        return bool.booleanValue();
    }

    public boolean keyReleased(KeyEvent keyEvent) {
        Boolean bool = Boolean.FALSE;
        f82b.log(Level.FINE, "keyReleased" + keyEvent.getCode().name());
        if (this.f104x != null && this.f104x.equals(keyEvent.getCode()) && !this.isView3Refreshing) {
            bool = (Boolean) executeScript("calc_instance.relSVGKey()");
            f82b.log(Level.FINE, "Key released: " + bool);
        }
        if (bool == null) {
            return false;
        }
        return bool.booleanValue();
    }

    public DisplaySettings getDisplaySettings() {
        executeScript("calc_instance.getDisplaySettings()");
        return this.javaApp.getDisplaySettings();
    }

    public String[] getSkinIds() {
        return this.f83c.geSkinIds();
    }

    public boolean setSkin(String id, boolean noDisplay) {
        this.f88h = noDisplay;
        forceRepaintEmulatorDisplay_ELG();
        this.largeScreenView.setNoRefresh(noDisplay);
        paintBGColor(this.f83c.getBGColor(id, noDisplay));
        return ((Boolean) executeScript(this.f83c.generateSwitchFaceplateScript(id, noDisplay))).booleanValue();
    }

    protected void forceRepaintEmulatorDisplay_ELG() {
        if (!this.f96p && !this.f88h && this.emulator.isELGEmulator()) {
            f82b.log(Level.FINE, "Calling setForceRepaint");
            executeScript("calc_instance.setForceRepaint()");
        }
    }

    public Node getRootNode() {
        return this.f81a;
    }

    public boolean getIsSafeToClose() {
        return ((Boolean) executeScript("calc_instance.isSafeToClose()")).booleanValue();
    }

    public void registerBrowserListener(IPluginListener listener) {
        if (listener != null) {
            this.f97q.add(listener);
        }
    }

    public void unregisterBrowserListener(IPluginListener listener) {
        if (listener != null) {
            this.f97q.remove(listener);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$IOProxy */
    /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$IOProxy.class */
    public class IOProxy {

        /* renamed from: a */
        private VirtualStreamInterface f132a;

        /* renamed from: b */
        private Thread f133b = null;

        /* renamed from: c */
        private boolean f134c = false;

        /* renamed from: d */
        private int f135d = -1;

        /* renamed from: e */
        private int f136e = 0;

        /* renamed from: f */
        private String f137f = null;

        /* renamed from: g */
        private String f138g = null;

        public IOProxy(EmulatorView this$0, VirtualStreamInterface virtualStream) {
            this.f132a = virtualStream;
        }

        public int openIOStream() {
            this.f133b = new Thread("innerIOProxy") { // from class: com.ti.et.smartview.jsemulator.EmulatorView.IOProxy.1
                @Override // java.lang.Thread, java.lang.Runnable
                public void run() {
                    synchronized (IOProxy.this) {
                        IOProxy.this.f135d = IOProxy.this.f132a.openIOStream();
                        EmulatorView.f82b.log(Level.INFO, "IOProxy openIOStream and id is " + IOProxy.this.f135d);
                        IOProxy.this.notifyAll();
                    }
                    while (true) {
                        synchronized (IOProxy.this) {
                            while (IOProxy.this.f136e == 0 && !IOProxy.this.f134c) {
                                try {
                                    IOProxy.this.wait(1000L);
                                } catch (InterruptedException unused) {
                                }
                            }
                        }
                        if (!IOProxy.this.f134c) {
                            switch (IOProxy.this.f136e) {
                                case 1:
                                    IOProxy.this.f137f = IOProxy.this.f132a.readIOStream();
                                    IOProxy.this.m31a();
                                    break;
                                case 2:
                                    IOProxy.this.f132a.writeIOStream(IOProxy.this.f138g);
                                    IOProxy.this.m31a();
                                    break;
                            }
                        } else {
                            IOProxy.this.f132a.closeIOStream();
                            EmulatorView.f82b.log(Level.INFO, "IOProxy closeIOStream");
                            return;
                        }
                    }
                }
            };
            this.f133b.setDaemon(true);
            this.f133b.start();
            synchronized (this) {
                while (this.f135d < 0 && !this.f134c) {
                    try {
                        wait(1000L);
                    } catch (InterruptedException unused) {
                    }
                }
            }
            return this.f135d;
        }

        /* renamed from: a */
        private void m31a() {
            synchronized (this) {
                this.f136e = 0;
                notifyAll();
            }
        }

        /* renamed from: b */
        private void m30b() {
            synchronized (this) {
                while (this.f136e != 0 && !this.f134c) {
                    try {
                        wait(1000L);
                    } catch (InterruptedException unused) {
                    }
                }
            }
        }

        public String readIOStream() {
            synchronized (this) {
                this.f136e = 1;
                notifyAll();
            }
            m30b();
            return this.f137f;
        }

        public void writeIOStream(String outBuffer) {
            synchronized (this) {
                this.f138g = outBuffer;
                this.f136e = 2;
                notifyAll();
            }
            m30b();
        }

        public void closeIOStream() {
            synchronized (this) {
                EmulatorView.f82b.log(Level.INFO, "Closing IOStream");
                this.f134c = true;
                notifyAll();
            }
        }
    }

    /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$JavaApp */
    /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$JavaApp.class */
    public class JavaApp {

        /* renamed from: c */
        private VirtualStreamInterface f141c;

        /* renamed from: b */
        private DisplaySettings f140b = null;

        /* renamed from: d */
        private boolean f142d = false;

        /* renamed from: e */
        private int[][] f143e = null;

        /* renamed from: f */
        private JSMultiviewItem[] f144f = new JSMultiviewItem[6];

        /* renamed from: g */
        private LargeScreenDrawRunnable f145g = new LargeScreenDrawRunnable();

        /* renamed from: h */
        private SetMultiviewScreenRunnable f146h = new SetMultiviewScreenRunnable();

        public JavaApp(VirtualStreamInterface virtualStream) {
            EmulatorView.f82b.log(Level.INFO, "JavaApp()");
            this.f141c = virtualStream;
            EmulatorView.this.javaApp = this;
        }

        public void exit() {
            Platform.exit();
        }

        public DisplaySettings getDisplaySettings() {
            return this.f140b;
        }

        public void setScreenCaptureData(String data) {
            EmulatorView.this.screenCaptureAvailable.set(true);
            EmulatorView.this.screenContents = data;
        }

        public void keyPressed(String key, double timePressed) {
            if (EmulatorView.this.emulator.getHostApplication() != null) {
                EmulatorView.this.emulator.getHostApplication().keyPressed(key, Math.round(timePressed));
            }
        }

        public void notifyIsOnExtAppOrTransApp(boolean isOnExtAppOrTransApp) {
            EmulatorView.f82b.log(Level.FINEST, "Is on External app or Transformation app: " + isOnExtAppOrTransApp);
            Platform.runLater(() -> {
                EmulatorView.this.emulator.getHostApplication().disableV3ForExtApp(isOnExtAppOrTransApp);
            });
        }

        public DisplaySettings createDisplaySettings(int rows, int cols, int pixelsPerProcessor, String bgColor, String fgColor, int bitMode) {
            this.f140b = new DisplaySettings(rows, cols, pixelsPerProcessor, bgColor, fgColor, bitMode);
            return this.f140b;
        }

        /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$JavaApp$LargeScreenDrawRunnable */
        /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$JavaApp$LargeScreenDrawRunnable.class */
        private final class LargeScreenDrawRunnable implements Runnable {

            /* renamed from: a */
            private String f148a;

            private LargeScreenDrawRunnable() {
            }

            public final void setString(String s) {
                this.f148a = s;
            }

            @Override // java.lang.Runnable
            public final void run() {
                if (!EmulatorView.this.emulator.getHostApplication().onExplorerWS()) {
                    String calculatorModelName = EmulatorView.this.emulator.getCalculatorModelName();
                    if (calculatorModelName.equals("TI84") || calculatorModelName.equals("TI83") || calculatorModelName.equals("TI30MV") || calculatorModelName.equals("TI34MV") || calculatorModelName.equals("TI30XPRO") || calculatorModelName.equals("TI30XPLUS")) {
                        EmulatorView.this.largeScreenView.drawScreen(JavaApp.this.m26a(this.f148a, true));
                    } else {
                        EmulatorView.this.largeScreenView.drawScreen(JavaApp.this.m26a(this.f148a, false));
                    }
                }
            }
        }

        public void setScreenUnidimentionalDataStrComp(String s) {
            this.f145g.setString(s);
            Platform.runLater(this.f145g);
        }

        /* renamed from: a */
        private int[][] m26a(String str, boolean z) {
            if (this.f140b != null) {
                int rows = this.f140b.getRows();
                int columns = this.f140b.getColumns();
                if (this.f143e == null) {
                    this.f143e = new int[rows][columns];
                }
                try {
                    int i = 0 + 1;
                    int m28a = m28a(str.charAt(0));
                    if (!z) {
                        i++;
                        m28a |= m28a(str.charAt(1)) << 8;
                    }
                    int i2 = 1;
                    if (str.charAt(i) == 257) {
                        int i3 = i + 1;
                        i2 = Integer.parseInt(str.substring(i3, str.indexOf(257, i3)));
                        i = str.indexOf(257, i3) + 1;
                    }
                    for (int i4 = 0; i4 < columns; i4++) {
                        for (int i5 = 0; i5 < rows; i5++) {
                            if (i2 <= 0) {
                                int i6 = i;
                                i++;
                                m28a = m28a(str.charAt(i6));
                                if (!z) {
                                    i++;
                                    m28a |= m28a(str.charAt(i)) << 8;
                                }
                                if (i >= str.length()) {
                                    this.f143e[i5][i4] = m28a;
                                } else if (str.charAt(i) == 257) {
                                    int i7 = i + 1;
                                    i2 = Integer.parseInt(str.substring(i7, str.indexOf(257, i7)));
                                    i = str.indexOf(257, i7) + 1;
                                }
                            }
                            this.f143e[i5][i4] = m28a;
                            i2--;
                        }
                    }
                } catch (NumberFormatException e) {
                    EmulatorView.f82b.log(Level.INFO, "NumberFormatException " + str, (Throwable) e);
                }
            }
            return this.f143e;
        }

        /* renamed from: a */
        private static int m28a(char c) {
            if (c == 256) {
                return 0;
            }
            return c;
        }

        /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$JavaApp$SetMultiviewScreenRunnable */
        /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$JavaApp$SetMultiviewScreenRunnable.class */
        private final class SetMultiviewScreenRunnable implements Runnable {

            /* renamed from: a */
            private String f150a;

            /* renamed from: b */
            private int f151b;

            private SetMultiviewScreenRunnable() {
            }

            public final void setString(String s) {
                this.f150a = s;
            }

            public final void setImgId(int i) {
                this.f151b = i;
            }

            @Override // java.lang.Runnable
            public final void run() {
                EmulatorView.f82b.log(Level.INFO, "Setting image with Id: " + this.f151b);
                ITIMultiviewItem m27a = JavaApp.this.m27a(this.f151b, this.f150a);
                Platform.runLater(() -> {
                    EmulatorView.this.emulator.getHostApplication().setMultiviewItem(m27a);
                });
            }
        }

        public void setMultiviewScreen(int imgId, String s) {
            this.f146h.setImgId(imgId);
            this.f146h.setString(s);
            this.f146h.run();
        }

        /* renamed from: a */
        private ITIMultiviewItem m27a(int i, String str) {
            String calculatorModelName = EmulatorView.this.emulator.getCalculatorModelName();
            boolean z = calculatorModelName.equals("TI84") || calculatorModelName.equals("TI83");
            if (this.f144f[i] == null) {
                this.f144f[i] = new JSMultiviewItem(i, m26a(str, z), this.f140b);
            } else {
                this.f144f[i].setPixels(m26a(str, z));
            }
            return this.f144f[i];
        }

        public void multiviewProcessComplete() {
            EmulatorView.f82b.log(Level.INFO, "View3 Completed");
            EmulatorView.this.isView3Refreshing = false;
            Platform.runLater(() -> {
                EmulatorView.this.emulator.getHostApplication().setMultiviewProgress(6);
            });
        }

        public boolean checkShutdownCallback() {
            if (EmulatorView.this.f92l) {
                EmulatorView.f82b.log(Level.INFO, "View3 was cancelled at Shutdown");
            } else {
                EmulatorView.f82b.log(Level.FINEST, "View3 was cancelled but not at Shutdown");
            }
            return EmulatorView.this.f92l;
        }

        public void logFromJS(String level, String message) {
            EmulatorView.f82b.log(Level.parse(level), message);
        }

        public void LCDClickEvent() {
            EmulatorView.this.f85e = true;
        }

        public void resetCommLayer() {
            EmulatorView.this.emulator.getHostApplication().resetCommLayer();
        }

        public int goIOStartSession() {
            EmulatorView.f82b.log(Level.INFO, "Starting GoIO Session");
            EmulatorView.this.emulator.setHasDCStarted(true);
            return GoIOCommManager.getInstance().startSession();
        }

        public boolean goIOEndSession() {
            EmulatorView.this.emulator.setHasDCStarted(false);
            return true;
        }

        public boolean goIOStartInputStream() {
            return GoIOCommManager.getInstance().startInputStream();
        }

        public boolean goIOStopInputStream() {
            return GoIOCommManager.getInstance().stopInputStream();
        }

        public boolean goIOSendCommand(String commandBuffer) {
            return GoIOCommManager.getInstance().sendCommand(commandBuffer);
        }

        public String goIOGetResponse() {
            return GoIOCommManager.getInstance().getResponse();
        }

        public boolean isCurrentSensorStillConnected() {
            return GoIOCommManager.getInstance().isCurrentSensorStillConnected();
        }

        public int pythonStart() {
            EmulatorView.f82b.log(Level.INFO, "Python Start");
            return PythonCommManager.getInstance().pythonStart();
        }

        public int pythonState() {
            return PythonCommManager.getInstance().pythonState();
        }

        public int pythonCheckLinkState() {
            return PythonCommManager.getInstance().pythonCheckLinkState();
        }

        public void pythonFinish() {
            EmulatorView.f82b.log(Level.INFO, "Python Finish");
            PythonCommManager.getInstance().pythonFinish(true);
        }

        public int pythonSend(String bytesAsHexStr) {
            return PythonCommManager.getInstance().pythonSend(bytesAsHexStr);
        }

        public String pythonGet(int maxLength) {
            return PythonCommManager.getInstance().pythonGet(maxLength);
        }

        public int msGetMaxLUN(int maxLUN) {
            return PythonCommManager.getInstance().msGetMaxLUN(maxLUN);
        }

        public void msResetInterface(int op) {
            PythonCommManager.getInstance().msResetInterface(op);
        }

        public String msInquiry(int lunIdx) {
            return PythonCommManager.getInstance().msInquiry(lunIdx);
        }

        public String msReadBlock(int lunIdx, int numBlocks, int blockAddress, int blockSize) {
            return PythonCommManager.getInstance().msReadBlock(lunIdx, numBlocks, blockAddress, blockSize);
        }

        public int msWriteBlock(int lunIdx, int numBlocks, int blockAddress, int blockSize, String bytesAsHexStr) {
            return PythonCommManager.getInstance().msWriteBlock(lunIdx, numBlocks, blockAddress, blockSize, bytesAsHexStr);
        }

        public int openIOStream() {
            this.f142d = false;
            if (EmulatorView.this.f105y != null) {
                EmulatorView.this.f105y.closeIOStream();
            }
            EmulatorView.this.f105y = new IOProxy(EmulatorView.this, this.f141c);
            return EmulatorView.this.f105y.openIOStream();
        }

        public String readIOStream() {
            if (!this.f142d) {
                EmulatorView.f82b.log(Level.INFO, "readIOStream setupComm");
                this.f142d = true;
                EmulatorView.this.emulator.getHostApplication().setupComm();
            }
            String str = "";
            if (EmulatorView.this.f105y != null) {
                str = EmulatorView.this.f105y.readIOStream();
            }
            return str;
        }

        public void writeIOStream(String outBuffer) {
            if (EmulatorView.this.f105y != null) {
                EmulatorView.this.f105y.writeIOStream(outBuffer);
            }
        }

        public void closeIOStream() {
            if (EmulatorView.this.f105y != null) {
                EmulatorView.f82b.log(Level.INFO, "Calling ioProxy.closeIOStream");
                EmulatorView.this.f105y.closeIOStream();
                EmulatorView.this.f105y = null;
            }
        }
    }

    public void shutDown() {
        f82b.log(Level.INFO, "Shutting down Emulator");
        this.f106z = true;
        if (this.f105y != null) {
            this.f105y.closeIOStream();
        }
        if (this.webEngine == null) {
            f82b.log(Level.INFO, "No webEngine found.");
            return;
        }
        if (this.f86f != null) {
            this.webEngine.removeLoadListener(this.f86f);
        }
        if (this.f93m != null) {
            this.webView.removeEventFilter(DragEvent.DRAG_OVER, this.f93m);
            this.webView.removeEventFilter(DragEvent.DRAG_ENTERED, this.f93m);
            this.webView.removeEventFilter(DragEvent.DRAG_ENTERED_TARGET, this.f93m);
            this.webView.removeEventFilter(DragEvent.DRAG_DONE, this.f93m);
            this.webView.removeEventFilter(DragEvent.DRAG_DROPPED, this.f93m);
            this.webView.removeEventFilter(DragEvent.DRAG_EXITED, this.f93m);
            this.webView.removeEventFilter(DragEvent.DRAG_EXITED_TARGET, this.f93m);
        }
        if (this.f95o != null) {
            this.webView.removeEventFilter(MouseEvent.MOUSE_EXITED, this.f95o);
        }
        if (this.f94n != null) {
            removeEventFilter(MouseEvent.DRAG_DETECTED, this.f94n);
        }
        if (this.f108B != null) {
            removeEventFilter(MouseEvent.MOUSE_DRAGGED, this.f108B);
        }
        if (this.f101u != null) {
            removeEventFilter(KeyEvent.KEY_PRESSED, this.f101u);
        }
        if (this.f101u != null) {
            removeEventFilter(KeyEvent.KEY_RELEASED, this.f101u);
        }
        if (!this.f96p && this.emulator.getHostApplication().getCanCloseProperty().get()) {
            this.f89i = true;
        } else {
            this.f89i = false;
        }
        eliminateReferences();
    }

    protected void eliminateReferences() {
        Platform.runLater(this.f107A);
    }

    public boolean isEmuBusy() {
        f82b.log(Level.INFO, "Calling isBusy() - still outside of Callable");
        Callable<Boolean> callable = new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.9
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.util.concurrent.Callable
            public Boolean call() {
                boolean z;
                try {
                    z = ((Boolean) EmulatorView.this.executeScript("calc_instance.isBusy()")).booleanValue();
                } catch (NullPointerException unused) {
                    z = true;
                }
                return Boolean.valueOf(z);
            }
        };
        Callable<Boolean> callable2 = new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.10
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.util.concurrent.Callable
            public Boolean call() {
                boolean z;
                try {
                    z = ((Boolean) EmulatorView.this.executeScript("calc_instance.isInitializing()")).booleanValue();
                } catch (Exception unused) {
                    z = true;
                }
                return Boolean.valueOf(z);
            }
        };
        if (this.f106z) {
            return true;
        }
        if (this.f109C && this.f90j == null) {
            return true;
        }
        FutureTask futureTask = new FutureTask(callable);
        FutureTask futureTask2 = new FutureTask(callable2);
        if (Platform.isFxApplicationThread()) {
            futureTask.run();
            futureTask2.run();
        } else {
            Platform.runLater(futureTask);
            Platform.runLater(futureTask2);
        }
        try {
            Boolean bool = (Boolean) futureTask.get();
            Boolean bool2 = (Boolean) futureTask2.get();
            if (bool.booleanValue() || bool2.booleanValue()) {
                return true;
            }
            return false;
        } catch (InterruptedException | ExecutionException e) {
            f82b.log(Level.WARNING, "Thread was interrupted or execution exception.", e.getMessage());
            return true;
        }
    }

    public int commStart() {
        f82b.log(Level.INFO, "Calling commStart() - still outside of Callable");
        Callable<Boolean> callable = new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.11
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.util.concurrent.Callable
            public Boolean call() {
                boolean z;
                EmulatorView.f82b.log(Level.INFO, "Calling isBusy()- inside of Callable");
                try {
                    z = ((Boolean) EmulatorView.this.executeScript("calc_instance.isBusy()")).booleanValue();
                } catch (NullPointerException unused) {
                    z = true;
                }
                return Boolean.valueOf(z);
            }
        };
        Callable<Boolean> callable2 = new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.12
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.util.concurrent.Callable
            public Boolean call() {
                boolean z;
                try {
                    z = ((Boolean) EmulatorView.this.executeScript("calc_instance.isInitializing()")).booleanValue();
                } catch (Exception unused) {
                    z = true;
                }
                return Boolean.valueOf(z);
            }
        };
        Callable<Integer> callable3 = new Callable<Integer>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.13
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // java.util.concurrent.Callable
            public Integer call() {
                EmulatorView.f82b.log(Level.INFO, "Calling commStart() - inside of Callable");
                EmulatorView.this.executeScript("calc_instance.commStart()");
                return 0;
            }
        };
        do {
            Boolean valueOf = Boolean.valueOf(this.f90j != null);
            if (!valueOf.booleanValue()) {
                try {
                    Thread.sleep(1000L);
                } catch (InterruptedException e) {
                    f82b.log(Level.WARNING, "Thread was interrupted.", e.getMessage());
                }
            }
            if (valueOf.booleanValue()) {
                break;
            }
        } while (!this.f106z);
        if (this.f106z) {
            return 0;
        }
        Boolean bool = null;
        Boolean bool2 = null;
        do {
            FutureTask futureTask = new FutureTask(callable);
            FutureTask futureTask2 = new FutureTask(callable2);
            if (Platform.isFxApplicationThread()) {
                futureTask.run();
                futureTask2.run();
            } else {
                Platform.runLater(futureTask);
                Platform.runLater(futureTask2);
            }
            try {
                bool = (Boolean) futureTask.get();
                bool2 = (Boolean) futureTask2.get();
            } catch (InterruptedException | ExecutionException e2) {
                f82b.log(Level.SEVERE, "Error getting isBusy/isInitializing", e2.getMessage());
            }
            if (bool.booleanValue() || bool2.booleanValue()) {
                try {
                    Thread.sleep(1000L);
                } catch (InterruptedException e3) {
                    f82b.log(Level.SEVERE, "Thread was interrupted. " + e3.getMessage());
                }
            }
            if ((bool.booleanValue() || bool2.booleanValue()) && !this.f106z) {
            }
        } while (!PythonCommManager.getInstance().isPythonScriptRunning());
        if (this.f106z) {
            return 0;
        }
        FutureTask futureTask3 = new FutureTask(callable3);
        if (Platform.isFxApplicationThread()) {
            futureTask3.run();
            return 0;
        }
        Platform.runLater(futureTask3);
        return 0;
    }

    public int commEnd() {
        f82b.log(Level.INFO, "Calling commEnd() - still outside of Callable");
        try {
            Callable<Boolean> callable = new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.14
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // java.util.concurrent.Callable
                public Boolean call() {
                    boolean z;
                    EmulatorView.f82b.log(Level.INFO, "Calling isBusy()- inside of Callable");
                    try {
                        z = ((Boolean) EmulatorView.this.executeScript("calc_instance.isBusy()")).booleanValue();
                    } catch (NullPointerException unused) {
                        z = true;
                    }
                    return Boolean.valueOf(z);
                }
            };
            final Callable<Integer> callable2 = new Callable<Integer>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.15
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // java.util.concurrent.Callable
                public Integer call() {
                    EmulatorView.f82b.log(Level.INFO, "Calling commStart() - inside of Callable");
                    EmulatorView.this.executeScript("calc_instance.commEnd()");
                    return 0;
                }
            };
            Callable<Boolean> callable3 = new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.16
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // java.util.concurrent.Callable
                public Boolean call() {
                    boolean z;
                    try {
                        z = ((Boolean) EmulatorView.this.executeScript("calc_instance.isInitializing()")).booleanValue();
                    } catch (Exception unused) {
                        z = true;
                    }
                    return Boolean.valueOf(z);
                }
            };
            SimpleBooleanProperty simpleBooleanProperty = new SimpleBooleanProperty();
            SimpleBooleanProperty simpleBooleanProperty2 = new SimpleBooleanProperty();
            ChangeListener<Boolean> changeListener = new ChangeListener<Boolean>(this) { // from class: com.ti.et.smartview.jsemulator.EmulatorView.17
                public /* bridge */ /* synthetic */ void changed(ObservableValue observableValue, Object obj, Object obj2) {
                    changed((ObservableValue<? extends Boolean>) observableValue, (Boolean) obj, (Boolean) obj2);
                }

                public void changed(ObservableValue<? extends Boolean> observable, Boolean oldValue, Boolean newValue) {
                    FutureTask futureTask = new FutureTask(callable2);
                    if (Platform.isFxApplicationThread()) {
                        futureTask.run();
                    } else {
                        Platform.runLater(futureTask);
                    }
                }
            };
            simpleBooleanProperty.addListener(changeListener);
            simpleBooleanProperty2.addListener(changeListener);
            while (true) {
                FutureTask futureTask = new FutureTask(callable);
                FutureTask futureTask2 = new FutureTask(callable3);
                if (Platform.isFxApplicationThread()) {
                    futureTask.run();
                    futureTask2.run();
                } else {
                    Platform.runLater(futureTask);
                    Platform.runLater(futureTask2);
                }
                try {
                    simpleBooleanProperty.setValue((Boolean) futureTask.get());
                    simpleBooleanProperty2.setValue((Boolean) futureTask2.get());
                } catch (InterruptedException | ExecutionException e) {
                    f82b.severe("Error while querying emulator " + e.getMessage());
                }
                if (simpleBooleanProperty.get() || simpleBooleanProperty2.get()) {
                    try {
                        Thread.sleep(1000L);
                    } catch (InterruptedException e2) {
                        f82b.severe("Error while sleeping. Were waiting for emulator queries isBusyQuery & isInitializingQuery " + e2.getMessage());
                    }
                }
                if (!simpleBooleanProperty.get() && !simpleBooleanProperty2.get()) {
                    return 0;
                }
            }
        } catch (Exception e3) {
            f82b.severe("Error while disconnecting. " + e3.getMessage());
            return 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$TIImageImpl */
    /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$TIImageImpl.class */
    public static class TIImageImpl implements ITIImage {
        private static final long serialVersionUID = 1;

        /* renamed from: a */
        private byte[] f157a;

        /* renamed from: b */
        private int f158b;

        /* renamed from: c */
        private int f159c;

        public TIImageImpl(int pixelsWide, int pixelsHeight) {
            this.f158b = 0;
            this.f159c = 0;
            this.f158b = pixelsWide;
            this.f159c = pixelsHeight;
        }

        public int[] getImageDataAsARGB() {
            return new int[0];
        }

        public byte[] getImageData() {
            return this.f157a;
        }

        public void setImageData(byte[] imageData) {
            this.f157a = imageData;
        }

        public void setPixelsWide(short pixelsWide) {
            this.f158b = pixelsWide;
        }

        public int getPixelsWide() {
            return this.f158b;
        }

        public void setPixelsHeight(short pixelsHeight) {
            this.f159c = pixelsHeight;
        }

        public int getPixelsHeight() {
            return this.f159c;
        }
    }

    public boolean isInitialized() {
        boolean z = false;
        try {
            boolean booleanValue = ((Boolean) this.emulator.getHostApplication().getConcurrencyManager().runOnApplicationThread(new Callable<Boolean>() { // from class: com.ti.et.smartview.jsemulator.EmulatorView.18
                /* JADX WARN: Can't rename method to resolve collision */
                @Override // java.util.concurrent.Callable
                public Boolean call() {
                    boolean z2;
                    EmulatorView.f82b.log(Level.INFO, "Calling isInitialized()- inside of Callable");
                    try {
                    } catch (NullPointerException unused) {
                        z2 = false;
                    }
                    if (!EmulatorView.this.emulator.isEmulatorFinishLoading()) {
                        return Boolean.FALSE;
                    }
                    z2 = ((Boolean) EmulatorView.this.executeScript("calc_instance.isInitialized()")).booleanValue();
                    return Boolean.valueOf(z2);
                }
            })).booleanValue();
            z = booleanValue;
            return booleanValue;
        } catch (Exception unused) {
            f82b.severe("Error while querying Emulator - isInitialized");
            return z;
        }
    }

    public boolean getMultiviewItems(String selected) {
        String str = "calc_instance.getViewCubedScreens('" + selected + "')";
        f82b.log(Level.INFO, "Calling " + str);
        boolean booleanValue = ((Boolean) executeScript(str)).booleanValue();
        this.isView3Refreshing = booleanValue;
        return booleanValue;
    }

    public void cancelMultiviewRefresh() {
        f82b.log(Level.INFO, "Calling " + "calc_instance.cancelViewCubedAction()");
        executeScript("calc_instance.cancelViewCubedAction()");
    }

    public void setV3GraphSpeed(int speed) {
        f82b.log(Level.INFO, "Setting V3 Graph Speed to " + speed);
        executeScript("calc_instance.setView3GraphSpeed(" + speed + ")");
    }

    public String getV3GraphSpeed() {
        int integer = ((JSNumber) executeScript("calc_instance.getView3GraphSpeed()")).getInteger();
        f82b.log(Level.INFO, "V3 Graph Speed set to " + integer + " ms.");
        return Integer.toString(integer);
    }

    public void setEasyDataReadSpeed(int numInstructionsPerRead) {
        executeScript("calc_instance.setEasyDataReadSpeed(" + numInstructionsPerRead + ")");
    }

    public void setMultiviewShutdownSignal() {
        this.f92l = true;
        cancelMultiviewRefresh();
    }

    public boolean commTrnsStart() {
        f82b.log(Level.INFO, "Starting communication");
        return ((Boolean) executeScript("calc_instance.commTrnsStart()")).booleanValue();
    }

    public boolean commTrnsEnd() {
        f82b.log(Level.INFO, "Finishing communication.");
        return ((Boolean) executeScript("calc_instance.commTrnsEnd()")).booleanValue();
    }

    public boolean sendOnKey() {
        Object executeScript = executeScript("calc_instance.sendOnKey()");
        if (executeScript instanceof Boolean) {
            return ((Boolean) executeScript).booleanValue();
        }
        return false;
    }

    public boolean isShuttingDown() {
        return this.f106z;
    }

    public boolean sendAndReleaseKeyJS(String keyName, long giveUpTime) {
        boolean z = false;
        boolean z2 = false;
        if (giveUpTime != -1) {
            long currentTimeMillis = System.currentTimeMillis() + giveUpTime;
            while (true) {
                if (isEmuReadyForKey()) {
                    break;
                } else if (System.currentTimeMillis() >= currentTimeMillis) {
                    z2 = true;
                    break;
                } else {
                    try {
                        Thread.sleep(10L);
                    } catch (InterruptedException e) {
                        f82b.log(Level.WARNING, "Thread was interrupted while waiting for emulator ready for key.", e.getMessage());
                    }
                }
            }
        }
        if (!z2) {
            try {
                Object executeScript = executeScript("calc_instance.sendAndReleaseSVGKey(\"".concat(keyName).concat("\")"));
                if (executeScript != null) {
                    z = ((Boolean) executeScript).booleanValue();
                }
            } catch (Exception unused) {
                z = false;
            }
        }
        return z;
    }

    public boolean isEmuReadyForKey() {
        boolean z = false;
        try {
            Object executeScript = executeScript("calc_instance.isReadyForKey()");
            if (executeScript != null) {
                z = ((Boolean) executeScript).booleanValue();
            }
        } catch (Exception unused) {
            z = false;
        }
        return z;
    }

    public boolean isAlphaOn() {
        boolean z;
        try {
            z = ((Boolean) executeScript("calc_instance.isAlphaOn()")).booleanValue();
        } catch (NullPointerException unused) {
            z = false;
        }
        return z;
    }

    public boolean is2ndOn() {
        boolean z;
        try {
            z = ((Boolean) executeScript("calc_instance.is2ndOn()")).booleanValue();
        } catch (NullPointerException unused) {
            z = false;
        }
        return z;
    }

    public boolean isExecutingProgram() {
        boolean z;
        try {
            z = ((Boolean) executeScript("calc_instance.isExecutingProgram()")).booleanValue();
        } catch (NullPointerException unused) {
            z = false;
        }
        return z;
    }

    public boolean isEmuGraphing() {
        boolean z;
        try {
            z = ((Boolean) executeScript("calc_instance.isEmuGraphing()")).booleanValue();
        } catch (NullPointerException unused) {
            z = false;
        }
        return z;
    }

    public String getEmulatorSVGKeyPrefix() {
        String str = null;
        Object executeScript = executeScript("calc_instance.getEmulatorSVGKeyPrefix()");
        if (executeScript != null && (executeScript instanceof JSString)) {
            str = ((JSString) executeScript).getStringValue();
        }
        return str;
    }

    public void setCommunicationSupport(boolean supportsCommunication) {
        this.f109C = supportsCommunication;
    }

    public BrowserContext createBrowserContext() {
        BrowserContext browserContext = null;
        try {
            this.f98r = Files.createTempDirectory("SVEmulatorContext", new FileAttribute[0]);
            browserContext = new BrowserContext(new BrowserContextParams(this.f98r.toString()));
            f82b.log(Level.FINE, "Browser context created on " + browserContext.getDataDir());
        } catch (IOException unused) {
            f82b.log(Level.INFO, "Browser context cannot be created on a temp file");
        }
        return browserContext;
    }

    public void cleanBrowserContextFolders() {
        if (this.f98r != null) {
            f82b.log(Level.INFO, "Marking current Context folder as deleteOnExit...");
            m40a(this.f98r.toFile());
        }
    }

    /* renamed from: a */
    private void m40a(File file) {
        if (file != null) {
            file.deleteOnExit();
            f82b.log(Level.FINEST, "Mark delete on exit, for file " + file.getName());
            if (file.isDirectory()) {
                try {
                    Files.list(file.toPath()).forEach(path -> {
                        m40a(path.toFile());
                    });
                } catch (IOException e) {
                    f82b.log(Level.SEVERE, "Something went wrong when trying to delete BrowserContext files: " + e.getMessage());
                }
            }
        }
    }

    public boolean appLevelResetEmulator() {
        boolean z = false;
        if (this.emulator != null && this.emulator.isInitialized() && !this.emulator.isEmuBusy()) {
            z = this.emulator.getHostApplication().appLevelResetEmulator();
        }
        return z;
    }

    public CompletableFuture<List<Integer>> ta_sendCommand(String buffer, int length) {
        return CompletableFuture.supplyAsync(() -> {
            JSObject jSObject = (JSObject) executeScript("calc_instance");
            TACommand tACommand = new TACommand(this, buffer, length);
            jSObject.removeProperty("taCommand");
            jSObject.setProperty("taCommand", tACommand);
            jSObject.getProperty("ta_sendCommand").asFunction().invoke(jSObject, new Object[0]);
            return tACommand.getResponse();
        });
    }

    /* renamed from: com.ti.et.smartview.jsemulator.EmulatorView$TACommand */
    /* loaded from: TI30xpro_emulator.jar:com/ti/et/smartview/jsemulator/EmulatorView$TACommand.class */
    public class TACommand {

        /* renamed from: a */
        private String f153a;

        /* renamed from: b */
        private int f154b;

        /* renamed from: c */
        private List<Integer> f155c;

        /* renamed from: d */
        private boolean f156d;

        public TACommand(EmulatorView this$0, String taBuffer, int lengthDesignation) {
            setTABuffer(taBuffer);
            setLengthDesignation(lengthDesignation);
            this.f156d = false;
        }

        public String getTABuffer() {
            return this.f153a;
        }

        public void setTABuffer(String taBuffer) {
            this.f153a = taBuffer.trim().replace(" ", "");
        }

        public int getLengthDesignation() {
            return this.f154b;
        }

        public void setLengthDesignation(int lengthDesignation) {
            this.f154b = lengthDesignation;
        }

        public boolean isResolved() {
            return this.f156d;
        }

        public void setResolved(boolean resolved) {
            this.f156d = resolved;
        }

        public void setResponse(JSObject jsResponse) {
            if (jsResponse != null) {
                this.f155c = new ArrayList();
                EmulatorView.f82b.log(Level.INFO, "Got response from Emulator.");
                jsResponse.getPropertyNames().forEach(str -> {
                    this.f155c.add(Integer.valueOf(jsResponse.getProperty(str).asNumber().getInteger()));
                });
            } else {
                EmulatorView.f82b.log(Level.INFO, "No response!");
            }
            setResolved(true);
        }

        public List<Integer> getResponse() {
            long currentTimeMillis = System.currentTimeMillis() + 120000;
            while (!isResolved() && System.currentTimeMillis() < currentTimeMillis) {
                EmulatorView.f82b.log(Level.FINE, "Waiting for a response...");
                try {
                    Thread.sleep(200L);
                } catch (InterruptedException e) {
                    EmulatorView.f82b.log(Level.INFO, "Failed to set response: " + e.getMessage());
                }
            }
            return this.f155c;
        }
    }
}