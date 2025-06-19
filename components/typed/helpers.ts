import {
    ExpressSVG,
    GitSVG,
    GraphQLSVG,
    JquerySVG,
    MongoSVG,
    NestjsSVG,
    NextSVG,
    NodeSVG,
    PostgreSVG,
    ReactSVG,
    RedisSVG,
    ReduxSVG,
    ScssSVG,
    TypeScriptSVG,
    VueSVG,
    VuexSVG
} from './SVGs';

type TColor = 'red' | 'orange' | 'darkBlue' | 'blue' | 'green' | 'yellow' | 'gray' | undefined;
type TIndent = string | undefined;

const colorMap: Record<string, string> = {
    red: 'var(--red)',
    orange: 'var(--orange)',
    yellow: 'var(--yellow)',
    darkBlue: 'var(--darkBlue)',
    green: 'var(--lightGreen)',
    blue: 'var(--lightBlue)',
    gray: 'var(--gray)'
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
    writeDown('{', 'darkBlue', undefined),
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
    writeDown('{', 'darkBlue', undefined),
    '<br/>'
];

// the final correct state
const strings = [
    ...buildInterface(),
    writeDown('name:', undefined, '16px'),
    writeDown(' "Serhat Belen"', 'green', undefined),
    ',<br/>',
    writeDown('role:', undefined, '16px'),
    writeDown(' "Full Stack Developer"', 'green', undefined),
    ',<br/>',
    writeDown('skills:', undefined, '16px'),
    writeDown(' [', 'yellow', undefined),
    '<br/>',
    writeDown(' "TypeScript"', 'green', '32px'),
    ',',
    writeDown(` // ${TypeScriptSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "React"', 'green', '32px'),
    ',',
    writeDown(` // ${ReactSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Redux"', 'green', '32px'),
    ',',
    writeDown(` // ${ReduxSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Vue"', 'green', '32px'),
    ',',
    writeDown(` // ${VueSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Vuex"', 'green', '32px'),
    ',',
    writeDown(` // ${VuexSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Jquery"', 'green', '32px'),
    ',',
    writeDown(` // ${JquerySVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Scss"', 'green', '32px'),
    ',',
    writeDown(` // ${ScssSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "NextJS"', 'green', '32px'),
    ',',
    writeDown(` // ${NextSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "NodeJS"', 'green', '32px'),
    ',',
    writeDown(` // ${NodeSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "NestJS"', 'green', '32px'),
    ',',
    writeDown(` // ${NestjsSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "MongoDB"', 'green', '32px'),
    ',',
    writeDown(` // ${MongoSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "PostgreSQL"', 'green', '32px'),
    ',',
    writeDown(` // ${PostgreSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Redis"', 'green', '32px'),
    ',',
    writeDown(` // ${RedisSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "GraphQL"', 'green', '32px'),
    ',',
    writeDown(` // ${GraphQLSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' "Git"', 'green', '32px'),
    ',',
    writeDown(` // ${GitSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(']', 'yellow', '16px'),
    ',<br/>',
    writeDown('favoriteTechStack:', undefined, '16px'),
    writeDown(' "MERN"', 'green', undefined),
    ',',
    writeDown(` // ${MongoSVG} ${ExpressSVG} ${ReactSVG} ${NodeSVG}`, 'gray', undefined),
    '<br/>',
    writeDown(' passion:', undefined, '16px'),
    writeDown(' "Crafting delightful, high-performance web experiences"', 'green', undefined),
    '<br/>',
    writeDown('}', 'darkBlue', undefined)
];
// generate the string that will be shown in the animation
export const generateString = () => [strings.join('')];
