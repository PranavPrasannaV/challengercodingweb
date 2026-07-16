document.addEventListener('DOMContentLoaded', (event) => {
    const courseSelect = document.getElementById('courseSelect');

    courseSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        if (selectedCourse) {
            switch (selectedCourse) {
                case 'scratch':
                    window.location.href = 'scratch_tutorials.html';
                    break;
                case 'scratch2':
                    window.location.href = 'scratch2_tutorials.html';
                    break;
                case 'python':
                    window.location.href = 'python_tutorials.html';
                    break;
                case 'python2':
                    window.location.href = 'python2_tutorials.html';
                    break;
                case 'java':
                    window.location.href = 'java_tutorials.html';
                    break;
                case 'java2':
                    window.location.href = 'java2_tutorials.html';
                    break;
            }
        }
    });
});


function runCode() {
    const code = document.getElementById('codeEditor').value;
    const outputElement = document.getElementById('output');
    const resultElement = document.getElementById('result');
    
    try {
        const output = eval(code);
        outputElement.textContent = output;
        resultElement.textContent = 'Success';
    } catch (error) {
        resultElement.textContent = `Error: ${error.message}`;
    }
}
