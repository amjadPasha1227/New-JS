const backdrop = document.createElement("div");
backdrop.setAttribute('style', `background: #4c4c4c; padding: 50px; position: fixed; left:0;right:0;top:0;bottom:0;
    display:flex;align-items:center;justify-content:center;
`)

const popupWrapper = document.createElement("div");
popupWrapper.setAttribute('style', 'background: #fdd501;display:flex;align-items:center;padding-right:20px;position:relative;font-family: Roboto, sans-serif;')

const popupInnerLeft = document.createElement("div");
popupInnerLeft.setAttribute('style', `display: flex;flex-direction: column;justify-content: center;align-items: center; 
padding: 30px;min-width:350px;`)

const getOff = document.createElement('span');
getOff.innerHTML = 'GET $10 OFF WHEN YOU SIGN UP FOR';
getOff.setAttribute('style', `display: flex;flex-direction: column;align-items:center;font-weight:700;font-size:18px;margin-bottom:20px;`)
const EM = document.createElement('em');
EM.innerHTML = 'SAVINGS,NEWS,UPDATES AND MORE';
EM.setAttribute('style', `font-weight:400;font-style:normal;`)

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.placeholder = 'your name';
inputName.setAttribute('style', `width:100%;border:1px solid #e5e4df; padding:0 20px; height:45px;outline:none;box-sizing: border-box;font-family: Roboto, sans-serif;margin-bottom:15px;font-size:16px;`)
inputName.required = true;

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.placeholder = 'email address';
inputEmail.setAttribute('style', `width:100%;border:1px solid #e5e4df; padding:0 20px; height:45px;outline:none;box-sizing: border-box;font-family: Roboto, sans-serif;margin-bottom:15px;font-size:16px;`)
inputEmail.required = true;

const label = document.createElement('label');
label.setAttribute('style', `display: flex;margin-bottom: 20px;align-self: flex-start;font-size:13px;`)
const Checkbox = document.createElement('input');
Checkbox.setAttribute('style', `margin:0 5px 0 0; width:15px; height:15px;`)
Checkbox.type = 'checkbox';

const chakboxLabel = document.createElement('span')
chakboxLabel.innerHTML = 'Check this box to receive monthly newsletter.';

const img = document.createElement('img');
img.src = 'https://drive.google.com/uc?export=view&id=1ir7ICzV2HeTUqyqjahpxl5JCafE-1x0n'
img.setAttribute('style', `width:100%;max-width:200px;min-width:200px;`);

const imgCross = document.createElement('img');
imgCross.src = 'https://drive.google.com/uc?export=view&id=15BxPshhPuhb2V1fxIZcNZRCBgN2HXvaH'
imgCross.setAttribute('style', `width:100%;max-width:18px;position:absolute;right:15px;top:15px;cursor:pointer;`);

const button = document.createElement('button');
button.innerHTML = 'sign up'
button.type = 'submit'
button.setAttribute('style', `display:flex;align-items:center;justify-content:center;background:#000000;color:#fff;
width:100%;height:45px;text-transform:uppercase;cursor:pointer;outline:none;border:none;font-size:14px;`);

const policy = document.createElement('a');
policy.innerHTML = 'privacy policy';
policy.setAttribute('style', `text-transform:uppercase;color:#000;text-decoration:underline;cursor:pointer;font-size:10px;margin-top:5px;`);

const childrenToAppend = [imgCross, getOff, inputName, inputEmail, label, button, policy]

backdrop.appendChild(popupWrapper);
popupWrapper.appendChild(popupInnerLeft);
popupWrapper.appendChild(img);
// popupInnerLeft.appendChild(getOff);
getOff.appendChild(EM);
label.appendChild(Checkbox);
label.appendChild(chakboxLabel);
// popupInnerLeft.appendChild(inputName);
// popupInnerLeft.appendChild(inputEmail);
// popupInnerLeft.appendChild(label);
// popupInnerLeft.appendChild(button);
// popupInnerLeft.appendChild(policy);

childrenToAppend.forEach(child => {
    popupInnerLeft.appendChild(child);
});

const linkElement = document.createElement('link');

linkElement.rel = 'stylesheet';
linkElement.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
document.head.appendChild(linkElement);

document.body.appendChild(backdrop);