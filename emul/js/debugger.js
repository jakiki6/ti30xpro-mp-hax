function debug() {
    console.log("Debugger activated");

    var div = document.createElement("div");

    function register(title, func) {
        var button = document.createElement("button");
        button.textContent = title;
        button.addEventListener("click", func);
        div.appendChild(button);
    }

    register("Dump ROM", function() {
        var url = window.URL.createObjectURL(new Blob([calc_instance.asic.mcu.codeMemory.mem], {type: "application/octet-stream"}));
        window.open(url);
        setTimeout(function() {
            return window.URL.revokeObjectURL(url);
        }, 1000);
    });

    register("Reset", function() {
        calc_instance.resetEmulator();
    });

    register("Halt", function() {
        clearInterval(calc_instance.asic.mcuInterval);
    });

    register("Step", function() {
       calc_instance.asic.mcu.interp1();
    });

    register("Break on PC", function() {
        clearInterval(calc_instance.asic.mcuInterval);

        var addr = parseInt(prompt("Address in decimal"));
        var id = setInterval(function() {
            if (calc_instance.asic.mcu.pc == addr) {
                clearInterval(id);
                alert("Breakpoint hit!");
            }

            calc_instance.asic.mcu.run();
            let irq_status = calc_instance.asic.mcu.dataMemory.get8(0x0, calc_instance.asic.mcu.dataMemory.INTERRUPT_IRQ7);
            if ((irq_status & 0x1) !== 0x0) {
                    irq_status = irq_status ^ 0x1;
                    calc_instance.asic.mcu.dataMemory.set8(0x0, irq_status, calc_instance.asic.mcu.dataMemory.INTERRUPT_IRQ7);
                    if (calc_instance.asic.mcu.keyEventProcessor.isQueueEmpty() && !calc_instance.asic.mcu.keyEventProcessor.isPotentialAutoRepeat()) {
                        calc_instance.asic.mcu.setLastKeyPressed(0x0);
                    }

                    calc_instance.asic.mcu.checkForInterrupt();
            }
        }, 0);
    });

    document.body.appendChild(div);
}
