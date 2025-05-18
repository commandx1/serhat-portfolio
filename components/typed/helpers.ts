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

const colorMap: Record<string, string> = {
    red: 'var(--red)',
    orange: 'var(--orange)',
    yellow: 'var(--yellow)',
    darkBlue: 'var(--darkBlue)',
    green: 'var(--lightGreen)',
    blue: 'var(--lightBlue)',
};

const writeDown = (content: string, color: TColor, indent: TIndent, id?: string) => {
    const style: string[] = [];

    if (color && color in colorMap) {
        style.push(`color: ${colorMap[color]}`);
    } else if (color) {
        style.push(`color: ${color}`);
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

// the string that will be shown in the animation
const buildInterface = () => [
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
];

// the first error state (number cannot be assigned to string)
const strings = [
    ...buildInterface(),
    writeDown('name:', undefined, '16px'),
    writeDown(' 1994,', 'green', undefined, 'err1Span'),
];

// the second error state (string cannot be assigned to string[])
const strings2 = [
    ...buildInterface(),
    writeDown('name:', undefined, '16px'),
    writeDown(' "Serhat Belen",', 'green', undefined),
    '<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' "Full Stack Developer",', 'green', undefined),
    '<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' "TypeScript"', 'green', undefined, 'err2Span'),
];

// the final correct state
const strings3 = [
    ...buildInterface(),
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
// generate the string that will be shown in the animation
export const generateString = () => [strings.join(''), strings2.join(''), strings3.join('')];

