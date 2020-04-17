---
layout: post
title: Launch a browser in Visual Studio Code
lead: Cross platform browser launch combined with another task in vs-code.
tags: [VSCODE]
excerpt_separator: <!--more-->
---
During the setup of this blog, i needed Visual Studio Code to perform a build and watch task and also launch a browser at the same time. The default recommended extension, 'live-server', for watching and serving html files, wasn't going to help, because the tool already served as a webserver. I just needed a browser launch.
<!--more-->

## Launching a browser cross platform

The easiest way to launch the default browser on windows, is to use the `start` command with the url as parameter. The equivalent on Mac is `open`. Fortunately, tasks in vs-code can have different commands based on the platform.

Launching the default browser on Windows and OSX from a task in vs-code , can be setup as follow: 

Contents of taks.json:

``` json
            "label": "Open browser",
            "type": "shell",
            "windows": {
                "command": "start"
            },
            "osx": {
                "command": "open"
            },
            "args": [
                "http://localhost:5080"
            ]
``` 

By using the `windows` and `osx` option, we can differentiate the command needed.

## Combining tasks

Executing multiple task at the same time is done easily. Just specify the `dependsOn` attribute and provide it with the labels of the other tasks in your `tasks.json` file.

``` JSON
  "tasks": [
        {
            "label": "Build and Show",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "dependsOn": [
                "Label of task A",
                "Label of task B"
            ]
        },
```