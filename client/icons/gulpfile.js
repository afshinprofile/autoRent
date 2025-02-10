const gulp = require("gulp"),
    replace = require("gulp-replace"),
    rename = require("gulp-rename"),
    svgmin = require("gulp-svgmin"),
    wrap = require("gulp-wrap"),
    fs = require("fs");

const svg_files_folder = "./icons-svg",
    dest_folder = "../src/app/_components/icons/",
    jsx_template = "./icon-template.txt";

let icons_component_list = [];

gulp.task("icons_component", () => {
    return gulp
        .src([svg_files_folder + "/*.svg"])
        .pipe(
            svgmin({
                multipass: true,
                plugins: [
                    // پاک کردن ID‌های غیرضروری
                    { name: "cleanupIDs", params: { remove: true, minify: true } },
                    // حذف داکیوتایپ
                    { name: "removeDoctype" },
                    // حذف کامنت‌ها
                    { name: "removeComments" },
                    // حذف عنوان
                    { name: "removeTitle" },
                    // حذف ابعاد
                    { name: "removeDimensions" },
                    // فشرده‌سازی گروه‌ها
                    { name: "collapseGroups" },
                    // تبدیل رنگ‌ها به hex
                    { name: "convertColors", params: { names2hex: true, rgb2hex: true } },
                    // حذف عناصر style
                    { name: "removeStyleElement" },
                    // حذف کانتینر‌های خالی
                    { name: "removeEmptyContainers" },
                    // حذف ویژگی‌های غیرضروری
                    {
                        name: "removeAttrs",
                        params: {
                            attrs: [
                                "(filter|fill|stroke|fill-rule|stroke-linecap|stroke-linejoin|stroke-width|transform|style|class|data.*)",
                                "svg:(width|height)",
                            ],
                        },
                    },
                    // حذف عناصر useless defs
                    { name: "removeUselessDefs" },
                ],
            })
        )
        .pipe(replace(/<path([^>]+)>/g, (match, attrs) => {
            // حذف ویژگی fill
            let cleanedAttrs = attrs.replace(/\s+fill="[^"]*"/g, '');
            cleanedAttrs = cleanedAttrs.replace(/(\s*)stroke="[^"]*"/g, '$1stroke="currentColor"');
            cleanedAttrs = cleanedAttrs.replace(/(\s*)stroke-width="([^"]*)"/g, '$1strokeWidth="$2"');
            cleanedAttrs = cleanedAttrs.replace(/(\s*)stroke-miterlimit="([^"]*)"/g, '$1strokeMiterlimit="$2"');
            cleanedAttrs = cleanedAttrs.replace(/(\s*)stroke-linecap="([^"]*)"/g, '$1strokeLinecap="$2"');
            cleanedAttrs = cleanedAttrs.replace(/(\s*)stroke-linejoin="([^"]*)"/g, '$1strokeLinejoin="$2"');
            return `<path${cleanedAttrs}>`;
        }))
        .pipe(replace(/<\/?svg(.*?)>/g, "")) // حذف تگ svg
        .pipe(wrap({ src: jsx_template })) // پیش‌قالب JSX
        .pipe(rename(function (path) {
            icons_component_list.push(path.basename); // ثبت نام فایل‌ها
            path.extname = ".tsx"; // تغییر پسوند به .tsx
        }))
        .pipe(gulp.dest(dest_folder + "/src")); // ذخیره در مقصد
});

gulp.task("icons_component_main", (done) => {
    const content = "/* GENERATED FILE */\n\n" +
        icons_component_list
            .map((item) => {
                let module_name = (
                    item.charAt(0).toUpperCase() + item.substr(1)
                ).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                return `export {default as Icon${module_name}} from './src/${item}';`;
            })
            .join("\n");

    // استفاده از fs.writeFile استاندارد
    fs.writeFile(dest_folder + "/index.ts", content, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return done(err); // اعلام خطای async
        }
        console.log("File written successfully.");
        done(); // نشان دادن پایان TasK
    });
});

gulp.task("default", gulp.series("icons_component", "icons_component_main"));