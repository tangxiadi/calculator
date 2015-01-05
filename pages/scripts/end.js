function checker() {

    if (document.halooo.remember.checked == true) {

        localStorage.setItem('preferremember', 'yes');

        localStorage.setItem('rememberedtaskhistory', document.racunalo.notes.value);

    }

    if (document.halooo.remember.checked == false) {

        localStorage.setItem('preferremember', 'no');

        localStorage.setItem('rememberedtaskhistory', '');

    }
}


function skinchange() {

    if (document.halooo.selectskin.value == "Gray-Blue") {

        localStorage.setItem('preferredskin', 'Gray-Blue');

        document.body.className = "normalbody";

        document.getElementById('rezultat').style.background = "#73C3D9 none repeat scroll 0%";
        document.getElementById('buttonclsid').className = "buttonclsblue";

        document.getElementById('scientific1').className = "buttonstylblue";
        document.getElementById('scientific2').className = "buttonstylblue";
        document.getElementById('scientific3').className = "buttonstylblue";
        document.getElementById('scientific4').className = "buttonstylblue";
        document.getElementById('scientific5').className = "buttonstylblue";
        document.getElementById('scientific6').className = "buttonstylblue";
        document.getElementById('scientific7').className = "buttonstylblue";
        document.getElementById('scientific8').className = "buttonstylblue";
        document.getElementById('scientific9').className = "buttonstylblue";
        document.getElementById('scientific10').className = "buttonstylblue";
        document.getElementById('scientific11').className = "buttonstylblue";
        document.getElementById('scientific12').className = "buttonstylblue";
        document.getElementById('scientific13').className = "buttonstylblue";
        document.getElementById('scientific14').className = "buttonstylblue";
        document.getElementById('scientific15').className = "buttonstylblue";
        document.getElementById('scientific16').className = "buttonstylblue";
        document.getElementById('scientific17').className = "buttonstylblue";
        document.getElementById('scientific18').className = "buttonstylblue";

        document.getElementById('buttonstylentpadid').className = "buttonstylentpadblue";

    }

    if (document.halooo.selectskin.value == "Default") {

        localStorage.setItem('preferredskin', 'Default');

        document.body.className = "normalbody";

        document.getElementById('rezultat').style.background = "rgb(239, 239, 239) none repeat scroll 0%";
        document.getElementById('buttonclsid').className = "buttoncls";

        document.getElementById('scientific1').className = "buttonstyl";
        document.getElementById('scientific2').className = "buttonstyl";
        document.getElementById('scientific3').className = "buttonstyl";
        document.getElementById('scientific4').className = "buttonstyl";
        document.getElementById('scientific5').className = "buttonstyl";
        document.getElementById('scientific6').className = "buttonstyl";
        document.getElementById('scientific7').className = "buttonstyl";
        document.getElementById('scientific8').className = "buttonstyl";
        document.getElementById('scientific9').className = "buttonstyl";
        document.getElementById('scientific10').className = "buttonstyl";
        document.getElementById('scientific11').className = "buttonstyl";
        document.getElementById('scientific12').className = "buttonstyl";
        document.getElementById('scientific13').className = "buttonstyl";
        document.getElementById('scientific14').className = "buttonstyl";
        document.getElementById('scientific15').className = "buttonstyl";
        document.getElementById('scientific16').className = "buttonstyl";
        document.getElementById('scientific17').className = "buttonstyl";
        document.getElementById('scientific18').className = "buttonstyl";

        document.getElementById('buttonstylentpadid').className = "buttonstylentpad";

    }

    if (document.halooo.selectskin.value == "Wood") {

        localStorage.setItem('preferredskin', 'Wood');

        document.body.className = "bodywood";

        document.getElementById('rezultat').style.background = "rgb(239, 239, 239) none repeat scroll 0%";
        document.getElementById('buttonclsid').className = "buttoncls";

        document.getElementById('scientific1').className = "buttonstyl";
        document.getElementById('scientific2').className = "buttonstyl";
        document.getElementById('scientific3').className = "buttonstyl";
        document.getElementById('scientific4').className = "buttonstyl";
        document.getElementById('scientific5').className = "buttonstyl";
        document.getElementById('scientific6').className = "buttonstyl";
        document.getElementById('scientific7').className = "buttonstyl";
        document.getElementById('scientific8').className = "buttonstyl";
        document.getElementById('scientific9').className = "buttonstyl";
        document.getElementById('scientific10').className = "buttonstyl";
        document.getElementById('scientific11').className = "buttonstyl";
        document.getElementById('scientific12').className = "buttonstyl";
        document.getElementById('scientific13').className = "buttonstyl";
        document.getElementById('scientific14').className = "buttonstyl";
        document.getElementById('scientific15').className = "buttonstyl";
        document.getElementById('scientific16').className = "buttonstyl";
        document.getElementById('scientific17').className = "buttonstyl";
        document.getElementById('scientific18').className = "buttonstyl";

        document.getElementById('buttonstylentpadid').className = "buttonstylentpad";

    }


}



