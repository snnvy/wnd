const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 250;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e) {
    if (body.classList.contains('lock')) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    }
});

(function() {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function() {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

    const el = document.getElementById('plus-hover-windows');
    const hiddenDiv = document.getElementById('hidden-desktop-windows');

    el.addEventListener('mouseover', function handleMouseOver() {
        document.getElementById('hidden-desktop-windows').style.transition = 'all 0.5s';
        hiddenDiv.style.opacity = '1';
    });
    el.addEventListener('mouseout', function handleMouseOut() {
        document.getElementById('hidden-desktop-windows').style.transition = 'all 1s';
        hiddenDiv.style.opacity = '0';
     });


    const elG = document.getElementById('plus-hover-garden');
    const hiddenDivG = document.getElementById('hidden-desktop-garden');
    
    elG.addEventListener('mouseover', function handleMouseOver() {
        document.getElementById('hidden-desktop-garden').style.transition = 'all 0.5s';
        hiddenDivG.style.opacity = '1';
    });
    elG.addEventListener('mouseout', function handleMouseOut() {
        document.getElementById('hidden-desktop-garden').style.transition = 'all 0.5s';
        hiddenDivG.style.opacity = '0';
     });
     

    const elP = document.getElementById('plus-hover-partitions');
    const hiddenDivP = document.getElementById('hidden-desktop-partitions');
    
    elP.addEventListener('mouseover', function handleMouseOver() {
        document.getElementById('hidden-desktop-partitions').style.transition = 'all 0.5s';
        hiddenDivP.style.opacity = '1';
    });
    elP.addEventListener('mouseout', function handleMouseOut() {
        document.getElementById('hidden-desktop-partitions').style.transition = 'all 0.5s';
        hiddenDivP.style.opacity = '0';
     });

     const elD = document.getElementById('plus-hover-doors');
    const hiddenDivD = document.getElementById('hidden-desktop-doors');
    
    elD.addEventListener('mouseover', function handleMouseOver() {
        hiddenDivD.style.transition = 'all 0.5s';
        hiddenDivD.style.opacity = '1';
    });
    elD.addEventListener('mouseout', function handleMouseOut() {
        hiddenDivD.style.transition = 'all 0.5s';
        hiddenDivD.style.opacity = '0';
     });

     const elB = document.getElementById('plus-hover-balcony');
    const hiddenDivB = document.getElementById('hidden-desktop-balcony');
    
    elB.addEventListener('mouseover', function handleMouseOver() {
        hiddenDivB.style.transition = 'all 0.5s';
        hiddenDivB.style.opacity = '1';
    });
    elB.addEventListener('mouseout', function handleMouseOut() {
        hiddenDivB.style.transition = 'all 0.5s';
        hiddenDivB.style.opacity = '0';
     });

     
     const hiddenDivMobile = document.getElementById('hidden-mobile-w');
     const hiddenDivMobileG = document.getElementById('hidden-mobile-g');
     const hiddenDivMobileP = document.getElementById('hidden-mobile-p');
     const hiddenDivMobileD = document.getElementById('hidden-mobile-d');
     const hiddenDivMobileB = document.getElementById('hidden-mobile-b');


     el.onclick = function click(){
        hiddenDivMobile.style.transition = 'all 0.5s';
        hiddenDivMobile.style.visibility = 'visible';
        hiddenDivMobile.style.opacity = '1';
     }
     elB.onclick = function clic(){
        hiddenDivMobileB.style.transition = 'all 0.5s';
        hiddenDivMobileB.style.visibility = 'visible';
        hiddenDivMobileB.style.opacity = '1';
     }
     elG.onclick = function clic(){
        hiddenDivMobileG.style.transition = 'all 0.5s';
        hiddenDivMobileG.style.visibility = 'visible';
        hiddenDivMobileG.style.opacity = '1';
     }
     elP.onclick = function clic(){
        hiddenDivMobileP.style.transition = 'all 0.5s';
        hiddenDivMobileP.style.visibility = 'visible';
        hiddenDivMobileP.style.opacity = '1';
     }
     elD.onclick = function clic(){
        hiddenDivMobileD.style.transition = 'all 0.5s';
        hiddenDivMobileD.style.visibility = 'visible';
        hiddenDivMobileD.style.opacity = '1';
     }


