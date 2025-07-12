import { createRouter , createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import AboutMe from "@/components/AboutMe.vue";
import MyVision from "@/components/MyVision.vue";
import CareerPath from "@/components/CareerPath.vue";
import CertificatesPage from "@/components/Certificates.vue";
import AchievementsPage from "@/components/Achievements.vue";
import ContactMe from "@/components/ContactMe.vue";

const routes = [
    { path :"/", component:HomePage},
    { path :"/AboutMe", component:AboutMe},
    { path :"/MyVision", component:MyVision},
    { path :"/CareerPath", component:CareerPath},
    { path :"/Certificates", component:CertificatesPage},
    { path :"/Achievements", component:AchievementsPage},
    { path :"/ContactMe", component:ContactMe},
]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router