<?php

namespace App\Http\Controllers\MainSite;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainSiteController extends Controller
{
    /**
     * For the main page
     *
     * @return \Illuminate\Http\Response
     *
     */
    public function index()
    {
        return Inertia::render('MainSite/Index');
    }
}
