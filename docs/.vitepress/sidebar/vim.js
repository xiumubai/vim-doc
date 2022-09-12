export default function sidebarVim() {
  return [
    {
      text: '介绍',
      items: [
        {
          text: '写在前面',
          link: '/',
        },
        {
          text: 'Mac 环境准备',
          link: '/vim/for-mac',
        },
        {
          text: 'Window 环境准备',
          link: '/vim/for-window',
        },
        {
          text: '改键建议及设置参考',
          link: '/vim/keybinding',
        },
      ],
    },
    {
      text: 'Vim',
      collapsible: true,
      items: [
        {
          text: 'Day 1：起步',
          link: '/vim/vim/day-1.md',
        },
        {
          text: 'Day 2：行相关命令',
          link: '/vim/vim/day-2.md',
        },
        {
          text: 'Day 3：认识 vim 语法',
          link: '/vim/vim/day-3.md',
        },
        {
          text: 'Day 4：删改重做命令提升效率',
          link: '/vim/vim/day-4.md',
        },
        {
          text: 'Day 5：认识可视化模式',
          link: '/vim/vim/day-5.md',
        },
        {
          text: 'Day 6：什么是文本对象？',
          link: '/vim/vim/day-6.md',
        },
        {
          text: 'Day 7：让移动再次快起来!',
          link: '/vim/vim/day-7.md',
        },
        {
          text: 'Day 8：掌握搜索命令',
          link: '/vim/vim/day-8.md',
        },
        {
          text: 'Day 9：vim-easymotion',
          link: '/vim/vim/day-9.md',
        },
        {
          text: 'Day 10：数字与 `.` 的威力',
          link: '/vim/vim/day-10.md',
        },
        {
          text: 'Day 11：多文件跳转的奥妙',
          link: '/vim/vim/day-11.md',
        },
        {
          text: 'Day 12：vim-surround',
          link: '/vim/vim/day-12.md',
        },
        {
          text: 'Day 13：替换字符和多文本选中',
          link: '/vim/vim/day-13.md',
        },
        {
          text: 'Day 14：大小写、注释与提示',
          link: '/vim/vim/day-14.md',
        },
        {
          text: 'Day 15：窗口管理大法',
          link: '/vim/vim/day-15.md',
        },
        {
          text: 'Day 16：快速删除一个函数',
          link: '/vim/vim/day-16.md',
        },
        {
          text: 'Day 17：vim 的宏操作',
          link: '/vim/vim/day-17.md',
        },
        {
          text: 'Day 18：调用 vscode 命令',
          link: '/vim/vim/day-18.md',
        },
      ],
    },
    {
      text: 'VScode',
      collapsible: true,
      items: [
        {
          text: 'Day 19：文件与窗口基础操作',
          link: '/vim/vscode/day-19.md',
        },
        {
          text: 'Day 20：常用窗口操作',
          link: '/vim/vscode/day-20.md',
        },
        {
          text: 'Day 21：全局搜索命令',
          link: '/vim/vscode/day-21.md',
        },
        {
          text: 'Day 22：开发常用小技巧',
          link: '/vim/vscode/day-22.md',
        },
        {
          text: 'Day 23：挖掘快捷键场景',
          link: '/vim/vscode/day-23.md',
        },
        {
          text: 'Day 24：Git 常用操作',
          link: '/vim/vscode/day-24.md',
        },
        {
          text: 'Day 25：Snippet 代码片段',
          link: '/vim/vscode/day-25.md',
        },
        {
          text: 'Day 26：代码重构工具',
          link: '/vim/vscode/day-26.md',
        },
        {
          text: 'Day 27：VSpaceCode 插件',
          link: '/vim/vscode/day-27.md',
        },
        {
          text: 'Day 28：Git 神器 lazygit',
          link: '/vim/vscode/day-28.md',
        },
        {
          text: 'Day 29：终端的基本操作',
          link: '/vim/vscode/day-29.md',
        },
        {
          text: 'Day 30：Debug the Bug',
          link: '/vim/vscode/day-30.md',
        },
      ],
    },
    {
      text: 'Chrome',
      collapsible: true,
      items: [
        {
          text: 'Day 31：浏览器中的 Vim',
          link: '/vim/chrome/day-31.md',
        },
        {
          text: 'Day 32：Vimium-c 页面操作',
          link: '/vim/chrome/day-32.md',
        },
        {
          text: 'Day 33：Vimium-c 搜索与查找',
          link: '/vim/chrome/day-33.md',
        },
        {
          text: 'Day 34：Vimium-c 标签页操作',
          link: '/vim/chrome/day-34.md',
        },
        {
          text: 'Day 35：Vimium-c 再拓展',
          link: '/vim/chrome/day-35.md',
        },
        {
          text: 'Day 36：Chrome 开发者工具',
          link: '/vim/chrome/day-36.md',
        },
        {
          text: 'Day 37：Chrome 的 Debug',
          link: '/vim/chrome/day-37.md',
        },
      ],
    },
    {
      text: 'Terminal',
      collapsible: true,
      items: [
        {
          text: 'Day 38：初识命令行界面操作',
          link: '/vim/terminal/day-38.md',
        },
        {
          text: 'Day 39：什么是 zellij',
          link: '/vim/terminal/day-39.md',
        },
        {
          text: 'Day 40：zellij 的高级使用',
          link: '/vim/terminal/day-40.md',
        },
        {
          text: 'Day 41：认识 zsh-vi-mode',
          link: '/vim/terminal/day-41.md',
        },
        {
          text: 'Day 42：进阶 zsh-vi-mode',
          link: '/vim/terminal/day-42.md',
        },
        {
          text: 'Day 43：zsh 常用插件',
          link: '/vim/terminal/day-43.md',
        },
        {
          text: 'Day 44：zsh 自定义快捷键',
          link: '/vim/terminal/day-44.md',
        },
      ],
    },
    {
      text: 'Mac',
      collapsible: true,
      items: [
        {
          text: 'Day 45：Manico',
          link: '/vim/mac/day-45.md',
        },
        {
          text: 'Day 46：Moom',
          link: '/vim/mac/day-46.md',
        },
        {
          text: 'Day 47：Alfred 搜索初体验',
          link: '/vim/mac/day-47.md',
        },
        {
          text: 'Day 48：Alfred Clipboard',
          link: '/vim/mac/day-48.md',
        },
        {
          text: 'Day 49：Alfred Snippets',
          link: '/vim/mac/day-49.md',
        },
        {
          text: 'Day 50：Alfred 的 Workflow',
          link: '/vim/mac/day-50.md',
        },
        {
          text: 'Day 51：MacOS 系统快捷键',
          link: '/vim/mac/day-51.md',
        },
        {
          text: 'Day 52：Finder 快捷键',
          link: '/vim/mac/day-52.md',
        },
        {
          text: 'Day 53：文本编辑快捷键',
          link: '/vim/mac/day-53.md',
        },
        {
          text: 'Day 54：Obsidian 中的 vim',
          link: '/vim/mac/day-54.md',
        },
        {
          text: 'Day 55：Obsidian 常用文件操作',
          link: '/vim/mac/day-55.md',
        },
        {
          text: 'Day 56：Obsidian 编辑常用命令',
          link: '/vim/mac/day-56.md',
        },
      ],
    },
  ];
}
