const subject = 'Bug report or a feature request';
const body = `
Are you submitting a bug report or a feature request?

%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A

What is the current behavior? %0D%0A
(If this is a bug, please include steps to reproduce.)

%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A

What is the expected behavior?

%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A

What's your environment? %0D%0A
(OS/browser version, Node version, etc.)

%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A
%0D%0A

Other information %0D%0A
(Include here any detailed explanation, stacktraces, etc.)

%0D%0A
%0D%0A
%0D%0A

`;

export default {
    purchaseLink: 'http://ya.ru',
    contactLink: `mailto:help@ya.ru?subject=${subject}&body=${body}`
};
