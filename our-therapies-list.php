<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HealIn-Integrated AI Platform</title>
    <link
        rel="shortcut icon"
        href="images/logo/favicon.png"
        type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Sora:wght@100..800&display=swap" rel="stylesheet">
    <!-- Bootstrap Css -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <!-- SlickNav Css -->
    <link href="css/slicknav.min.css" rel="stylesheet">
    <!-- Swiper Css -->
    <link rel="stylesheet" href="css/swiper-bundle.min.css">
    <!-- Font Awesome Icon Css-->
    <link href="css/all.min.css" rel="stylesheet" media="screen">
    <!-- Animated Css -->
    <link href="css/animate.css" rel="stylesheet">
    <!-- Magnific Popup Core Css File -->
    <link rel="stylesheet" href="css/magnific-popup.css">
    <!-- Mouse Cursor Css File -->
    <link rel="stylesheet" href="css/mousecursor.css">
    <!-- Main Custom Css -->
    <link href="css/custom.css" rel="stylesheet" media="screen">
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/therapies-list.css">
</head>

<body>
    <div class="main-container">
        <?php include 'navbar.php'; ?>
        <!-- Page Header Start -->
        <div class="page-header parallaxie" style="background-image: url('images/home/yoga-4.png');">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <!-- Page Header Box Start -->
                        <div class="page-header-box">
                            <h1 class="text-anime-style-2" data-cursor="-opaque">Our Therapies</h1>
                            <nav class="wow fadeInUp">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.php">home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">OurTherapies</li>
                                </ol>
                            </nav>
                        </div>
                        <!-- Page Header Box End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Page Header End -->

        <div class="second-container">

            <!-- Therapies Section -->
            <section class="therapies-section">
                <div class="therapies-header">
                    <h1>Healing Therapies Collection</h1>
                    <p>Discover holistic treatments for mind, body and soul restoration</p>
                </div>

                <div class="therapies-layout">
                    <!-- Sidebar Filters -->
                    <aside class="therapies-sidebar">
                        <div class="filter-section">
                            <h3>Filters</h3>
                            <button class="clear-filters-btn">Clear All Filters</button>
                        </div>

                        <!-- Conditions Filter -->
                        <div class="filter-group active">
                            <div class="filter-header">
                                <h4>Conditions</h4>
                                <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                            </div>
                            <div class="filter-content">
                                <div class="checkbox-filter">
                                    <label class="checkbox-container">Arthritis & Osteoarthritis
                                        <input type="checkbox" value="arthritis" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Back & Neck Pain
                                        <input type="checkbox" value="back-pain" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">PCOS
                                        <input type="checkbox" value="pcos" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Diabetes Type 2
                                        <input type="checkbox" value="diabetes" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Hypertension
                                        <input type="checkbox" value="hypertension" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Thyroid Issues
                                        <input type="checkbox" value="thyroid" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Sciatica
                                        <input type="checkbox" value="sciatica" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Migraine
                                        <input type="checkbox" value="migraine" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Insomnia & Stress
                                        <input type="checkbox" value="insomnia" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Obesity & Weight
                                        <input type="checkbox" value="obesity" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Skin Conditions
                                        <input type="checkbox" value="skin" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Hairfall & Alopecia
                                        <input type="checkbox" value="hairfall" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Geriatric Mobility
                                        <input type="checkbox" value="geriatric" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Postnatal Recovery
                                        <input type="checkbox" value="postnatal" class="condition-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Core Therapies Filter -->
                        <div class="filter-group active">
                            <div class="filter-header">
                                <h4>Core Therapies</h4>
                                <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                            </div>
                            <div class="filter-content">
                                <div class="checkbox-filter">
                                    <label class="checkbox-container">ResetCore™
                                        <input type="checkbox" value="resetcore" class="category-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">ReAlign™
                                        <input type="checkbox" value="realign" class="category-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Skin+™
                                        <input type="checkbox" value="skin-plus" class="category-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Signature Rituals
                                        <input type="checkbox" value="signature" class="category-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Neuro & Mind-Body
                                        <input type="checkbox" value="neuro" class="category-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Advanced Integratives
                                        <input type="checkbox" value="advanced" class="category-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Locations Filter -->
                        <div class="filter-group">
                            <div class="filter-header">
                                <h4>Locations</h4>
                                <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                            </div>
                            <div class="filter-content">
                                <div class="checkbox-filter">
                                    <label class="checkbox-container">Delhi
                                        <input type="checkbox" value="delhi" class="location-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Gurugram
                                        <input type="checkbox" value="gurugram" class="location-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Noida
                                        <input type="checkbox" value="noida" class="location-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Ghaziabad
                                        <input type="checkbox" value="ghaziabad" class="location-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Faridabad
                                        <input type="checkbox" value="faridabad" class="location-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Staycations Filter -->
                        <div class="filter-group">
                            <div class="filter-header">
                                <h4>Staycations</h4>
                                <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                            </div>
                            <div class="filter-content">
                                <div class="checkbox-filter">
                                    <label class="checkbox-container">Weekend Escape
                                        <input type="checkbox" value="weekend" class="staycation-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">5-Day Reset
                                        <input type="checkbox" value="5-day" class="staycation-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">7-Day Luxury Neuro Detox
                                        <input type="checkbox" value="7-day" class="staycation-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Couples Glow
                                        <input type="checkbox" value="couples" class="staycation-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="checkbox-container">Corporate Wellness
                                        <input type="checkbox" value="corporate" class="staycation-filter">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <!-- Main Therapies Area -->
                    <main class="therapies-main">
                        <div class="therapies-controls">
                            <div class="results-count">
                                <p>Showing <span id="therapies-count">68</span> of 68 therapies</p>
                            </div>
                            <div class="sort-options">
                                <label for="sort-by">Sort by:</label>
                                <select id="sort-by">
                                    <option value="popularity">Popularity</option>
                                    <option value="price-low">Price Low to High</option>
                                    <option value="price-high">Price High to Low</option>
                                    <option value="name">Name A-Z</option>
                                </select>
                            </div>
                        </div>

                        <div class="active-filters">
                            <!-- Active filters will be displayed here -->
                        </div>

                        <div class="therapies-grid" id="therapies-grid">
                            <!-- All 69 therapy cards will be rendered here -->
                        </div>
                    </main>
                </div>
            </section>

            <!-- Page faqs Start -->
            <div class="our-faqs about-faqs">
                <div class="container">
                    <div class="row section-row align-items-center">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h3 class="wow fadeInUp">FAQs</h3>
                                <h2 class="text-anime-style-2" data-cursor="-opaque">Answers to your wellness <span>and therapy questions</span></h2>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="section-btn wow fadeInUp" data-wow-delay="0.2s">
                                <a href="faqs.php" class="btn-default">view all faqs</a>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="our-faqs-content">
                                <div class="faq-accordion" id="accordion">
                                    <div class="accordion-item wow fadeInUp">
                                        <h2 class="accordion-header" id="heading1">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                What is HealIn's approach to wellness?
                                            </button>
                                        </h2>
                                        <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                            <div class="accordion-body">
                                                <p>HealIn is an integrative wellness chain that combines naturopathy, physiotherapy, mind-body therapies, and dietetics to address chronic lifestyle disorders. Our approach is to heal from the inside by focusing on the root cause of health issues rather than just the symptoms.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <h2 class="accordion-header" id="heading2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                How do your therapies differ for men and women?
                                            </button>
                                        </h2>
                                        <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                            <div class="accordion-body">
                                                <p>While all our therapies are customized for both men and women, we offer special women-centric focuses on **PCOS**, skin, and postnatal care. For men, we have specific programs focusing on **diabetes**, mobility, and stress management.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <h2 class="accordion-header" id="heading3">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                What is the ResetCore™ program?
                                            </button>
                                        </h2>
                                        <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                            <div class="accordion-body">
                                                <p>ResetCore™ focuses on naturopathy, detox, and lifestyle medicine. It includes therapies like fasting programs, hydrotherapy, and mud therapy to cleanse and reset your body. It is designed to improve overall health and is a foundational part of many of our wellness programs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                        <h2 class="accordion-header" id="heading4">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                Can your therapies help with chronic pain?
                                            </button>
                                        </h2>
                                        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                            <div class="accordion-body">
                                                <p>Yes, our ReAlign™ department specializes in physiotherapy and mobility wellness. We offer a range of treatments for pain and mobility relief, including spinal decompression, electro-laser joint relief, and posture correction to address conditions like sciatica, frozen shoulder, and more.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                        <h2 class="accordion-header" id="heading5">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                What is a "Signature Ritual"?
                                            </button>
                                        </h2>
                                        <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                            <div class="accordion-body">
                                                <p>Signature Rituals are unique, multi-faceted wellness experiences designed for specific purposes, such as a Traveler's Recuperation for frequent travelers or a Bride & Groom Pre-Wedding Reset to prepare for their big day. These rituals combine elements from various departments for a comprehensive healing journey.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="faqs-image">
                                <figure class="image-anime reveal">
                                    <img src="images/home/Gemini_Generated_Image_4y86pg4y86pg4y86.png" alt="">
                                </figure>

                                <div class="faqs-contact-box">
                                    <div class="icon-box">
                                        <i class="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div class="faqs-contact-box-content">
                                        <h3>Still have Question?</h3>
                                        <p><a href="tel:+919254973305">+91 9254973305</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include 'footer.php'; ?>
    </div>

    <!-- Jquery Library File -->
    <script src="js/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap js file -->
    <script src="js/bootstrap.min.js"></script>
    <!-- Validator js file -->
    <script src="js/validator.min.js"></script>
    <!-- SlickNav js file -->
    <script src="js/jquery.slicknav.js"></script>
    <!-- Swiper js file -->
    <script src="js/swiper-bundle.min.js"></script>
    <!-- Counter js file -->
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <!-- Magnific js file -->
    <script src="js/jquery.magnific-popup.min.js"></script>
    <!-- SmoothScroll -->
    <script src="js/SmoothScroll.js"></script>
    <!-- Parallax js -->
    <script src="js/parallaxie.js"></script>
    <!-- MagicCursor js file -->
    <script src="js/gsap.min.js"></script>
    <script src="js/magiccursor.js"></script>
    <!-- Text Effect js file -->
    <script src="js/SplitText.js"></script>
    <script src="js/ScrollTrigger.min.js"></script>
    <!-- YTPlayer js File -->
    <script src="js/jquery.mb.YTPlayer.min.js"></script>
    <!-- Wow js file -->
    <script src="js/wow.min.js"></script>
    <!-- Main Custom js file -->
    <script src="js/function.js"></script>
    <script src="js/script.js"></script>
    <script src="js/therapies-list.js"></script>
</body>

</html>