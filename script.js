{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red24\green25\blue27;\red246\green247\blue249;\red16\green121\blue2;
\red98\green0\blue117;\red115\green0\blue2;}
{\*\expandedcolortbl;;\cssrgb\c12549\c12941\c14118;\cssrgb\c97255\c97647\c98039;\cssrgb\c0\c53333\c0;
\cssrgb\c46667\c0\c53333;\cssrgb\c53333\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 document.addEventListener(\cf4 \strokec4 'DOMContentLoaded'\cf2 \strokec2 , \cf5 \strokec5 function\cf2 \strokec2 () \{\
    \cf5 \strokec5 const\cf2 \strokec2  otpForm = document.getElementById(\cf4 \strokec4 'otpForm'\cf2 \strokec2 );\
    \cf5 \strokec5 if\cf2 \strokec2  (otpForm) \{\
        otpForm.addEventListener(\cf4 \strokec4 'submit'\cf2 \strokec2 , \cf5 \strokec5 function\cf2 \strokec2 (event) \{\
            event.preventDefault(); \cf6 \strokec6 // Stop the form from trying to submit to a server\cf2 \strokec2 \
\
            \cf5 \strokec5 const\cf2 \strokec2  otpValue = document.getElementById(\cf4 \strokec4 'sms_code'\cf2 \strokec2 ).value;\
            alert(\cf4 \strokec4 'You entered OTP: '\cf2 \strokec2  + otpValue);\
\
            \cf6 \strokec6 // Here, a real website would send the OTP to a server for verification.\cf2 \strokec2 \
            \cf6 \strokec6 // Since this is static, we'll just show an alert.\cf2 \strokec2 \
            console.log(\cf4 \strokec4 'OTP code entered:'\cf2 \strokec2 , otpValue);\
        \});\
    \}\
\});\
\
}