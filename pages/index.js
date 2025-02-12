import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import EventCard from "../components/EventCard";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>web3rsvp</title>
        <meta
          name="description"
          content="Find, join, and create virtual events with your web3 frens"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-12">
        <div className="w-full md:w-8/12 text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span>Discover what&apos;s happening in the </span>
            <span className="text-indigo-600">metaverse</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Find, join, and create virtual events with your web3 frens!
          </p>
        </div>
        <form action="#" method="POST" className="mt-8 sm:flex">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1 border border-gray-300"
            placeholder="Enter your email"
          ></input>
          <button
            type="submit"
            className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
          >
            Search
          </button>
        </form>
      </section>
      <section className="py-12">
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl mb-8">
          Hottest Events
        </h2>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li>
            <EventCard title={"Wu-Tang Clan & Nas: NY State Of Mind Tour"} />
          </li>
        </ul>
      </section>
      <section className="py-12">
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl mb-8">
          Just Added
        </h2>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <li>
            <EventCard title={"Wu-Tang Clan & Nas: NY State Of Mind Tour"} />
          </li>
        </ul>
      </section>
    </div>
  );
}
