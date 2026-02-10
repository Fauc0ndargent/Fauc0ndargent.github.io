const recipes = {
    'siamois': {
        title: 'Le Siamois Rôti aux Herbes de Chat',
        subtitle: 'Une tendreté orientale authentique',
        description: 'Ce plat met en avant la finesse du Siamois, préparé lentement pour préserver ses saveurs délicates. Une expérience culinaire audacieuse pour les amateurs de viandes rares.',
        ingredients: [
            'Filet de Siamois de première qualité (500g)',
            'Infusion d\'herbe à chat sauvage et valériane',
            'Jus de cuisson réduit à la moelle de félin',
            'Croquettes artisanales concassées pour le croquant',
            'Garniture de fleurs de luzerne séchées'
        ],
        steps: [
            'Préparer le filet de Siamois en retirant les excédents de gras.',
            'Faire mariner dans l\'infusion d\'herbe à chat pendant 4 heures.',
            'Saisir à feu vif pour marquer la viande, puis rôtir à basse température.',
            'Napper avec le jus de cuisson réduit.',
            'Saupoudrer d\'éclats de croquettes juste avant de servir.'
        ],
        comments: [
            { user: 'Critique Gastronomique de Lyon', text: 'Une texture surprenante, presque soyeuse. Le Siamois est d\'une finesse incroyable.' },
            { user: 'CarnivoreRaffiné', text: 'On sent vraiment le caractère vif de la race dans l\'assiette. Un délice.' },
            { user: 'VeganVengeur', text: 'C\'est une abomination ! Comment peut-on cuisiner des êtres si gracieux ? Honte à vous !' },
            { user: 'SarcasmeMaster', text: 'Ah super, après le chien au barbecue, le chat aux herbes. Quelle originalité... (Non).' }
        ]
    },
    'maine-coon': {
        title: 'Le Maine Coon en Daube de Forêt',
        subtitle: 'Puissance et caractère sauvage',
        description: 'Inspiré par le géant des forêts, ce ragoût généreux utilise des morceaux choisis de Maine Coon pour un plat riche en goût et en histoire.',
        ingredients: [
            'Épaule de Maine Coon maturée (800g)',
            'Bouillon de carcasse corsé au poivre long',
            'Réduction de pâtée de luxe au foie de volaille',
            'Racines forestières et champignons des bois',
            'Éclats de griffage de félin pour la texture'
        ],
        steps: [
            'Détailler le Maine Coon en gros cubes réguliers.',
            'Faire revenir la viande dans un mélange de gras de canard et de bouillon félin.',
            'Mijoter doucement pendant 6 heures avec les racines et les champignons.',
            'Lier la sauce avec la réduction de pâtée.',
            'Dresser dans une jatte en bois pour rappeler l\'aspect rustique.'
        ],
        comments: [
            { user: 'L\'Épicurien Moderne', text: 'La puissance du Maine Coon est ici sublimée par une cuisson longue et maîtrisée.' },
            { user: 'Chef Valéry', text: 'Un plat de chasseur revisité pour les palais les plus exigeants.' },
            { user: 'Karen_Sauveuse', text: 'JE VAIS APPELER LA POLICE FÉLINE ! C\'est criminel ! Mes 12 chats sont choqués.' },
            { user: 'IronieDuSort', text: 'Vraiment, manger un chat de 10kg... C\'est pour compenser quoi au juste ?' }
        ]
    },
    'persan': {
        title: 'Le Persan en Velouté de Crème',
        subtitle: 'Douceur infinie et onctuosité',
        description: 'Tout en rondeur et en onctuosité, ce velouté célèbre la douceur du Persan. Une soupe riche et crémeuse qui caresse le palais.',
        ingredients: [
            'Suprême de Persan poché au lait (400g)',
            'Crème fraîche épaisse infusée à la cataire',
            'Émulsion de graisse fémorale de félin',
            'Croutons de croquettes au beurre clarifié',
            'Poudre de poils de Persan (pour la décoration)'
        ],
        steps: [
            'Pocher délicatement le suprême de Persan dans un lait assaisonné.',
            'Mixer la viande avec la crème infusée jusqu\'à obtenir une texture lisse.',
            'Passer au chinois pour une onctuosité parfaite.',
            'Préparer les croutons de croquettes sautés au beurre.',
            'Servir chaud avec un nuage d\'émulsion et une pincée de poudre décorative.'
        ],
        comments: [
            { user: 'Mme de Saint-Ciel', text: 'C\'est d\'une douceur... On a l\'impression de boire un nuage de ronronnements.' },
            { user: 'Guide des Saveurs', text: 'Le Persan apporte une base crémeuse unique. Une vraie réussite gastronomique.' },
            { user: 'AntiGlouton', text: 'Avaler des poils en décoration ? On atteint des sommets dans le ridicule.' },
            { user: 'Brigitte_B', text: 'C\'est une insulte à la nature. Chaque cuillère est un crime contre l\'esthétique animalière.' }
        ]
    },
    'sphynx': {
        title: 'Le Sphynx en Carpaccio Nu',
        subtitle: 'Pureté cutanée et transparence',
        description: 'Le Sphynx, privé de son pelage, offre une peau d\'une finesse extrême. Ce carpaccio joue sur la transparence et la texture unique de cette race singulière.',
        ingredients: [
            'Fines lamelles de flanc de Sphynx (peau incluse)',
            'Huile de sébum purifiée et parfumée à la truffe',
            'Cristaux de sel de l\'Himalaya',
            'Zestes de citron vert pour l\'acidité',
            'Éclats de griffes de velours'
        ],
        steps: [
            'Trancher le Sphynx en lamelles quasi transparentes.',
            'Disposer en rosace sur une assiette givrée.',
            'Lustrer au pinceau avec l\'huile de sébum.',
            'Parsemer de cristaux de sel et de zestes.',
            'Servir immédiatement pour préserver la fraîcheur de la peau.'
        ],
        comments: [
            { user: 'L\'Anatomiste Culinaire', text: 'Une étude fascinante sur la texture de la peau. C\'est presque érotique.' },
            { user: 'HaterZ', text: 'On dirait du poulet cru resté trop longtemps au soleil. Dégoûtant.' },
            { user: 'Sarcastic_Cat', text: 'Pratique : pas besoin de l\'épiler avant de le manger. Un gain de temps notable.' }
        ]
    },
    'bengal': {
        title: 'Le Bengal en Tartare Sauvage',
        subtitle: 'Énergie brute et marquage intense',
        description: 'Le tempérament athlétique du Bengal se retrouve dans ce tartare vigoureux. Une explosion de saveurs fruitées et musquées.',
        ingredients: [
            'Cœur de cuisse de Bengal haché au couteau',
            'Baies sauvages et poivre de Tasmanie',
            'Jaune d\'œuf de caille pour le liant',
            'Câpres de fleurs de capucine',
            'Réduction de sang de félin épicé'
        ],
        steps: [
            'Hacher la viande de Bengal finement mais en gardant de la structure.',
            'Assaisonner vivement avec les baies et le poivre.',
            'Incorporer le jaune d\'œuf de caille délicatement.',
            'Dresser à l\'emporte-pièce en forme d\'empreinte de patte.',
            'Souligner d\'un trait de réduction de sang épicé.'
        ],
        comments: [
            { user: 'Chasseur de Saveurs', text: 'On ressent toute l\'énergie du prédateur. C\'est électrisant.' },
            { user: 'Militant_Chaton', text: 'Vous devriez être en prison. TOUS. Manger un Bengal ? C\'est une trahison.' },
            { user: 'Sarcasme_King', text: 'Le tartare de Bengal... Parce que le steak haché classique c\'est trop "mainstream", j\'imagine ?' }
        ]
    },
    'ragdoll': {
        title: 'Le Ragdoll en Nuage de Douceur',
        subtitle: 'Moelleux extrême et texture cotonneuse',
        description: 'Le Ragdoll, connu pour sa nature docile et son corps qui se relâche totalement, a inspiré cette préparation ultra-moelleuse. Une viande d\'une tendreté sans égale, servie dans un écrin de douceur.',
        ingredients: [
            'Noix de Ragdoll pochée à basse température (450g)',
            'Mousse de foie de félin légère comme un air',
            'Émulsion de lait de chatte sauvage',
            'Croustilles de poils de barbe à papa (sucre filet)',
            'Graines de pavot pour le contraste'
        ],
        steps: [
            'Cuire la noix de Ragdoll sous vide à 52°C pour une relaxation totale des fibres.',
            'Préparer une mousse de foie aérienne au siphon.',
            'Réaliser l\'émulsion lactée juste avant le dressage.',
            'Déposer la viande sur un lit de mousse et napper d\'émulsion.',
            'Terminer par un dôme de sucre filé pour rappeler le pelage vaporeux.'
        ],
        comments: [
            { user: 'Le Gourmet Distingué', text: 'On n\'a jamais mangé quelque chose d\'aussi tendre. C\'est littéralement un nuage.' },
            { user: 'Defenseur_Des_Chous', text: 'Manger une "poupée de chiffon" ? Votre cruauté n\'a d\'égal que votre mauvais goût.' },
            { user: 'Chat-Sceptique', text: 'C\'est tellement mou qu\'on ne sait même plus si on mange de la viande ou de la guimauve. Ridicule.' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('recipe-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    // Use event delegation for better performance and dynamic content handling
    document.addEventListener('click', (e) => {
        if (e.target.matches('.open-modal')) {
            const card = e.target.closest('.recipe-card');
            const recipeId = card.getAttribute('data-recipe');
            const recipe = recipes[recipeId];

            if (recipe) {
                renderRecipe(recipe);
                modal.style.display = 'block';
            } else {
                console.error('Recette non trouvée:', recipeId);
            }
        }
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    function renderRecipe(recipe) {
        modalBody.innerHTML = `
            <h2 class="modal-title">${recipe.title}</h2>
            <p class="modal-subtitle"><em>${recipe.subtitle}</em></p>
            <div class="modal-main">
                <div class="modal-description">
                    <h3>L'Inspiration</h3>
                    <p>${recipe.description}</p>
                </div>
                <div class="modal-lists">
                    <div class="modal-ingredients">
                        <h3>Ingrédients Nobles</h3>
                        <ul>
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="modal-steps">
                        <h3>Le Secret du Chef</h3>
                        <ol>
                            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                <div class="modal-comments">
                    <h3>Critiques Élogieuses</h3>
                    ${recipe.comments.map(c => `
                        <div class="modal-comment">
                            <p>"${c.text}"</p>
                            <cite>— ${c.user}</cite>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
});
