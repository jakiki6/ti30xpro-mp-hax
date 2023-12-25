function dump_rom() {
    var url = window.URL.createObjectURL(new Blob([calc_instance.asic.mcu.codeMemory.mem], {type: "application/octet-stream"}));
    window.open(url);
    setTimeout(function() {
        return window.URL.revokeObjectURL(url);
    }, 1000);
}

function reset_mcu() {
    calc_instance.resetEmulator();
}

function debug() {
    console.log("Debugger activated");

    var div = document.createElement("div");
    var button;

    button = document.createElement("button"); button.textContent = "Dump ROM"; button.addEventListener("click", dump_rom); div.appendChild(button);
    button = document.createElement("button"); button.textContent = "Reset MCU"; button.addEventListener("click", reset_mcu); div.appendChild(button);

    document.body.appendChild(div);
}
