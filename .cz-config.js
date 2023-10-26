module.exports = {
    types: [
        { value: 'feat', name: 'feat: add a new feature, enhancement, or functionality.' },
        { value: 'fix', name: 'fix: fix a bug or resolve an issue.' },

        { value: 'perf', name: 'perf: optimize code for improved performance.' },
        { value: 'refactor', name: 'refactor: restructure code without altering its behavior.' },
        { value: 'style', name: 'style: address code formatting and style conventions.' },
        { value: 'docs', name: 'docs: make modifications to documentation.' },
        { value: 'test', name: 'test: add, modify, or refactor test cases.' },
        { value: 'chore', name: 'chore: handle routine tasks, maintenance, or dependency management.' },
        { value: 'revert', name: 'revert: revert previous code changes.' },
        { value: 'move', name: 'move: relocate files, directories, or code to a new location.' },
        { value: 'remove', name: 'revert: delete redundant or unnecessary code, files, or directories.' },
        { value: 'ci', name: 'ci: update Continuous Integration/Continuous Deployment (CI/CD) configurations.' },
    ],
    scopes: [
        'component',
        'css-style',
        'custom-hook',
        'store',
        'util',
        'api',

        'wrong codes',
        'spaghetti codes',
        'alien codes',

        'assets',
        'package',

        'lint',
        'formatting',

        'config',
        'workflow',

        // NOTE: .releaserc.js
        'breaking',
        'no-release',
        'README'
    ],
    allowCustomScopes: true,
};
