REM del build\bundle.js
REM browserify -t [babelify] main.jsx -o build\bundle.js
copy build\bundle.js ..\..\rails\clinic\app\assets\javascripts\components