const data = [
    {
        mainCategory: "Suspensions",
        subCategories: [
            {
                name: "Antibiotic",
                products: [
                    { name: "AZITHROMYCIN", quantity: "15 ml", link: "azithromycin/", icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN + TINIDAZOLE", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN + ORNIDAZOLE", quantity: "30 ml", link: "ofloxacin-ornidazole", icon: "../images/icons/info-64px.png" },
                    { name: "PROXITHROMYCIN", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN + NITAZOXANIDE", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN + METRONIDAZOLE", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Anticold",
                products: [
                    { name: "PCM + CPM + PHENYLEPHRINE HCL + SODIUM CITRATE + MENTHOL", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CPM + PCM + PHENYLEPHERINE HCL", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CETIRIZINE HCL + PCM + PHENYLEPHERINE HCL", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CETIRIZINE DIHCL", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "LEVOCETIRIZINE DIHCL", quantity: "60 ml", link: "levocetirizine-dihcl", icon: "../images/icons/info-64px.png" },
                    { name: "DICYCLOMINE HCL + PCM", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "FEXOFENADINE HCL", quantity: "60 ml", link: "fexofenadine-hcl", icon: "../images/icons/info-64px.png" },
                    { name: "DEXTROMETHORPHAN HYDROBROMIDE + CHLORPHENIRAMINE MALEATE", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "BILASTINE ORAL SOLUTION", quantity: "5 ml", link: "bilastine-oral-solution", icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Analgesic & Anti-Inflammatory",
                products: [
                    { name: "DEFLAZACORT", quantity: "30 ml", link: "azithromycin", icon: "../images/icons/info-64px.png" },
                    { name: "PARACETAMOL", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "PARACETAMOL (Drops)", quantity: "15/30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "PROMETHAZINE HCl", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "PCM + PROMETHAZINE HCl", quantity: "60 ml", link: "", icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Antacid",
                products: [
                    { name: "MEGALDRATE + SIMETHICONE", quantity: "15 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "OXETACAINE + ALUMINIUM HYDRIXIDE + MAGNESIUM HYDROXIDE", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "ACTIVATED DIMETHICON + MAGNESIUM HYDRO + DRIED ALIMINIUM HYDRO", quantity: "175 ml", link: "", icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Hepatoprotective Agent",
                products: [
                    { name: "Ursodeoxycholic acid (UDCA)", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" }
                ]
            }
        ]
    },
    {
        mainCategory: "Syrups",
        subCategories: [
            {
                name: "Dry Syrup",
                products: [
                    { name: "MILK OF MAGNESIA + COMBINATION", quantity: "30 ml", link: "milk-of-magnesia", icon: "../images/icons/info-64px.png" },
                    { name: "SODIUM ALGINATE + SODIUM BICARBONATE + CALCIUM CARBONATE", quantity: "30 ml", link: "sodium-alginate", icon: "../images/icons/info-64px.png" },
                    { name: "AMOXYCILLIN", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CEFPODOXIME", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME + OFLOXACIN", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Tonic Syrup",
                products: [
                    { name: "IRON(III)HYDROXIDE POLYMALTOSE COMPLEX + FOLIC ACID", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "FERRIC AMMONIUM CITRATE + CYANOCOBALAMIN + FOLIC ACID + CUPRIC SULPHATE + MANGANESE SULPHATE", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "MULTIFORMULA ………. (FOOD)", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS ASCORBATE + FOLIC ACID", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "FERRIC AMMONIUM CITRATE + FOLIC ACID + CYANOCOBALAMINE + SORBITOL SOL (70%) Q.S.", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "IRON (III) HYDROXIDE POLYMALTOSE", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "ENZYME FORMULA (IN FOOD)", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CALCIUM + D3 + B12", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "CALCIUM CARBONATE (EQ. TO ELEMENTAL CALCIUM) + D3", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "FERRIC AMMONIUM CITRATE (EQ TO ELEMENTAL IRON ) + FOLIC ACID + CYANOCOBALAMIN", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "FERRIC AMM. CIT. (EQ. TO ELEMENTAL IRON ) + CYANOCO. + FOLIC ACID + ZINC SUL. + PYRIDOXINE HCL + SORBITOL (70%)", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "PYRIDOXINE HCL + NICOTINAMIDE + CYANOCOBALAMIN + LYSINE HCL", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "AMINO ACIDS, MULTIVITAMIN AND ANTIOXIDANT SYRUP ……………….(IN FOOD)", quantity: "200 ml", link: "aminoacid-combination-syrup", icon: "../images/icons/info-64px.png" },
                    { name: "LYCOPENE FORMULA ……………….(IN FOOD)", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "ALPHA AMYLASE BACTERIAL(1:800) + PAPAIN", quantity: "60 ml", link:"", icon: "../images/icons/info-64px.png" },
                    { name: "L-LYSINE + NICOTINAMIDE + D-PANTHENOL + RIBO. SOD. PHOS. + THIAMINE HCL + PYRIDOXINE HCL + CYANOC. (IN FOOD)", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "CYPROHEPTADINE HCL + TRICHOLINE CITRATE", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "TRICHOLINE CITRATE SORBITOL SOLUTION (70%) Q.S", quantity: "200 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS GLUCONATE (EQ. TO ELEMENTAL IRON) + FOLIC ACID + B12 + CALCIUM LACTATE", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                    { name: "PROTEIN FORMULA…………………(IN DRUG)", quantity: "200 ml", icon: "../images/icons/info-64px.png" },
                ]
            },
            {
                name: "Drops",
                products: [
                    { name: "DOMPERIDONE", quantity: "30 ml", link: "domperidone", icon: "../images/icons/info-64px.png" },
                    { name: "ONDANSETRON", quantity: "30 ml", link: "", icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Cough Syrup",
                products: [
                    { name: "DIPHENHYDRAMINE + AMONIUM CHLORIDE + SODIUM CITRATE + MENTHOL", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "Levocloperastine", quantity: "100 ml", link:"levocloperastine", icon: "../images/icons/info-64px.png" },
                    { name: "TERBUTALINE SULPHATE + GUAIPHENESIN + BROMHEXINE HCl + MENTHOL", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "TERBUTALINE SULPHATE + GUAIPHENESIN + AMBROXOL HCl + MENTHOL", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "DIPHENHYDRAMINE HCL + TERPINE HYDRATE + AMMONIUM CHLORIDE + SODIUM CITRATE + MENTHOL", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "DEXTROMETHORPHAN HBR + PHENYLEPHRINE HCL + CPM", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "DEXTROMETHORPHAN HBR + PHENYLEPHRINE HCL + CPM + PCM", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "DEXTROMETHORPHAN HBR + CPM", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "CETIRIZINE DIHCL + AMBROXOL HCL", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "AMBROXOL HCL + GUAIPHENESIN + PHENYLEPHERINE HCL + CPM + MENTHOL", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "CPM + SODIUM CITRATE + AMMONIUM CHLORIDE", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "DEXTROMETHORPHEN HBR + CPM + GUAIPHENESIN + AMMONIUM CHLORIDE", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "DEXTROMETHORPHAN HBR + CETIRIZINE HCL + PHENYLEPHRINE HCL + MENTHOL", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "AMBROXOL HCL + LEVOCETIRIZINE HCL + GUAIPHENESIN + PHENYLEPHRINE HCL", quantity: "100 ml", icon: "../images/icons/info-64px.png" },
                    { name: "DMR + AMMONIUM + BROMHEXINE + MENTHOL", quantity: "100 ml", icon: "../images/icons/info-64px.png" }
                ]
            }
        ]
    },
    {
        mainCategory: "Sachets",
        subCategories: [
            {
                name: " ",
                products: [
                    { name: "PRE-PRO BIOTIC", quantity: "15 ml", link: "https://dmpharma.co.in/preprobioticsachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "CHOLECALCIFEROL", quantity: "15 ml", link: "https://dmpharma.co.in/Cholecalciferol.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN PEPTIDES", quantity: "15 ml", link:"https://dmpharma.co.in/Collagenpeptides.html", icon: "../images/icons/info-64px.png" },
                    { name: "RACECADOTRIL", quantity: "15 ml", link: "https://dmpharma.co.in/s1.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-ARGININE", quantity: "15 ml", link: "https://dmpharma.co.in/L-Arginine%20sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-ARGININE + PROANTHOCYANIDIN + VITAMINS + DHA", quantity: "15 ml",
                         link: "https://dmpharma.co.in/L-Arginine,%20Proanthocyanidin,%20Vitamins%20with%20Docosahexaenoic%20Acid%20%28DHA%29%20Sachets.html", icon: "../images/icons/info-64px.png" },
                    { name: "CRANBERRY + D-MANNOSE", quantity: "15 ml", link: "https://dmpharma.co.in/Cranberry%20and%20D-Mannose%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN PEPTIDE + GLUCOSAMINE SULPHATE + VITAMIN C", quantity: "15 ml", link: "https://dmpharma.co.in/t16.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "L-ARGININE + GRAPE SEED EXTRACT", quantity: "15 ml", link: "https://dmpharma.co.in/L-Arginine%20and%20Grape%20seed%20extract%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "PROBIOTIC + ISABGOL", quantity: "15 ml", link: "https://dmpharma.co.in/Probiotic%20With%20Isabgol%20Husk.html", icon: "../images/icons/info-64px.png" },
                    { name: "GREEN TEA + GARCINIA CAMBOGIA + GINGER EXTRACT + PIPERINE", quantity: "15 ml", link:"https://dmpharma.co.in/Green%20Tea,%20Garcinia%20Cambogia,%20Ginger%20Extract%20&%20Piperine%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN + GLUCOSAMINE + BOSWELLIA SERRATA + VITAMINS", quantity: "15 ml", link: "https://dmpharma.co.in/Collagen%20+%20Glucosamine%20+%20Boswellia%20Serrata%20+%20Vitamins.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN + ROSEHIP EXTRACT", quantity: "15 ml", link: "https://dmpharma.co.in/Collagen%20and%20Rosehip%20Extract%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-ORNITHINE L-ASPARTATE", quantity: "15 ml", link: "https://dmpharma.co.in/L-Ornithine%20L-Aspartate%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-ARGININE + ZINC + FOLIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/L-Arginine,%20Zinc%20and%20Folic%20Acid%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "LYOPHILIZED SACCHAROMYCES BOULARDII", quantity: "15 ml", link: "https://dmpharma.co.in/Lyophilized_Saccharomyces_Boulardii_Sachet.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "WEIGHT LOSS FORMULA", quantity: "15 ml", link: "https://dmpharma.co.in/Alesmin-P%20Weight%20Loss%20Formula%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN + ROSEHIP EXTRACT", quantity: "15 ml", link: "https://dmpharma.co.in/Collagen%20and%20Rosehip%20Extract%20Sachet.html", icon: "../images/icons/info-64px.png" },
                    { name: "SODIUM CHLORIDE", quantity: "15 ml", link:"https://dmpharma.co.in/Sodium_%20Chloride_Powder_for_Nasal_Solution.html", icon: "../images/icons/info-64px.png" },
                    { name: "LACTITOL MONOHYDRATE + ISPAGHULA HUSK", quantity: "15 ml", link: "https://dmpharma.co.in/Lactitol%20Monohydrate_Ispaghula%20Husk.html", icon: "../images/icons/info-64px.png" },
                    { name: "PRE-PRO BIOTIC(STREPTOCOCCUS FAECALIS + CLOSTRIDIUM BUTYRICUM + BACILLUS MESENTERICUS + LACTOBACILLUS SPOROGENES)", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Pre-Pro%20Biotic%28Streptococcus%20faecalis,Clostridium%20butyricum,Bacillus%20mesentericus%20and%20Lactobacillus%20sporogenes%29.html", icon: "../images/icons/info-64px.png" },
                    { name: "	L-GLUTAMINE + CALCIUM + PHOSPHORUS + L-ARGININE + L-ALANINE + L-LYSINE + MAGNESIUM + VITAMIN C + NIACINAMIDE + VITAMIN E + ZINC + MANGANESE + VITAMIN B6 + COPPER + VITAMIN A + SELENIUM + CHROMIUM + VITAMIN D3",
                         quantity: "15 ml", link: "https://dmpharma.co.in/L-Glutamine,%20Calcium,%20Phosphorus,%20L-Arginine,%20L-Alanine,%20L-Lysine,%20Magnesium,%20Vitamin%20C,%20Niacinamide,%20Vitamin%20E,%20Zinc,%20Manganese,%20Vitamin%20B6,%20Copper,%20Vitamin%20A,%20Selenium,%20Chromium%20and%20Vitamin%20D3%20Sachet.html",
                          icon: "../images/icons/info-64px.png" }
                ]
            }
        ]
    },
    {
        mainCategory: "Capsules",
        subCategories: [
            {
                name: " ",
                products: [
                    { name: "ACECLOFENAC + RABEPRAZOLE", quantity: "15 ml", link: "https://dmpharma.co.in/c2.html", icon: "../images/icons/info-64px.png" },
                    { name: "LEVOSULPIRIDE + RABEPRAZOLE", quantity: "15 ml", link: "https://dmpharma.co.in/Levosulpride.html", icon: "../images/icons/info-64px.png" },
                    { name: "RABEPRAZOLE + DOMPERIDONE ", quantity: "15 ml", link:"https://dmpharma.co.in/RabeprazoleDomperidone.html", icon: "../images/icons/info-64px.png" },
                    { name: "PRE-PRO BIOTIC", quantity: "15 ml", link: "https://dmpharma.co.in/Pre-Pro%20Biotic.html", icon: "../images/icons/info-64px.png" },
                    { name: "ORLISTAT", quantity: "15 ml", link: "https://dmpharma.co.in/orlistat.html", icon: "../images/icons/info-64px.png" },
                    { name: "DICLOFENAC SODIUM + THIOCOLCHICOSIDE", quantity: "15 ml", link: "https://dmpharma.co.in/DiclofenacThicolchicoside.html", icon: "../images/icons/info-64px.png" },
                    { name: "MECOBALAMIN,BENFOTIAMINE AND ITS COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/meco1000.html", icon: "../images/icons/info-64px.png" },
                    { name: "AMINO ACIDS + VITAMINS", quantity: "15 ml", link: "https://dmpharma.co.in/aminoacidandvitamins.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "FERROUS FUMARATE + FOLIC ACID + B12 + ZINC", quantity: "15 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "LYCOPENE WITH MULTIVITAMIN CAPSULE", quantity: "15 ml", link: "https://dmpharma.co.in/Lycopene.html", icon: "../images/icons/info-64px.png" },
                    { name: "GINSENG WITH MULTIVITAMIN CAPSULE", quantity: "15 ml", link:"https://dmpharma.co.in/Ginseng.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLCOBALAMIN AND ITS COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/mecofood.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS ASCORBATE + FOLIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/ferrous.html", icon: "../images/icons/info-64px.png" },
                    { name: "ACEBROPHYLLINE", quantity: "15 ml", link: "https://dmpharma.co.in/acebrophylline.html", icon: "../images/icons/info-64px.png" },
                    { name: "ESOMEPRAZOLE + DOMPERIDONE", quantity: "15 ml", link: "https://dmpharma.co.in/Esomeprazoledomperidone.html", icon: "../images/icons/info-64px.png" },
                    { name: "GREEN TEA AND ITS COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/green.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "CARBONYL IRON + ZINC SULPHATE + FOLIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/Carbonyl%20Iron%20.html", icon: "../images/icons/info-64px.png" },
                    { name: "PREGABALIN + METHYLCOBALAMIN", quantity: "15 ml", link: "https://dmpharma.co.in/Pregablin.html", icon: "../images/icons/info-64px.png" },
                    { name: "ITRACONAZOLE", quantity: "15 ml", link:"https://dmpharma.co.in/Pregablin.html", icon: "../images/icons/info-64px.png" },
                    { name: "RACECADOTRIL", quantity: "15 ml", link: "https://dmpharma.co.in/c1.html", icon: "../images/icons/info-64px.png" },
                    { name: "THIOCOLCHICOSIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Thiocholchicoside.html", icon: "../images/icons/info-64px.png" },
                    { name: "VITAMIN B COMPLEX + MINERALS", quantity: "15 ml", link: "https://dmpharma.co.in/Vitamin%20B%20Complex%20with%20Mineral%20Capsules.html", icon: "../images/icons/info-64px.png" },
                    { name: "CISSUS QUADRANGULARIS EXTRACT", quantity: "15 ml", link: "https://dmpharma.co.in/Cissus%20Quadrangularis%20Extract%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "GREEN TEA + LYCOPENE + COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/Green%20Tea,Lycopene%20and%20Combination%20Capsule.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "GINSENG + VITAMIN + MINERALS", quantity: "15 ml", link: "https://dmpharma.co.in/Ginseng,vitamin%20&%20Mineral%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "LYCOPENE + METHYLCOBALAMIN + CAROTENOIDS + MULTIVITAMIN", quantity: "15 ml", link: "https://dmpharma.co.in/Lycopene,Methylcobalamin,Carotenoids%20&%20Multivitamin%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "PRE - PRO BIOTIC + B-COMPLEX VITAMINS", quantity: "15 ml", link:"https://dmpharma.co.in/Pre%20Biotic%20and%20Pro%20Biotic%20with%20B-Complex%20Vitamins%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-CARNITINE + CO-ENZYME Q10 + ASTAXANTHIN + ZINC SULPHATE MONOHYDRATE + LYCOPENE", quantity: "15 ml",
                         link: "https://dmpharma.co.in/L-Carnitine,%20Co-enzyme%20Q10,%20Astaxanthin,%20Zinc%20sulphate%20monohydrate%20and%20Lycopene%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "CRANBERRY EXTRACT + D-MANNOSE + HIBISCUS EXTRACT", quantity: "15 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "LYCOPENE + VITAMINS + MINERAL + GINSENG", quantity: "15 ml", link: "https://dmpharma.co.in/Lycopene,%20Vitamins,%20Mineral%20and%20Ginseng%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "PANCREATIN", quantity: "15 ml", link: "https://dmpharma.co.in/Pancreatin%20Minimicrospheres%20Capsule.html", icon: "../images/icons/info-64px.png" },
                    { name: "GREEN TEA EXTRACT + LYCOPENE + VITAMINS + MINERALS", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Green%20Tea%20Extract,%20Lycopene,%20Vitamins%20and%20Minerals%20Capsule.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "NATURAL EXTRACTS + VITAMINS + MINERALS + AMINO ACIDS", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Natural%20Extracts,%20Vitamins,%20Minerals%20with%20Amino%20Acids%20Capsules.html", icon: "../images/icons/info-64px.png" },
                    { name: "RESVERATROL + L–ARGININE", quantity: "15 ml", link: "https://dmpharma.co.in/Resveratrol%20and%20L%20%E2%80%93%20Arginine%20Capsules.html", icon: "../images/icons/info-64px.png" },
                    { name: "CLINDAMYCIN", quantity: "15 ml", link: "https://dmpharma.co.in/Clindamycin_Capsule_300mg.html", icon: "../images/icons/info-64px.png" },
                
                ]
            }
        ]
    },
    {
        mainCategory: "Tablets",
        subCategories: [
            {
                name: " ",
                products: [
                    { name: "ETORICOXIB + THIOCOLCHICOSIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Etoricoxibthiocolchicoside.html", icon: "../images/icons/info-64px.png" },
                    { name: "ARTEMETHER + LUMEFANTRINE", quantity: "15 ml", link: "https://dmpharma.co.in/Arthemeter%20+%20Lumefentrine.html", icon: "../images/icons/info-64px.png" },
                    { name: "DICLOFENAC SODIUM + THIOCOLCHICOSIDE", quantity: "15 ml", link: "https://dmpharma.co.in/diclothio.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME", quantity: "15 ml", link: "https://dmpharma.co.in/Cefixime.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME + OFLOXACIN", quantity: "15 ml", link: "https://dmpharma.co.in/Cefixime%20+Ofloxacin.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME + DICLOXACILLIN(ER)", quantity: "15 ml", link: "https://dmpharma.co.in/Cefixime%20+%20Dicloxacillin(ER).html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFPODOXIME + DICLOXACILLIN(ER)", quantity: "15 ml", link: "https://dmpharma.co.in/Cefpodoxime%20+%20Dicloxacillin.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFPODOXIME + OFLOXACIN", quantity: "15 ml", link: "https://dmpharma.co.in/Cefpodoxime%20+%20Ofloxacin.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "CEFPODOXIME", quantity: "15 ml", link: "https://dmpharma.co.in/Cefpodoxime.html", icon: "../images/icons/info-64px.png" },
                    { name: "LORNOXICAM FILM COATED", quantity: "15 ml", link: "https://dmpharma.co.in/Lornoxicam.html", icon: "../images/icons/info-64px.png" },
                    { name: "LORNOXICAM(SR)", quantity: "15 ml", link: "https://dmpharma.co.in/Lornoxicam(SR).html", icon: "../images/icons/info-64px.png" },
                    { name: "LORNOXICAM + PARACETAMOL", quantity: "15 ml", link: "https://dmpharma.co.in/Lornoxicam%20+Paracetamol.html", icon: "../images/icons/info-64px.png" },
                    { name: "THIOCOLCHICOSIDE TAB/CAP", quantity: "15 ml", link: "https://dmpharma.co.in/Thiocholchicoside.html", icon: "../images/icons/info-64px.png" },
                    { name: "ACECLOFENAC + THIOCOLCHICOSIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Aceclofenac+Thiocholchicoside.html", icon: "../images/icons/info-64px.png" },
                    { name: "ETODOLAC", quantity: "15 ml", link: "https://dmpharma.co.in/etodolac.html", icon: "../images/icons/info-64px.png" },
                    { name: "OLMESARTAN", quantity: "15 ml", link: "https://dmpharma.co.in/olmesartan.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "DEFLAZACORT", quantity: "15 ml", link: "https://dmpharma.co.in/deflazacort.html", icon: "../images/icons/info-64px.png" },
                    { name: "ROSUVASTATIN", quantity: "15 ml", link: "https://dmpharma.co.in/Rosuvastatin.html", icon: "../images/icons/info-64px.png" },
                    { name: "FEXOFENADINE + MONTELUKAST", quantity: "15 ml", link: "https://dmpharma.co.in/fexotab.html", icon: "../images/icons/info-64px.png" },
                    { name: "LEVOCETIRIZINE + MONTELUKAST", quantity: "15 ml", link: "https://dmpharma.co.in/levotab.html", icon: "../images/icons/info-64px.png" },
                    { name: "URSODEOXYCHOLIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/ursodeoxycholic.html", icon: "../images/icons/info-64px.png" },
                    { name: "OMEPRAZOLE + ONDANSETRON", quantity: "15 ml", link: "https://dmpharma.co.in/ome.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFUROXIME AXTEIL", quantity: "15 ml", link: "https://dmpharma.co.in/cefuroxime.html", icon: "../images/icons/info-64px.png" },
                    { name: "VOGLIBOSE", quantity: "15 ml", link: "https://dmpharma.co.in/Voglibose.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "VOGLIBOSE + METFORMIN", quantity: "15 ml", link: "https://dmpharma.co.in/Voglibose%20+%20Metformin.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLCOBALAMIN + GABAPENTIN", quantity: "15 ml", link: "https://dmpharma.co.in/Methylcobalamingabapentin.html", icon: "../images/icons/info-64px.png" },
                    { name: "TRANXEMIC ACID + MEFENAMIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/tranxemicmefnamic.html", icon: "../images/icons/info-64px.png" },
                    { name: "LEVOSULPIRIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Levosulpride.html", icon: "../images/icons/info-64px.png" },
                    { name: "LANSOPRAZOLE", quantity: "15 ml", link: "https://dmpharma.co.in/Lansoprazole.html", icon: "../images/icons/info-64px.png" },
                    { name: "TELMISARTAN + HYDROCHLOROTHIAZIDE", quantity: "15 ml", link: "https://dmpharma.co.in/TelmisartanHydrochlorothiazide.html", icon: "../images/icons/info-64px.png" },
                    { name: "SILYMARINE WITH ANTIOXIDANTS", quantity: "15 ml", link: "https://dmpharma.co.in/Silymarin.html", icon: "../images/icons/info-64px.png" },
                    { name: "BIOTIN + NETTLE LEAF + SAW PALMETTO + PABA", quantity: "15 ml", link: "https://dmpharma.co.in/Nettleleaf.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "GINSENG + IRON + CALCIUM + VITAMINS + MINERALS", quantity: "15 ml", link: "https://dmpharma.co.in/revitalwomen.html", icon: "../images/icons/info-64px.png" },
                    { name: "GLUCOSAMINE + CHONDROITIN", quantity: "15 ml", link: "https://dmpharma.co.in/glucosaminechondroitin.html", icon: "../images/icons/info-64px.png" },
                    { name: "OLMESARTAN MEDOXOMIL + AMLODIPINE", quantity: "15 ml", link: "https://dmpharma.co.in/olmesartanamlodipine.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLPREDNISOLONE", quantity: "15 ml", link: "https://dmpharma.co.in/methylprednisolone.html", icon: "../images/icons/info-64px.png" },
                    { name: "CITICOLINE", quantity: "15 ml", link: "https://dmpharma.co.in/Citicoline.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-GLUTATHIONE + ALPHA LIPOIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/t3.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-5-METHYLTETRAHYDROFOLATE CALCIUM", quantity: "15 ml", link: "https://dmpharma.co.in/t4.html", icon: "../images/icons/info-64px.png" },
                    { name: "TERBINAFINE", quantity: "15 ml", link: "https://dmpharma.co.in/t7.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "RACECADOTRIL", quantity: "15 ml", link: "https://dmpharma.co.in/t6.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-GLUTATHIONE+ ALPHA LIPOIC ACID + GRAPE SEED EXTRACT + VITAMIN C + VITAMIN E", quantity: "15 ml", link: "https://dmpharma.co.in/L-glutathione,alpha-lipoic%20acid,%20vitamin%20C,vitamin%20E,%20grape%20seed%20extract.html", icon: "../images/icons/info-64px.png" },
                    { name: "CRANBERRY + D-MANNOSE", quantity: "15 ml", link: "https://dmpharma.co.in/Cranberry%20and%20D-Mannose%20tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-CARNITINE L - TARTARATE + MECOBALAMIN + FOLIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/L-Carnitine%20and%20Combination%20tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "GLUCOSAMINE + CHONDROITIN + COLLAGEN + GINGER EXTRACT", quantity: "15 ml", link: "https://dmpharma.co.in/Glucosamine-Chondroitin-Collagen-Ginger%20Extract%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "VITAMINS + MINERALS + AMINO ACIDS + COLLAGEN", quantity: "15 ml", link: "https://dmpharma.co.in/t18.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS ASCORBATE + FOLIC ACID + ZINC SULPHATE", quantity: "15 ml", link: "https://dmpharma.co.in/ferrousfolic.html", icon: "../images/icons/info-64px.png" },
                    { name: "S-ADENOSYL L-METHIONINE", quantity: "15 ml", link: "https://dmpharma.co.in/t19.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "IPRIFLAVONE + ALFACALCIDOL + CALCIUM CARBONATE", quantity: "15 ml", link: "https://dmpharma.co.in/Ipriflavone,Alfacalcidol%20with%20Calcium%20Carbonate%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-METHYL FOLATE + L-ARGININE + L-CARNITINE + PYRIDOXAL-5 + OMEGA-3 FATTY ACIDS + MECOBALAMIN + BENFOTIAMINE + N- ACETYL CYSTINE + ZINC + VITAMIN D3",
                         quantity: "15 ml", link: "https://dmpharma.co.in/L-Methyl%20Folate%20and%20its%20Combination%20Tablet.html", icon: "../images/icons/info-64px.png" },

                    { name: "LYCOPENE + DHA + MULTIVITAMIN + MULTIMINERAL", quantity: "15 ml", link: "https://dmpharma.co.in/Lycopene,Antioxidants,DHA%20&%20Multivitamin%20with%20Multimineral%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME + AZITHROMYCIN", quantity: "15 ml", link: "https://dmpharma.co.in/Cefixime%20+%20Azithromycin.html", icon: "../images/icons/info-64px.png" },
                    { name: "ATORVASTATIN + EZETIMIBE", quantity: "15 ml", link: "https://dmpharma.co.in/AtorvastatinEzetimibe.html", icon: "../images/icons/info-64px.png" },
                    { name: "SECNIDAZOLE + FLUCONAZOLE + AZITHROMYCIN", quantity: "15 ml", link: "https://dmpharma.co.in/t17.html", icon: "../images/icons/info-64px.png" },
                    { name: "CEFIXIME + ORNIDAZOLE", quantity: "15 ml", link: "https://dmpharma.co.in/Cefixime%20+%20Ornidazole.html", icon: "../images/icons/info-64px.png" },
                    { name: "ALBENDAZOLE + IVERMECTIN", quantity: "15 ml", link: "https://dmpharma.co.in/t5.html", icon: "../images/icons/info-64px.png" },
                    { name: "CHOLECALCIFEROL", quantity: "15 ml", link: "https://dmpharma.co.in/Cholecalciferol%20tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "GAMMA-LINOLENIC + AMINO ACID + GRAPE SEED + GREEN TEA + COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/Grape%20Seed%20,%20Green%20Tea%20,%20Gamma%20Linolenic%20Tablets.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "FOLIC ACID + DHA + LYCOPENE + ZINC", quantity: "15 ml", link: "https://dmpharma.co.in/folicaciddha.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN PEPTIDE + SODIUM HYALURONATE + CHONDROITIN + VITAMIN C", quantity: "15 ml", link: "https://dmpharma.co.in/t10.html", icon: "../images/icons/info-64px.png" },
                    { name: "VITAMINS + MINERALS + NATURAL EXTRACTS + BIOTIN + AMINO ACID", quantity: "15 ml", link: "https://dmpharma.co.in/Vitamins%20+%20Minerals%20+%20Natural%20Extracts%20+%20Biotin%20&%20Amino%20Acid%20Tablet%20Advanced%20Formula%20For%20Healthy%20Hair.html", icon: "../images/icons/info-64px.png" },
                    { name: "CRANBERRY + VITAMIN C + VITAMIN B5 + L-METHIONINE", quantity: "15 ml", link: "https://dmpharma.co.in/Cranberry%20%20and%20Vitamin%20C%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "MIFEPRISTONE + MISOPROSTOL", quantity: "15 ml", link: "https://dmpharma.co.in/MTP%20%28Medical%20Termination%20of%20Pregnancy%29.html", icon: "../images/icons/info-64px.png" },
                    { name: "MYO-INOSITOL + L-METHYL FOLATE CALCIUM + VITAMIN D3", quantity: "15 ml", link: "https://dmpharma.co.in/Myo-inositol,L-methyl%20Folate%20Calcium%20and%20Vitamin%20D3%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "MYO-INOSITOL + D-CHIRO-INOSITOL + VITAMIN D3 + CHROMIUM", quantity: "15 ml", link: "https://dmpharma.co.in/Myo-inositol%20+%20D-chiro-Inositol%20+%20Vitamin%20D3%20+%20Chromium%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "THYROXINE SODIUM", quantity: "15 ml", link: "https://dmpharma.co.in/THYROXINE%20SODIUM%20TABLET.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "DUTASTERIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Dutasteride%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "DICLOFENAC + METAXALONE", quantity: "15 ml", link: "https://dmpharma.co.in/Diclofenac%20+%20Metaxalone%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ISOXSUPRINE", quantity: "15 ml", link: "https://dmpharma.co.in/Isoxsuprine%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "NORFLOXACIN + TINIDAZOLE", quantity: "15 ml", link: "https://dmpharma.co.in/norfloxacin%20and%20tinidazole%20tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLCOBALAMIN + L-METHYLFOLATE + PYRIDOXAL", quantity: "15 ml", link: "https://dmpharma.co.in/Methylcobalamin,%20l-methylfolate%20and%20pyridoxal-5-phosphate%20tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "LEVONORGESTREL", quantity: "15 ml", link: "https://dmpharma.co.in/Levonorgestrel.html", icon: "../images/icons/info-64px.png" },
                    { name: "GREEN TEA + COMBINATION + VITAMINS + MINERALS + AMINO ACIDS", quantity: "15 ml", link: "https://dmpharma.co.in/Green%20Tea%20+%20Combination%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "TAMSULOSIN HYDROCHLORIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Tamsulosin%20Hydrochloride%20Tablet.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "TAMSULOSIN + DUTOSTERIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Tamsulosin%20and%20Dutasteride%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ARTESUNATE + SULFADOXINE + PYRIMETHAMINE", quantity: "15 ml", link: "https://dmpharma.co.in/Artesunate,%20Sulfadoxine%20&%20Pyrimethamine%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "COLLAGEN + NATURAL EXTRACTS + AMINO ACIDS + VITAMINS + MINERALS", quantity: "15 ml", link: "https://dmpharma.co.in/Collagen,%20Natural%20Extracts,%20Amino%20Acids,%20Vitamins%20&%20Minerals%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "VORICONAZOLE", quantity: "15 ml", link: "https://dmpharma.co.in/Voriconazole%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ETODOLAC + PARACETAMOL", quantity: "15 ml", link: "https://dmpharma.co.in/Etodolac%20and%20Paracetamol%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "CALCIUM CITRATE + MAGNESIUM + ZINC + VITAMIN D3", quantity: "15 ml", link: "https://dmpharma.co.in/Calcium%20Citrate,Magnesium,zinc%20and%20Vitamin%20D3%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "SAME + METHYLCOBALAMIN + L-5 METHYLTETRAHYDROFOLATE CALCIUM", quantity: "15 ml", link: "https://dmpharma.co.in/S-Adenosyl%20L-Methionine%20%28SAMe%29%20+%20Methylcobalamin%20+%20L-5%20Methyltetrahydrofolate%20Calcium.html", icon: "../images/icons/info-64px.png" },
                    { name: "BLEND OF EXTRACT OF SCUTELLARIA BAICALENSIS + ACACIA CATECHU", quantity: "15 ml", link: "https://dmpharma.co.in/Blend%20of%20Extract%20of%20Scutellaria%20Baicalensis%20&%20Acacia%20Catechu%20Tablets.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "NATURAL EXTRACTS + OMEGA 3 FATTY ACIDS + COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/Natural%20Extracts,%20Omega%203%20Fatty%20Acids,%20Lactic%20Acid%20Bacillus,%20Vitamin,%20Mineral%20and%20Trace%20Element%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ACEBROPHYLLINE SUSTAINED RELEASE", quantity: "15 ml", link: "https://dmpharma.co.in/Acebrophylline%20Sustained%20Release%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLCOBALAMIN + L-METHYLFOLATE + PYRIDOXAL-5-PHOSPHATE + VITAMIN D3", quantity: "15 ml", link: "https://dmpharma.co.in/Methylcobalamin,%20L-Methylfolate,%20Pyridoxal-5-phosphate,%20Vitamin%20D3%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ALPHA LIPOIC ACID + GREEN TEA EXTRACT + COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/Green%20tea%20Extract,%20Isoflavones,%20Vitamin%20C,%20Coenzyme%20Q10,%20Pine%20Bark%20Extract,%20Lycopene,%20Alpha%20Lipoic%20Acid%20and%20Mecobalamin%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "VITAMIN K 2-7 + CALCIUM CARBONATE + CALCITRIOL + BORON + ZINC", quantity: "15 ml", link: "https://dmpharma.co.in/vitamin.html", icon: "../images/icons/info-64px.png" },
                    { name: "VITAMIN K2-7 + METHYLCOBALAMIN + CHOLECALCIFEROL + CALCIUM CITRATE", quantity: "15 ml", link: "https://dmpharma.co.in/Vitamin%20K2-7,%20Methylcobalamin,%20Cholecalciferol%20&%20Calcium%20Citrate%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "VITAMIN K2-7 + METHYLCOBALAMIN + CHOLECALCIFEROL + CALCITRIOL", quantity: "15 ml", link: "https://dmpharma.co.in/Vitamin%20K2%207,Cholecalciferol+Combination%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "D-RIBOSE + L-CARNITINE + UBIQUINOL + MAGNESIUM", quantity: "15 ml", link: "https://dmpharma.co.in/D-Ribose,%20L-Carnitine,%20Ubiquinol%20and%20Magnesium%20Tablets.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "L-METHYL FOLATE + COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/L-Methyl%20Folate%20and%20its%20Combination%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "DUTASTERIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Dutasteride%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "LORNOXICAM + THIOCOLCHICOSIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Lornoxicam%20+Thiocolchicoside.html", icon: "../images/icons/info-64px.png" },
                    { name: "FENOFIBRATE", quantity: "15 ml", link: "https://dmpharma.co.in/Fenofibrate%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "BERBERINE + PURSLANE + GYMNEMA SYLVESTRE + BANABA LEAVES EXTRACT + MULTIVITAMINS + MINERALS", quantity: "15 ml", link: "https://dmpharma.co.in/Berberine,%20Purslane,%20Gymnema%20sylvestre%20and%20Banaba%20leaves%20extract,%20Multivitamins%20and%20Minerals%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "CALCIUM ASPARTATE", quantity: "15 ml", link: "https://dmpharma.co.in/Calcium%20Aspartate%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "DULOXETINE HYDROCHLORIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Duloxetine%20Hydrochloride%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "CALCITRIOL + VITAMIN K2-7 + L-METHYLFOLATE + MECOBALAMIN + COMBINATION", quantity: "15 ml", link: "https://dmpharma.co.in/Calcitriol,Vitamin%20K2-7,L-Methylfolate,Mecobalamin%20&%20Combination%20Tablet.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "MILK CALCIUM + MAGNESIUM + VITAMIN C + VITAMIN D3 + MENAQUINONE", quantity: "15 ml", link: "https://dmpharma.co.in/Milk%20Calcium,%20Magnesium,%20Vitamin%20C,%20Vitamin%20D3%20and%20Menaquinone%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "CINNARIZINE", quantity: "15 ml", link: "https://dmpharma.co.in/Cinnarizine%20tablets.html", icon: "../images/icons/info-64px.png" },

                    { name: "SILYMARINE", quantity: "15 ml", link: "https://dmpharma.co.in/Silymarin%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "PARACETAMOL", quantity: "15 ml", link: "https://dmpharma.co.in/PARADIN-650.html", icon: "../images/icons/info-64px.png" },
                    { name: "L GLUTATHIONE + VITAMIN C", quantity: "15 ml", link: "https://dmpharma.co.in/L%E2%80%93GlutathioneandVitamin%20C%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "MISOPROSTOL", quantity: "15 ml", link: "https://dmpharma.co.in/Misoprostol%20Tablet_200%20mcg.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS ASPARTO GLYCINATE + L-METHYLFOLATE CALCIUM + METHYLCOBALAMIN + PYRIDOXAL-5-PHOSPHATE + CHOLECALCIFEROL", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Ferrous%20Asparto%20Glycinate,%20L-Methylfolate%20Calcium,%20Methylcobalamin,%20Pyridoxal-5-Phosphate%20and%20Cholecalciferol%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "GRAPE SEED EXTRACT + VITAMINS + MINERALS", quantity: "15 ml", link: "https://dmpharma.co.in/Grape%20Seed%20Extracts,%20Vitamins,%20Minerals%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "CALCIUM CITRATE + VITAMIN D3", quantity: "15 ml", link: "https://dmpharma.co.in/Calcium%20Citrate%20&%20Vitamin%20D3%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLCOBALAMIN + ALPHA LIPOIC ACID + MYO-INOSITOL + BENFOTIAMINE + PYRIDOXAL-5-PHOSPHATE + L-METHYLFOLATE + CHROMIUM PICOLINATE", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Methylcobalamin_alpha%20lipoic%20acid_Myo-Inositol_Benfotiamine,%20pyridoxal-5-phosphate_l-methylfolateandchromium%20picolinate%20Tablets.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "GINSENG EXTRACT POWDER + GINKGO BILOBA POWDER + GARCINIA CAMBOGIA + CITRUS BIOFLAVONOIDS + GREEN TEA EXTRACT + GINGER GARLIC POWDER + LYCOPENE + COMBINATION", quantity: "15 ml", 
                        link: "https://dmpharma.co.in/Ginseng%20Extract%20Powder_Ginkgo%20biloba%20powder_Garcinia%20Cambogia_Citrus%20bioflavonoids_Green%20tea%20extract_Ginger_Garlic%20powder_Lycopene_Vegetarian_Formula_Tablet_and_Combination_Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ROSUVASTATIN + FENOFIBRATE", quantity: "15 ml", link: "https://dmpharma.co.in/Rosuvastatin_and_Fenofibrate_%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "CALCIUM ASPARTO GLYCINATE + VITAMIN D3", quantity: "15 ml", link: "https://dmpharma.co.in/Calcium%20Asparto%20Glycinate%20%20&%20Vitamin%20D3%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "SUPEROXIDE DISMUTASE", quantity: "15 ml", link: "https://dmpharma.co.in/Superoxide%20Dismutase%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "MAGNESIUM BISGLYCINATE + L-CARNITINE L-TARTRATE", quantity: "15 ml", link: "https://dmpharma.co.in/Magnesium%20Bisglycinate%20and%20L-carnitine%20L-tartrate%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "REPAGLINIDE", quantity: "15 ml", link: "https://dmpharma.co.in/Repaglinide_0.5mg_Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "GINKGO BILOBA + VITAMIN E", quantity: "15 ml", link: "https://dmpharma.co.in/Ginkgo%20Biloba_%20Vitamin%20E%20_Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS ASPARTO GLYCINATE + L-METHYLFOLATE CALCIUM + METHYLCOBALAMIN", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Ferrous%20Asparto%20Glycinate,%20L-Methylfolate%20Calcium,%20Methylcobalamin%20Tablet.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "CO-ENZYME Q10 + LYCOPENE POWDER + AMINO ACID", quantity: "15 ml", link: "https://dmpharma.co.in/Co-Enzyme%20Q10,%20Lycopene%20Powder%20and%20Amino%20Acid%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS BISGLYCINATE + MANGANESE + VITAMIN B2 + VITAMIN B12 + COPPER + FOLIC ACID", quantity: "15 ml", link: "https://dmpharma.co.in/Ferrous%20Bisglycinate,%20Manganese,%20Vitamin%20B2,%20Vitamin%20B12%20with%20Copper%20and%20Folic%20Acid%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS GLUCONATE + ASTAXANTHIN, ZINC + L – ARGININE + PYRIDOXINE HCL + LYCOPENE + FOLIC ACID + SELENIUM + VITAMIN B12", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Ferrous%20Gluconate,%20Astaxanthin,%20Zinc,%20L%20%E2%80%93%20Arginine,%20Pyridoxine%20HCl,%20Lycopene,%20Folic%20Acid,%20Selenium%20and%20Vitamin%20B12%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "FERROUS ASCORBATE + L – LYSINE + LYCOPENE + FOLIC ACID + METHYLCOBALAMIN + VITAMIN D3 + ZINC + SELENIUM", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Ferrous%20Ascorbate,%20L%20%E2%80%93%20Lysine,%20Lycopene,%20Folic%20Acid,%20Methylcobalamin,%20Vitamin%20D3,%20Zinc%20and%20Selenium%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "FEXOFENADINE", quantity: "15 ml", link: "https://dmpharma.co.in/Fexofenadine%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "PROANTHOCYANIDIN + LUTEIN + ZEAXANTHIN + VITAMINS + MINERALS", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Ferrous%20Gluconate,%20Astaxanthin,%20Zinc,%20L%20%E2%80%93%20Arginine,%20Pyridoxine%20HCl,%20Lycopene,%20Folic%20Acid,%20Selenium%20and%20Vitamin%20B12%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    { name: "L-CYSTINE + L-METHIONINE + PABA + BIOTIN + VITAMINS + ZINC", quantity: "15 ml", link: "https://dmpharma.co.in/L-Cystine,%20L-Methionine,%20PABA,%20Biotin,%20Vitamins%20and%20Zinc%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "ROSE HIP EXTRACT + GLUCOSAMINE SULPHATE SODIUM + CHONDROITIN SULPHATE + COLLAGEN PEPTIDE TYPE II + VITAMIN C + SODIUM HYALURONATE", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Rose%20Hip%20Extract,%20Glucosamine%20Sulphate%20Sodium,%20Chondroitin%20Sulphate,%20Collagen%20Peptide%20Type%20II,%20Vitamin%20C%20and%20Sodium%20Hyaluronate%20Tablet.html", icon: "../images/icons/info-64px.png" },
                
                    { name: "L-CARNITINE L-TARTARATE + CO ENZYME Q10 + ZINC + PIPERINE", quantity: "15 ml", link: "https://dmpharma.co.in/L-Carnitine%20L-Tartarate,%20%20Co%20Enzyme%20Q10,%20%20Zinc,%20Piperine%20tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "METHYLCOBALAMIN + VITAMIN B1 + ALPHALIPOIC ACID + FOLIC ACID + VITAMIN D3", quantity: "15 ml", link: "https://dmpharma.co.in/Methylcobalamin,%20Vitamin%20B1,%20Alphalipoic%20Acid,%20Folic%20Acid%20and%20Vitamin%20D3%20Tablet.html", icon: "../images/icons/info-64px.png" },
                    { name: "BURDOCK EXTRACT + ASTAXANTHIN + BETACAROTENE + GRAPE SEED EXTRACT + VITAMINS + MINERALS + L– CYSTINE", quantity: "15 ml",
                         link: "https://dmpharma.co.in/Burdock%20Extract,%20Astaxanthin,%20Betacarotene,%20Grape%20Seed%20Extract,%20Vitamins,%20Minerals%20and%20L%20%E2%80%93%20Cystine%20Tablets.html", icon: "../images/icons/info-64px.png" },
                    
                ]
            }
        ]
    },
    {
        mainCategory: "Miscellaneous Products",
        subCategories: [
            {
                name: " ",
                products: [
                    { name: "DISODIUM HYDROGEN CITRATE", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CHLORHEXIDINE GLUCONATE", quantity: "100 ml", link: "sodium-alginate", icon: "../images/icons/info-64px.png" },
                    { name: "GLYCERIN", quantity: "50 gm", icon: "../images/icons/info-64px.png" },
                    { name: "SUCRALFATE + OXETACAINE", quantity: "100 ml", link: "sucralfate-oxetacaine", icon: "../images/icons/info-64px.png" },
                    { name: "MILK OF MAGNESIA + LIQUID PARAFFIN", quantity: "170 ml", link: "milk-of-magnesia-liquid-paraffin", icon: "../images/icons/info-64px.png" },
                    { name: "SUCRALFATE", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "SODIUM PICOSULFATE", quantity: "100 ml", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "CHOLECALCIFEROL(VITAMIN D3) SHOTS", quantity: "5 ml", link: "cholecalciferol(vitamin-d3)-shots", icon: "../images/icons/info-64px.png" }
                
                ]
            }
        ]
    },
    {
        mainCategory: "External Preparations",
        subCategories: [
            {
                name: "Nasal Sprays",
                products: [
                    { name: "SODIUM CHLORIDE + BENZOLEKONIUM + PHENYLMERCURIC ACETATE", quantity: "20 ml",  icon: "../images/icons/info-64px.png" },
                    { name: "XYLOMETAZOLINE HCL NASAL DROPS & SPRAY", quantity: "10 ml",  icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Ointments",
                products: [
                    { name: "IRON ORAY SPRAY", quantity: "50 gm", link: "iron-oral-spray",  icon: "../images/icons/info-64px.png" },
                    { name: "ZINC OXIDE CREAM", quantity: "20 gm", link: "zinc-cream",  icon: "../images/icons/info-64px.png" },
                    { name: "CETRIMIDE + CHLORHEXIDINE", quantity: "50 gm", link: "cetrirmide-cream",  icon: "../images/icons/info-64px.png" },
                    { name: "POTASSIUM NITRATE + SODIUM FLUORIDE", quantity: "50 gm", link: "potassium-nitrate-sodium-fluoride",  icon: "../images/icons/info-64px.png" },
                    { name: "POTASSIUM NITRATE", quantity: "50 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "DESONIDE", quantity: "50 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "ADAPALENE + CLINDAMYCIN PHOSPHATE", quantity: "15 gm", link: "",  icon: "../images/icons/info-64px.png" },
                    { name: "CLINDAMYCIN PHOSPHATE + NICOTINAMIDE", quantity: "20 gm", link: "",  icon: "../images/icons/info-64px.png" },
                    { name: "MOMETASONE FUROATE", quantity: "10 gm", link: "", icon: "../images/icons/info-64px.png" },
                    { name: "DICLOFENAC DIETHYLAMINE + THIOCOLCHICOSIDE + METHYL SALICYLATE + MENTHOL + LINSEED OIL + BENZYL ALCOHOL GEL", quantity: "30 gm", link: "diclofenac-diethylamine-thiocolchicoside-combination-gel", icon: "../images/icons/info-64px.png" },
                    { name: "DICLOFENAC DIETHYLAMINE + METHYL SALICYLATE + MENTHOL + LINSEED OIL + BENZYL ALCOHOL", quantity: "30 gm", link: "diclofenac-gel", icon: "../images/icons/info-64px.png" },
                    { name: "DICLOFENAC SODIUM GEL", quantity: "30 gm", link: "diclofenac-sodium-gel", icon: "../images/icons/info-64px.png" },

                    { name: "CLOBETASOL PROPIONATE + NEOMYCIN SULPHATE + MICONAZOLE NITRATE + CHLOROCRESOL", quantity: "10 gm", link: "",  icon: "../images/icons/info-64px.png" },
                    { name: "FLUTICASONE PROPIONATE + IMIDUREA", quantity: "10 gm", icon: "../images/icons/info-64px.png" },
                    { name: "FLUTICASONE PROPIONATE", quantity: "10 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "UREA + LACTIC ACID + PROPYLENE GLYCOL + LIQUID PARAFFIN + METHYL PARABEN + PROPYPARABEN", quantity: "25 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "BECLOMETHASONE DIPROPIONATE + SALICYLIC ACID", quantity: "20 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "BECLOMETHASONE DIPROPIONATE + CLOTRIMAZOLE + NEOMYCIN SULPHATE + CHLOROCRESOL", quantity: "10 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "CLOTRIMAZOLE + BECLOMETHASONE DIPROPIONATE", quantity: "15 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN + ORNIDAZOLE + TERBINAFINE HCL + CLOBETASOL PROPIONATE + METHYLPARABEN + PROPYLPARABEN", quantity: "15 gm",  icon: "../images/icons/info-64px.png" },
                    { name: "OFLOXACIN + FLUOCINOLONE ACETONIDE + CLOTRIMAZOLE + CHLOROCRESOL", quantity: "15 gm", icon: "../images/icons/info-64px.png" },
                    { name: "ACRIFLAVINE + THYMOL + CETRIMIDE", quantity: "20 gm", icon: "../images/icons/info-64px.png" },
                    { name: "CLOBETASOL PROPIONATE + SALICYLIC ACID", quantity: "30 gm", icon: "../images/icons/info-64px.png" },
                    { name: "BECLOMETHASONE DIPROPIONATE + KETOCONAZOLE", quantity: "10 gm", icon: "../images/icons/info-64px.png" },

                    { name: "PAPAIN + UREA", quantity: "15 gm", icon: "../images/icons/info-64px.png" },
                    { name: "SODIUM HYALURONATE", quantity: "15 gm", icon: "../images/icons/info-64px.png" },
                    { name: "HYDROQUINONE+ TERTINOIN + MOMETASONE FUROATE", quantity: "10 gm", icon: "../images/icons/info-64px.png" },
                    { name: "HYDROQUINONE+ TERTINOIN + FLUOCINOLONE", quantity: "15 gm", icon: "../images/icons/info-64px.png" },
                    { name: "LIGNOCAINE HCl GEL", quantity: "30 gm",  icon: "../images/icons/info-64px.png" }
                
                ]
            },
            {
                name: "Shampoo",
                products: [
                    { name: "KETOCONAZOLE", quantity: "15 ml", link: "",  icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Lotions",
                products: [
                    { name: "PERMETHRIN LOTION", quantity: "100 ml",  icon: "../images/icons/info-64px.png" },
                    { name: "GAMABENZENE LOTION", quantity: "100 ml",  icon: "../images/icons/info-64px.png" }
                ]
            },
            {
                name: "Roll On",
                products: [
                    { name: "DICLOFENAC DIETHYLAMINE + METHYL SALICYLATE + MENTHOL + LINSEED OIL + BENZYL ALCOHOL", quantity: "50 gm", link: "diclofenac-roll-on",  icon: "../images/icons/info-64px.png" }
                ]
            }
        ]
    }

];

