// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import license from "rollup-plugin-license";
import multiEntry from "rollup-plugin-multi-entry";


let input = "./main.js";

/** format 输出的文件类型 (amd, cjs, es, iife, umd)
    amd – 异步模块定义，用于像RequireJS这样的模块加载器
    cjs – CommonJS，适用于 Node 和 Browserify/Webpack
    es – 将软件包保存为ES模块文件
    iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
    umd – 通用模块定义，以amd，cjs 和 iife 为一体
 */
let output = {
    file: 'bundle.js',
    format: 'cjs'
};


let plugins = [
    multiEntry(),
    license({
        //加入文件注释头
        banner: `<%= pkg.name %> v<%= pkg.version %>
                <%= pkg.description %>
                author : <%= pkg.author %>
                homepage : <%= pkg.homepage %>
                bugs : <%= pkg.bugs.url %>`,
    }),
    json(),
    resolve(),
    commonjs(),
    babel({
        exclude: 'node_modules/' // 只编译我们的源代码
    })
];

export default {
    input: input,
    output: output,
    plugins: plugins
};