var preferremember = localStorage.getItem("preferremember");

var rememberedtaskhistory = localStorage.getItem("rememberedtaskhistory");



if (preferremember == 'yes') {

    document.halooo.remember.checked = true;

    document.racunalo.notes.value = rememberedtaskhistory;

    document.racunalo.notes.scrollTop = document.racunalo.notes.scrollHeight - document.racunalo.notes.clientHeight;

} else {

    document.halooo.remember.checked = false;

    document.racunalo.notes.value = '';

}


var preferredskin = localStorage.getItem("preferredskin");
if (preferredskin == "Gray-Blue") {

    document.halooo.selectskin.value = "Gray-Blue";

    document.body.className = "normalbody";

    document.getElementById('rezultat').style.background = "#73C3D9 none repeat scroll 0%";
    document.getElementById('buttonclsid').className = "buttonclsblue";

    document.getElementById('scientific1').className = "buttonstylblue";
    document.getElementById('scientific2').className = "buttonstylblue";
    document.getElementById('scientific3').className = "buttonstylblue";
    document.getElementById('scientific4').className = "buttonstylblue";
    document.getElementById('scientific5').className = "buttonstylblue";
    document.getElementById('scientific6').className = "buttonstylblue";
    document.getElementById('scientific7').className = "buttonstylblue";
    document.getElementById('scientific8').className = "buttonstylblue";
    document.getElementById('scientific9').className = "buttonstylblue";
    document.getElementById('scientific10').className = "buttonstylblue";
    document.getElementById('scientific11').className = "buttonstylblue";
    document.getElementById('scientific12').className = "buttonstylblue";
    document.getElementById('scientific13').className = "buttonstylblue";
    document.getElementById('scientific14').className = "buttonstylblue";
    document.getElementById('scientific15').className = "buttonstylblue";
    document.getElementById('scientific16').className = "buttonstylblue";
    document.getElementById('scientific17').className = "buttonstylblue";
    document.getElementById('scientific18').className = "buttonstylblue";

    document.getElementById('buttonstylentpadid').className = "buttonstylentpadblue";

}

if (preferredskin == "Default") {

    document.halooo.selectskin.value = "Default";

    document.body.className = "normalbody";

    document.getElementById('rezultat').style.background = "rgb(239, 239, 239) none repeat scroll 0%";
    document.getElementById('buttonclsid').className = "buttoncls";

    document.getElementById('scientific1').className = "buttonstyl";
    document.getElementById('scientific2').className = "buttonstyl";
    document.getElementById('scientific3').className = "buttonstyl";
    document.getElementById('scientific4').className = "buttonstyl";
    document.getElementById('scientific5').className = "buttonstyl";
    document.getElementById('scientific6').className = "buttonstyl";
    document.getElementById('scientific7').className = "buttonstyl";
    document.getElementById('scientific8').className = "buttonstyl";
    document.getElementById('scientific9').className = "buttonstyl";
    document.getElementById('scientific10').className = "buttonstyl";
    document.getElementById('scientific11').className = "buttonstyl";
    document.getElementById('scientific12').className = "buttonstyl";
    document.getElementById('scientific13').className = "buttonstyl";
    document.getElementById('scientific14').className = "buttonstyl";
    document.getElementById('scientific15').className = "buttonstyl";
    document.getElementById('scientific16').className = "buttonstyl";
    document.getElementById('scientific17').className = "buttonstyl";
    document.getElementById('scientific18').className = "buttonstyl";

    document.getElementById('buttonstylentpadid').className = "buttonstylentpad";

}

if (preferredskin == "Wood") {

    document.halooo.selectskin.value = "Wood";

    document.body.className = "bodywood";

    document.getElementById('rezultat').style.background = "rgb(239, 239, 239) none repeat scroll 0%";
    document.getElementById('buttonclsid').className = "buttoncls";

    document.getElementById('scientific1').className = "buttonstyl";
    document.getElementById('scientific2').className = "buttonstyl";
    document.getElementById('scientific3').className = "buttonstyl";
    document.getElementById('scientific4').className = "buttonstyl";
    document.getElementById('scientific5').className = "buttonstyl";
    document.getElementById('scientific6').className = "buttonstyl";
    document.getElementById('scientific7').className = "buttonstyl";
    document.getElementById('scientific8').className = "buttonstyl";
    document.getElementById('scientific9').className = "buttonstyl";
    document.getElementById('scientific10').className = "buttonstyl";
    document.getElementById('scientific11').className = "buttonstyl";
    document.getElementById('scientific12').className = "buttonstyl";
    document.getElementById('scientific13').className = "buttonstyl";
    document.getElementById('scientific14').className = "buttonstyl";
    document.getElementById('scientific15').className = "buttonstyl";
    document.getElementById('scientific16').className = "buttonstyl";
    document.getElementById('scientific17').className = "buttonstyl";
    document.getElementById('scientific18').className = "buttonstyl";

    document.getElementById('buttonstylentpadid').className = "buttonstylentpad";

}



zadatakfocus()