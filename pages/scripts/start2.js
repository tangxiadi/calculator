$(document).ready(function () {
    var $body = $('body'); //Cache this for performance
    var setBodyScale = function () {
        var scaleSource = $body.width(),
                    scaleFactor = 0.10,
                    maxScale = 200,
                    minScale = 80; //Tweak these values to taste
        var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

        if (fontSize > maxScale) fontSize = maxScale;
        if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

        $('body').css('font-size', fontSize + '%');
    }

    $(window).resize(function () {
        setBodyScale();
    });

    //Fire it when the page first loads:
    setBodyScale();

    $('[_onclick="zadatakfocus"]').click(zadatakfocus);
    $('[_onclick="zadatakfocusdocument.racunalo.notes.select"]').click(function () {
        zadatakfocus();
        document.racunalo.notes.select();
    });
    $('[_onclick="izracunaj_1"]').click(function () {
        izracunaj(1);
    });
    $('[_onchange="document.racunalo.oldrezultat.onchange"]').change(function () {
        if (document.racunalo.oldrezultat.value != '') { zaokruzi(document.racunalo.oldrezultat.value) }; zadatakfocus()
    });
    $('[_onfocus="display(document.racunalo.rezultat.value)"]').focus(function () {
        display(document.racunalo.rezultat.value);
    });
    $('[_onclick="document.racunalo.stupnjevi[0].click()"]').click(function () {
        document.racunalo.stupnjevi[0].click();
        return false;
    });
    $('[_onclick="document.racunalo.stupnjevi[1].click()"]').click(function () {
        document.racunalo.stupnjevi[1].click();
        return false;
    });
    $('[_onmouseover="self.status=\'Radians\'; return true"]').mouseover(function () {
        self.status = 'Radians'; return true;
    });
    $('[_onmouseover="self.status=\'Degrees\'; return true"]').mouseover(function () {
        self.status = 'Radians'; return true;
    });
    $('[_onmousedown*="memory"]').mousedown(function () {
        var d = $(this).attr('_onmousedown');
        var t = d.match(/\(.*\)/);
        t = '_' + t + '_';
        t = t.replace('_(\'', '');
        t = t.replace('\')_', '');
        t = t.replace('_(', '');
        t = t.replace(')_', '');

        memory(t);
    });
    $('[_onfocus="var val=this.value; this.value=\'\'; this.value= val;"]').focus(function () {
        var val = this.value; this.value = ''; this.value = val;
    });
    $('[_onkeydown="if (event.keyCode==13) {enter.click()}"]').keydown(function (event) {
        if (event.keyCode == 13) { $('[name=enter]').click() }
    });

    $('[_onmousedown*="izracunaj"]').mousedown(function () {
        var d = $(this).attr('_onmousedown');
        var t = d.match(/\(.*\)/);
        t = '_' + t + '_';
        t = t.replace('_(\'', '');
        t = t.replace('\')_', '');
        t = t.replace('_(', '');
        t = t.replace(')_', '');

        izracunaj(t);
    });

    $('[_onmousedown*="dodajBroj"]').mousedown(function () {
        var d = $(this).attr('_onmousedown');
        var t = d.match(/\(.*\)/);
        t = '_' + t + '_';
        t = t.replace('_(\'', '');
        t = t.replace('\')_', '');
        t = t.replace('_(', '');
        t = t.replace(')_', '');

        dodajBroj(t);
    });

    $('[__onmousedown="document.racunalo.reset();memory(4);"]').mousedown(function () {
        document.racunalo.reset(); memory(4);
    });
    $('[__onchange="localStorage.setItem(\'rememberedtaskhistory\', document.racunalo.notes.value);"]').change(function () {
        localStorage.setItem('rememberedtaskhistory', document.racunalo.notes.value);
    });
    $('[___onmousedown="document.racunalo.notes.focus(); document.racunalo.notes.select()"]').mousedown(function () {
        document.racunalo.notes.focus(); document.racunalo.notes.select();
    });
    $('[___onmousedown="memory(1); return false;"]').mousedown(function () {
        memory(1); return false;
    });
});

function zadatakfocus() {

    if (enyo.platform.firefoxOS) {
    } else {
        document.racunalo.zadatak.focus();
    }
}