import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/letter/:letter',
    name: 'byLetter',
    component: MealsByLetter,
  },
  {
    path: '/name/:name',
    name: 'byName',
    component: MealsByName,
  },
  {
    path: '/ingredients/:ingredient',
    name: 'byIngredients',
    component: MealsByIngredients,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
