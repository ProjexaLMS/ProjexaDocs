document$.subscribe(function() {
  window.plausible = window.plausible || function() { 
      (window.plausible.q = window.plausible.q || []).push(arguments); 
  };
  console.log("Plausible Analytics initialized.");
});
