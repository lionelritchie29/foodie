import "bootstrap";
import Typed from "typed.js";

// use TYPED.JS
const typed = new Typed("#typed", {
  strings: [
    "HELLO,^1000",
    "HALO,^1000",
    "HOLA,^1000",
    "你好,^1000",
    "BONJOUR,^1000",
    "こんにちは,^1000",
    "ALOHA,^1000",
    "안녕하세요,^1000",
  ],
  typeSpeed: 100,
  loop: true,
  backDelay: 1000,
  shuffle: true,
});

// font awesome
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
