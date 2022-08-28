<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontendController extends AbstractController
{
    #[Route('/', name: 'homepage', methods: 'GET')]
    #[Route('/cart', name: 'catalog', methods: 'GET')]
    #[Route('/orders', name: 'orders', methods: 'GET')]
    public function index(): Response
    {
        return $this->render('frontend/index.html.twig');
    }
}
