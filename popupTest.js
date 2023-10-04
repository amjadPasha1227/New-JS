const backdrop = document.createElement("div");
backdrop.setAttribute('style', `background: rgba(32, 25, 44, 0.9); padding: 50px; position: fixed; left:0;right:0;top:0;bottom:0;
    display:flex;align-items:center;justify-content:center;z-index:2147483002;
`)

const popupWrapper = document.createElement("div");
popupWrapper.setAttribute('style', 'background: #fdd501;display:flex;align-items:center;position:relative;font-family: Roboto, sans-serif;')

const popupForm = document.createElement("form");
popupForm.setAttribute('style', `display: flex;flex-direction: column;justify-content: center;align-items: center; 
padding: 30px;`)

const getOff = document.createElement('span');
getOff.textContent = 'GET $10 OFF WHEN YOU SIGN UP FOR';
getOff.setAttribute('style', `display: flex;flex-direction: column;align-items:center;text-align:center;font-weight:700;font-size:18px;margin-bottom:20px;`)
const EM = document.createElement('em');
EM.textContent = 'SAVINGS,NEWS,UPDATES AND MORE';
EM.setAttribute('style', `font-weight:400;font-style:normal;`)

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.placeholder = 'your name';
inputName.setAttribute('style', `width:100%;border:1px solid #e5e4df; padding:0 20px; height:45px;outline:none;box-sizing: border-box;font-family: Roboto, sans-serif;margin-bottom:15px;font-size:16px;`)

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.placeholder = 'email address';
inputEmail.setAttribute('style', `width:100%;border:1px solid #e5e4df; padding:0 20px; height:45px;outline:none;box-sizing: border-box;font-family: Roboto, sans-serif;margin-bottom:15px;font-size:16px;`)

const label = document.createElement('label');
label.setAttribute('style', `display: flex;margin-bottom: 20px;align-self: flex-start;font-size:13px;`)
const Checkbox = document.createElement('input');
Checkbox.setAttribute('style', `margin:0 5px 0 0; width:15px; height:15px;`)
Checkbox.type = 'checkbox';
const checkboxLabel = document.createElement('span')
checkboxLabel.textContent = 'Check this box to receive monthly newsletter.';

const img = document.createElement('img');
img.src = 'https://drive.google.com/uc?export=view&id=1ir7ICzV2HeTUqyqjahpxl5JCafE-1x0n'
img.setAttribute('style', `width:100%;max-width:200px;min-width:200px;`);

const closeBtn = document.createElement('img');
closeBtn.src = 'https://drive.google.com/uc?export=view&id=15BxPshhPuhb2V1fxIZcNZRCBgN2HXvaH'
closeBtn.setAttribute('style', `width:100%;position:absolute;cursor:pointer;`);

const button = document.createElement('button');
button.textContent = 'sign up'
button.type = 'submit'
button.setAttribute('style', `display:flex;align-items:center;justify-content:center;background:#000000;color:#fff;
width:100%;height:45px;text-transform:uppercase;cursor:pointer;outline:none;border:none;font-size:14px;`);

const policy = document.createElement('a');
policy.textContent = 'privacy policy';
policy.setAttribute('style', `text-transform:uppercase;color:#000;text-decoration:underline;cursor:pointer;font-size:10px;margin-top:5px;`);

const childrenToAppend = [closeBtn, getOff, inputName, inputEmail, label, button, policy]

backdrop.appendChild(popupWrapper);
popupWrapper.appendChild(popupForm);
popupWrapper.appendChild(img);
getOff.appendChild(EM);
label.appendChild(Checkbox);
label.appendChild(checkboxLabel);

childrenToAppend.forEach(child => {
    popupForm.appendChild(child);
});

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
document.head.appendChild(linkElement);

document.body.setAttribute('style', 'overflow:hidden');
document.body.appendChild(backdrop);

if (getCookie("popupClosed") || getCookie("popupSubmitted")) {
    backdrop.style.display = "none";
} else {
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY <= 0) {
            backdrop.style.display = "flex";
        }
    });
    setTimeout(function () {
        backdrop.style.display = "flex";
    }, 5000);
}

popupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
        setCookie("popupSubmitted", "true", 1);
        backdrop.style.display = "none";
    }
});

closeBtn.addEventListener("click", function () {
    setCookie("popupClosed", "true", 1);
    backdrop.style.display = "none";
});

function validateForm() {
    const name = inputName.value.trim();
    const email = inputEmail.value.trim();

    if (name === "" || email === "" || !Checkbox.checked) {
        alert("Please fill out all fields and agree to the terms.");
        return false;
    }
    if (!isValidEmail(email)) {
        alert("Invalid email format.");
        return false;
    }
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    console.log(document.cookie)
}

function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        if (cookie.indexOf(cookieName) === 0) {
            console.log(cookieName.length)
            return cookie.substring(cookieName.length);
        }
    }
    return "";
}

function applyMobileStyles() {
    img.style.display = 'none';
    popupForm.style.minWidth = 'auto'
    popupWrapper.style.paddingRight = '0'
    closeBtn.style.maxWidth = '15px'
    closeBtn.style.right = '10px'
    closeBtn.style.top = '10px'
    backdrop.style.display = "none";
    setTimeout(function () {
        backdrop.style.display = "flex";
    }, 5000);
}

function applyDesktopStyles() {
    img.style.display = 'block';
    popupForm.style.minWidth = '350px'
    popupWrapper.style.paddingRight = '20px'
    closeBtn.style.maxWidth = '18px'
    closeBtn.style.right = '15px'
    closeBtn.style.top = '15px'
    backdrop.style.display = "flex";
}

const isMobile = window.matchMedia("(max-width: 768px)").matches;


if (isMobile) {
    applyMobileStyles();
} else {
    applyDesktopStyles();
}

window.addEventListener("resize", () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
        applyMobileStyles();
    } else {
        applyDesktopStyles();
    }
});