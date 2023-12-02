// 读取 package.json 中的内容
const OneDarkPro = require('./package.json');

// 读取详细的主题颜色内容
const themes = [
    require('./themes/OneDark-Pro.json'),
    require('./themes/OneDark-Pro-flat.json'),
    require('./themes/OneDark-Pro-darker.json'),
];

const packageThemes = OneDarkPro.contributes?.themes || [];

OneDarkPro.contributes.themes = packageThemes.map((theme: any, index: number) => {
    theme.id = theme.label;
    theme = Object.assign({}, theme, themes[index]);
    return theme;
});

// 声明当前主题的唯一 id
OneDarkPro.id = 'OneDarkPro';

// 导出 package.json 的内容供 Molecule 使用
export { OneDarkPro };