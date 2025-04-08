import {
    ExpressSVG,
    GitSVG,
    JquerySVG,
    MongoSVG,
    NextSVG,
    NodeSVG,
    ReactSVG,
    ReduxSVG,
    ScssSVG,
    TypeScriptSVG,
    VueSVG,
    VuexSVG,
} from './SVGs';

type TColor = 'red' | 'orange' | 'darkBlue' | 'blue' | 'green' | 'yellow' | undefined;
type TIndent = string | undefined;

const writeDown = (content: string, color: TColor, indent: TIndent, id?: string) => {
    const style = [];

    if (color) {
        switch (color) {
        case 'red':
            style.push('color: var(--red)');
            break;
        case 'orange':
            style.push('color: var(--orange)');
            break;
        case 'yellow':
            style.push('color: var(--yellow)');
            break;
        case 'darkBlue':
            style.push('color: var(--darkBlue)');
            break;
        case 'green':
            style.push('color: var(--lightGreen)');
            break;
        case 'blue':
            style.push('color: var(--lightBlue)');
            break;

        default:
            style.push(`color: ${color}`);
        }
    }

    if (content === ': ') {
        style.push('font-weight: 600');
    }

    if (indent) {
        style.push(`text-indent: ${indent}`, 'display: inline-block');
    }

    if (id) {
        return `<span id="${id}" style="${style.join(';')}">${content}</span>`;
    }
    return `<span style="${style.join(';')}">${content}</span>`;
};

const strings = [
    writeDown('interface ', 'red', undefined),
    writeDown('IDeveloper ', 'orange', undefined),
    writeDown('{', 'green', undefined),
    '<br/>',
    writeDown('name:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    writeDown('[]', 'yellow', undefined),
    ';<br/>',
    writeDown('favoriteTechStack:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('passion?:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('}', 'darkBlue', undefined),
    '<br/><br/>',
    writeDown('const ', 'red', undefined),
    writeDown('developer', 'blue', undefined),
    writeDown(': ', 'red', undefined),
    writeDown('IDeveloper ', 'orange', undefined),
    writeDown(' = ', 'red', undefined),
    writeDown('{', 'green', undefined),
    '<br/>',
    writeDown('name:', undefined, '16px'),
    writeDown(' 1994,', 'green', undefined, 'err1Span'),
];

const strings2 = [
    writeDown('interface ', 'red', undefined),
    writeDown('IDeveloper ', 'orange', undefined),
    writeDown('{', 'green', undefined),
    '<br/>',
    writeDown('name:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    writeDown('[]', 'yellow', undefined),
    ';<br/>',
    writeDown('favoriteTechStack:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('passion?:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('}', 'darkBlue', undefined),
    '<br/><br/>',
    writeDown('const ', 'red', undefined),
    writeDown('developer', 'blue', undefined),
    writeDown(': ', 'red', undefined),
    writeDown('IDeveloper ', 'orange', undefined),
    writeDown(' = ', 'red', undefined),
    writeDown('{', 'green', undefined),
    '<br/>',
    writeDown('name:', undefined, '16px'),
    writeDown(' "Serhat Belen",', 'green', undefined),
    '<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' "Full Stack Developer",', 'green', undefined),
    '<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' "TypeScript"', 'green', undefined, 'err2Span'),
];

const strings3 = [
    writeDown('interface ', 'red', undefined),
    writeDown('IDeveloper ', 'orange', undefined),
    writeDown('{', 'green', undefined),
    '<br/>',
    writeDown('name:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    writeDown('[]', 'yellow', undefined),
    ';<br/>',
    writeDown('favoriteTechStack:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('passion?:', undefined, '16px'),
    writeDown(' string', 'green', undefined),
    ';<br/>',
    writeDown('}', 'darkBlue', undefined),
    '<br/><br/>',
    writeDown('const ', 'red', undefined),
    writeDown('developer', 'blue', undefined),
    writeDown(': ', 'red', undefined),
    writeDown('IDeveloper ', 'orange', undefined),
    writeDown(' = ', 'red', undefined),
    writeDown('{', 'green', undefined),
    '<br/>',
    writeDown('name:', undefined, '16px'),
    writeDown(' "Serhat Belen",', 'green', undefined),
    '<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' "Full Stack Developer",', 'green', undefined),
    '<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' [', 'yellow', undefined),
    '<br/>',
    writeDown(' "TypeScript",', 'green', '32px'),
    writeDown(` ${TypeScriptSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "React",', 'green', '32px'),
    writeDown(` ${ReactSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "Redux",', 'green', '32px'),
    writeDown(` ${ReduxSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "Vue",', 'green', '32px'),
    writeDown(` ${VueSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "Vuex",', 'green', '32px'),
    writeDown(` ${VuexSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "Jquery",', 'green', '32px'),
    writeDown(` ${JquerySVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "Scss",', 'green', '32px'),
    writeDown(` ${ScssSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "NextJS",', 'green', '32px'),
    writeDown(` ${NextSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "NodeJS",', 'green', '32px'),
    writeDown(` ${NodeSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "MongoDB",', 'green', '32px'),
    writeDown(` ${MongoSVG}`, undefined, undefined),
    '<br/>',
    writeDown(' "Git",', 'green', '32px'),
    writeDown(` ${GitSVG}`, undefined, undefined),
    '<br/>',
    writeDown(']', 'yellow', '16px'),
    ',<br/>',
    writeDown('favoriteTechStack:', undefined, '16px'),
    writeDown(' "MERN"', 'green', undefined),
    writeDown(` ${MongoSVG} ${ExpressSVG} ${ReactSVG} ${NodeSVG}`, undefined, undefined),
    ',<br/>',
    writeDown(' passion:', undefined, '16px'),
    writeDown(' "Building amazing web experiences"', 'green', undefined),
    '<br/>',
    writeDown('}', 'green', undefined),
];

export const generateString = () => [strings.join(''), strings2.join(''), strings3.join('')];
