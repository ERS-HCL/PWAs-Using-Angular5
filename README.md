# PWAs using Angular 5

This is a sample for building an progressive web app based on the design principles of Angular 5 which has inbuilt support of Service workers.

# Why PWA ?

* A progressive web app (PWA) delivers an app-like experience through your mobile phone’s browser but has the same flexibility and gestures as a native application. Because they are powered by mobile browsers, they are not particular to any one device, meaning developers no longer need to write separate code for Android and Apple devices.

<p align="center">
    <img  alt="PWA using Angular5" src="./pwa.png" class="img-responsive">
</p>

# Demo
  * https://manishsingh-xyz.github.io/MovieSearch/
 

# How to run on local machine

* This project is based on the Angular 5 so you need to install latest angular CLI.

## Using `npm`

Check out and build the [PWAs-Using-Angular5](https://github.com/ERS-HCL/pwas-using-angular5.git)
```bash
git clone https://github.com/ERS-HCL/pwas-using-angular5.git
cd pwas-using-angular5
npm install
```



```bash
# Run project on local serve
ng serve -o
```

Now, once you update your library source code it will automatically be re-compiled and your project will be re-built so you may see library changes instantly.

# Final Production Build

* Build a production version of application
* After build, we can see a new ‘/dist’ folder with our bundled app.
```
ng build --prod 
```

# Limitation

* As of now PWA is supported by all the modern browsers.
* Below is the list for all the supported browsers:

<p align="center">
    <img  alt="PWA using Angular5" src="./browser.png" class="img-responsive">
</p>

# License
 [MIT](/LICENSE)

