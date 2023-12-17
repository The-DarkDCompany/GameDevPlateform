<template>
    <Head> </Head>
    <MainSiteLayout>
        <section class="mx-auto text-center">
            <div class="flex flex-col">
                <div class="mx-auto mt-32">
                    <h1 class="text-[65px] lg:text-[170px] font-extrabold">
                        The DDC studio
                    </h1>
                </div>

                <div class="mx-auto">
                    <h3 class="text-[17px] lg:text-[37px]">
                        We build brands and beautiful experiences
                    </h3>
                </div>

                <div class="w-25 mx-auto flex items-center flex-row lg:flex-col mt-10 space-x-4">
                    <div class=" bg-black rounded-full text-center p-1 w-[45px] h-[45px] lg:w-[90px] lg:h-[90px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="0.0"
                            stroke="currentColor"
                            class="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] fill-green-700 mx-auto mt-2 lg:mt-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                        </svg>
                    </div>

                    <div>Watch video</div>
                </div>

                <div class="flex flex-col lg:flex-row mx-auto mt-5 space-y-4 lg:space-y-0">
                    <button
                        class="px-8 py-4 bg-green-700 text-white lg:w-[170px] text-center"
                    >
                        More about us
                    </button>
                    <button
                        class="px-8 py-4 bg-gray-800 text-white lg:w-[170px]"
                    >
                        Let's talk
                    </button>
                </div>
            </div>
        </section>
    </MainSiteLayout>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import MainSiteLayout from "@/Layouts/MainSite/MainSiteLayout.vue";
</script>
