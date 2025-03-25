// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/DynOPETs/";
    },
  },{id: "nav-download",
          title: "Download",
          description: "Downloading our datasets",
          section: "Navigation",
          handler: () => {
            window.location.href = "/DynOPETs/download/";
          },
        },];
