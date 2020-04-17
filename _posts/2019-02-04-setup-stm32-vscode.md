---
layout: post
title: STM32 Development setup with Visual Studio Code
tags: [STM32, VSCODE]
color: brown
excerpt_separator: <!--more-->
---
Instructions for setting up a development environment for the STM32 family on Windows using Visual Studio Code. Multiple out-of-the-box solutions exists, for example [PlatformIO](https://platformio.org), but having full control over the toolchain can be usefull. 
<!--more-->

## Requirements

Install [Visual Studio Code](https://code.visualstudio.com) for code editing and install the following extensions: [Microsoft C/C++ extension](https://code.visualstudio.com/docs/languages/cpp) and the Cortex-Debug.
 
For compiler, linker,you need the ARM toolchain:

- [ARM toolchain](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads)
Download the windows zip file and place it's contents in `c:\stm\gcc-arm-none-eabi`

>Note: There is bug in the 2018-q4-major release of the toolchain for windows. See [this](https://devzone.nordicsemi.com/f/nordic-q-a/41884/problem-with-gnu-toolchain-arm-none-eabi-objcopy-_build-nrf52832_xxaa-hex-64-bit-address-0x4b4fa300026000-out-of-range-for-intel-hex-file) article.
You need a arm-none-eabi-objcopy.exe from an older version of the toolchain. 


For flashing your STM32 you need:
- STLINK v2 hardware 
- STLINK software (especially: st-link utils, usb drivers, STM32CubeMx software package)
- Place the st-link.exe, st-info.exe and st-flash.exe in `C:\STM\gcc-arm-none-eabi\bin` 

For building you need [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm). Place the *make.exe* and these two supporting library's (*libiconv2.dll* and *libintl3.dll*) also in the  `C:\STM\gcc-arm-none-eabi\bin`. The zip file with the support library's can be found on the same webpage.

## Git template

I've created a development template for the bluepill, vs-code, stm32, hal, cube, windows based setup on git. https://github.com/bitfox-git/stm32-bluepill-template. You can download the zip of the template or fork it.

## Start developing

To start developing, open a command prompt and execute:

```
cd C:\STM\gcc-arm-none-eabi\bin
gccvar.bat
cd C:\<your project path>
code .
```

>Ofcourse you can also add the bin folder to your PATH environment variable to prefent the need to start gccvar.bat everytime. 

## Notes

### Code vs Compilation
Get yourself familiar with the c/c++ extension json options. Keep in mind that all the included paths, header files, compiler directives *only* influence the code editing part and not the compilation. When you encouter (missing headers, etc.) errors during coding: look at the c/c++ extension settings. During compilation you look at the make file!


### Cube setup

During output, code generation, inside STM CubeMX software, make sure you choose `make` file based output.


