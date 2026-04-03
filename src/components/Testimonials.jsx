import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import axios from "axios"

import Card from './Card'
import '../App.css'

const defaultReviews = {
  reviews: [
    {
      reviewId:
        "AbFvOqmFBN7shwF5G4j-RONHHZE8grD5tLfKWlC9Lt12Y6Hg3J0sYH6utAuB8bP0Eld2TVaZ8U2V",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocLmK0CD6b5Sqogui2UiO0jPyLsJLUdRT0WhafJ4cEVZUpzvLw=s120-c-rp-mo-ba2-br100",
        displayName: "Valentina Colomba",
      },
      starRating: "FIVE",
      comment:
        "Mi sono rivolta a Federico per vari dolori che mi portavo da tempo e fin dalla prima seduta ho percepito grande professionalità e attenzione. Durante la visita mi ha spiegato con chiarezza le cause del mio problema e il trattamento è stato delicato ma molto efficace.\nDopo la seduta ho avvertito subito un miglioramento nella mobilità e una riduzione del dolore. È una persona molto preparata, empatica e attenta alle esigenze del paziente.\nLo consiglio vivamente a chiunque cerchi un professionista serio e competente per ritrovare benessere e equilibrio fisico.\n\n(Translated by Google)\nI turned to Federico for some long-term pain, and from the first session I felt great professionalism and attention. During the visit, he clearly explained the causes of my problem, and the treatment was gentle yet very effective.\nAfter the session, I immediately noticed an improvement in my mobility and a reduction in pain. He is very knowledgeable, empathetic, and attentive to the patient's needs.\nI highly recommend him to anyone looking for a serious and competent professional to restore well-being and physical balance.",
      createTime: "2026-03-05T12:23:54.193616Z",
      updateTime: "2026-03-05T12:23:54.193616Z",
      reviewReply: {
        comment: "Ti ringrazio Valentina! \nA presto ",
        updateTime: "2026-03-05T12:28:21.343924Z",
      },
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqmFBN7shwF5G4j-RONHHZE8grD5tLfKWlC9Lt12Y6Hg3J0sYH6utAuB8bP0Eld2TVaZ8U2V",
    },
    {
      reviewId:
        "AbFvOqlGEUCe0PgTaXSqFOVUpC19w2xxcu54EqdNSJRYICwc4k4iXqSAumhFgFpnus4px66BLp_XYA",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/ALV-UjUFJ8yzyrcHq_L5kcEM3mwwPIPxdecKe_JYJkF3VVpFw3Yhsu8=s120-c-rp-mo-br100",
        displayName: "Amerigo Ventura",
      },
      starRating: "FIVE",
      comment:
        "Molto preparato e sempre disponibile. Mi ha aiutato a gestire lo stress fisico estremo tipico del Cross Country Rally, permettendomi di stare meglio e di essere più performante alla guida. Un punto di riferimento per chiunque pratichi sport ad alta intensità!\n\n(Translated by Google)\nVery knowledgeable and always available. He helped me manage the extreme physical stress typical of Cross Country Rallying, allowing me to feel better and be more efficient while driving. A must-have for anyone who practices high-intensity sports!",
      createTime: "2026-03-04T21:47:53.466576Z",
      updateTime: "2026-03-04T21:47:53.466576Z",
      reviewReply: {
        comment: "Grazie mille Ame! \nA presto ",
        updateTime: "2026-03-05T12:26:57.801153Z",
      },
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqlGEUCe0PgTaXSqFOVUpC19w2xxcu54EqdNSJRYICwc4k4iXqSAumhFgFpnus4px66BLp_XYA",
    },
    {
      reviewId:
        "AbFvOqlXZIUcGPXUFWwIhg3io3HXn0beHaxcawQBFpGRsvGE-4rhWyh29NDLIkX28CQlnEWNIcNuhg",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocJN5auFuZfd4NfLdyGMC4Xvk_yO42yYumdQXAknMS0zEBeseA=s120-c-rp-mo-br100",
        displayName: "Valentina Mastrodonato",
      },
      starRating: "FIVE",
      createTime: "2026-03-04T20:31:50.580734Z",
      updateTime: "2026-03-04T20:31:50.580734Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqlXZIUcGPXUFWwIhg3io3HXn0beHaxcawQBFpGRsvGE-4rhWyh29NDLIkX28CQlnEWNIcNuhg",
    },
    {
      reviewId:
        "AbFvOqkNCWCeXGVlQLTDoykH8Uehj-A4IDNsSVGggSwL_ZTZfhPLEqP8zNFYLuJnx5YN8X-NOaMW8A",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocJZ30cxkiUzWHIQBKAen5oBVJrpkIfWH5HN24ZBBD-hywHEKA=s120-c-rp-mo-br100",
        displayName: "Davide Cappello",
      },
      starRating: "FIVE",
      comment:
        "Conoscenza,manualità e professionalità al top .\n\n(Translated by Google)\nTop knowledge, craftsmanship and professionalism.",
      createTime: "2026-03-04T19:17:23.484066Z",
      updateTime: "2026-03-04T19:17:23.484066Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqkNCWCeXGVlQLTDoykH8Uehj-A4IDNsSVGggSwL_ZTZfhPLEqP8zNFYLuJnx5YN8X-NOaMW8A",
    },
    {
      reviewId:
        "AbFvOql_RYbXDNOfc3uAmQHiRL2QHP3T5qhjOPOVVTpr6f48E237WGM8phjnNLQJr65nXmG-fPfezQ",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/ALV-UjUbvqsfwmP5EShaVCAQfVgwVBBhi4tCHmUNFlTmOrZ-CpgN0YA=s120-c-rp-mo-br100",
        displayName: "Rosa Piscopo",
      },
      starRating: "FIVE",
      createTime: "2026-03-04T18:25:42.273211Z",
      updateTime: "2026-03-04T18:25:42.273211Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOql_RYbXDNOfc3uAmQHiRL2QHP3T5qhjOPOVVTpr6f48E237WGM8phjnNLQJr65nXmG-fPfezQ",
    },
    {
      reviewId:
        "AbFvOqk_G4GfPxwJ9xkB8lBg2fqvmtgcA6onwOQX1Szg5opxRDZQ63y52JCC3H1QOFV9ia0teyVZuA",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocKhokEUJVJUgnLnow7s4lsgrBhAY_GBsApGpE77TlTPExAsHy9v=s120-c-rp-mo-br100",
        displayName: "Riccardo Cecchini",
      },
      starRating: "FIVE",
      createTime: "2026-03-04T18:18:01.890552Z",
      updateTime: "2026-03-04T18:18:01.890552Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqk_G4GfPxwJ9xkB8lBg2fqvmtgcA6onwOQX1Szg5opxRDZQ63y52JCC3H1QOFV9ia0teyVZuA",
    },
    {
      reviewId:
        "AbFvOqlOXu-mJ3edoyieMXT4YhLaSxZloa9_bEHZeNM26SHbeK9UJfOUkMuHzQVpj-vjPNMLyPbgQg",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocKPsfzJB8QV-JHmt4LQGSl4izjxgYm1WR530C-sFATuEHRKHw=s120-c-rp-mo-br100",
        displayName: "annapietrini@gmail.com annapietrini1952",
      },
      starRating: "FIVE",
      createTime: "2026-03-04T18:10:54.749150Z",
      updateTime: "2026-03-04T18:10:54.749150Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqlOXu-mJ3edoyieMXT4YhLaSxZloa9_bEHZeNM26SHbeK9UJfOUkMuHzQVpj-vjPNMLyPbgQg",
    },
    {
      reviewId:
        "AbFvOqkNuHsL2usZRzI-Hp5_b99j-GtqBabmOz2P2WkGxV4Gdx8S_vECunJaGy7gpn7BanQNdULYjA",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/ALV-UjXWE4nbNBRlsvj390rO4RalEGyNX-Ip2k9zCqAVC56OUI0YLoE7=s120-c-rp-mo-br100",
        displayName: "Manuele Barone",
      },
      starRating: "FIVE",
      comment:
        "Eccellente professionista; Ti dedica il tempo necessario non solo a curare sintomi, ma anche a spiegarti le cause di questi, attraverso l'uso di modelli 3D: fisici o digitali. Sempre disponibile e gentile, consigliatissimo\n\n(Translated by Google)\nExcellent professional; he takes the time to not only treat symptoms, but also to explain their causes, using 3D models—physical or digital. Always available and kind, highly recommended.",
      createTime: "2026-02-26T08:05:55.433307Z",
      updateTime: "2026-02-26T08:05:55.433307Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqkNuHsL2usZRzI-Hp5_b99j-GtqBabmOz2P2WkGxV4Gdx8S_vECunJaGy7gpn7BanQNdULYjA",
    },
    {
      reviewId:
        "AbFvOqnAaCJr7PtHIjMtibJMPiZ3k7lTkhhbhyHzoPrlPTpKkLtGoyUCAe_GSDNbJIwgmuVtgdmW",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/ALV-UjU3lML84fGX4aOMcOCEg6IubncVtB2g5ZNTqwO5fTMBlarxer8l=s120-c-rp-mo-br100",
        displayName: "Nannerl M.",
      },
      starRating: "FIVE",
      createTime: "2025-03-15T08:19:37.166526Z",
      updateTime: "2025-03-15T08:19:37.166526Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqnAaCJr7PtHIjMtibJMPiZ3k7lTkhhbhyHzoPrlPTpKkLtGoyUCAe_GSDNbJIwgmuVtgdmW",
    },
    {
      reviewId:
        "AbFvOqmNEpVK4XnPM0-ns6TfVurdW6ohlhLaB9AVJjfgal6LiJ-xs9yNQ7OwYb_QExofeOaSR-HO0Q",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocI2M_cv2SaTnjBYL2DBzex-Q8YLsohsOJz4Io_sbLL-1efL1w=s120-c-rp-mo-br100",
        displayName: "DARIO PABLO MARGIOTTA",
      },
      starRating: "FIVE",
      comment:
        "Ottimo professionale.\n\n(Translated by Google)\nExcellent professional.",
      createTime: "2023-06-06T21:49:31.937707Z",
      updateTime: "2023-06-06T21:50:45.354297Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqmNEpVK4XnPM0-ns6TfVurdW6ohlhLaB9AVJjfgal6LiJ-xs9yNQ7OwYb_QExofeOaSR-HO0Q",
    },
    {
      reviewId:
        "AbFvOqkTp_TkvEFEmcPk3e7VO3Hq3qR0X0ON9zvs2_ARD9Y2QTdKvbVHphdH-yxGNwu2AvXAC02gtQ",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/ALV-UjUgDu7-pu8ze0Na6QYINLmLOKfqQO7TXoLRra2qO2oul7pRA8el=s120-c-rp-mo-ba4-br100",
        displayName: "Louis Bennici",
      },
      starRating: "FIVE",
      comment:
        "Ottimo professionista ,preparato , ha risolto i miei problemi di schiena senza farmi male.da consigliare .\n\n(Translated by Google)\nExcellent professional, well-prepared, he solved my back problems without hurting me. Highly recommended.",
      createTime: "2023-02-25T18:48:54.612710Z",
      updateTime: "2023-02-25T18:48:54.612710Z",
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqkTp_TkvEFEmcPk3e7VO3Hq3qR0X0ON9zvs2_ARD9Y2QTdKvbVHphdH-yxGNwu2AvXAC02gtQ",
    },
    {
      reviewId:
        "AbFvOqn7caXzpCtel1-kyWOhevPk7-nxq2GZAnZhZ7u-GcyVTiKAX6oiprlunyqFkr95Lkvi4C6S8w",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a/ACg8ocJgn9TycNWVykPUR-fNORAPsL4epEVqHA7lLu0dA9dwo8C-6Q=s120-c-rp-mo-ba3-br100",
        displayName: "Cinzia di gregorio",
      },
      starRating: "FIVE",
      comment:
        "Ottimo persona e professionista preparato. Sa metterti a tuo agio , cosa importantissima. Non approfitta della situazione, e' molto onesto. Sicuramente consigliato\n\n(Translated by Google)\nExcellent person and well-prepared professional. He knows how to put you at ease, which is very important. He doesn't take advantage of the situation and is very honest. Highly recommended.",
      createTime: "2021-12-29T17:29:51.283369Z",
      updateTime: "2021-12-29T17:29:51.283369Z",
      reviewReply: {
        comment: "La ringrazio molto, sig.ra Di Gregorio.",
        updateTime: "2026-02-26T11:13:03.793641Z",
      },
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqn7caXzpCtel1-kyWOhevPk7-nxq2GZAnZhZ7u-GcyVTiKAX6oiprlunyqFkr95Lkvi4C6S8w",
    },
    {
      reviewId:
        "AbFvOqlhVS7LDyQVwOse6Djmlyh_QtLiRtKb-q2-VrdZtgGdGgRr1oRqYGySoFqnM0y1RPgylyHKeA",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/ALV-UjW1-MVdyPeOgBoE-zF_zP9UHyQl2s3DA2l6ra5s1K5NvVz3rWXH=s120-c-rp-mo-ba3-br100",
        displayName: "Erika Borghese",
      },
      starRating: "FIVE",
      comment:
        "Io e tutta la mia famiglia ci siamo recati per diversi problemi, dalla schiena alle mani, da ginocchia a piedi. Il dottore è super preparato, pronto ad ascoltare le tue esigenze e SOPRATTUTTO non approfitta in nessun modo del caso facendo più sedute del dovuto, tratta il cliente con cura e si vede che ha passione in quello che fa.\nConsigliatissimo!!!\n\n(Translated by Google)\nMy whole family and I have been here for a variety of issues, from backs to hands, knees to feet. The doctor is extremely knowledgeable, ready to listen to your needs, and MOST IMPORTANTLY, he doesn't take advantage of your case by requiring more sessions than necessary. He treats his clients with care, and you can tell he's passionate about what he does.\nHighly recommended!!!",
      createTime: "2021-11-11T12:32:59.778774Z",
      updateTime: "2021-11-11T12:32:59.778774Z",
      reviewReply: {
        comment:
          "Grazie della recensione!\nÈ stato un piacere conoscere lei e la sua famiglia, potendovi essere d’aiuto.",
        updateTime: "2021-11-11T12:46:42.994402Z",
      },
      name: "accounts/106180134107516084738/locations/10418942364394578892/reviews/AbFvOqlhVS7LDyQVwOse6Djmlyh_QtLiRtKb-q2-VrdZtgGdGgRr1oRqYGySoFqnM0y1RPgylyHKeA",
    },
  ],
  averageRating: 5,
  totalReviewCount: 13,
};

function Testimonials() {
    const { t } = useTranslation()

    const [canHover, setCanHover] = useState(false);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const media = window.matchMedia("(hover: hover)");
        setCanHover(media.matches);

        const listener = e => setCanHover(e.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, []);

    useEffect(() => {
        async function getReviews() {
            try {
                const revs = await axios.get("https://backend-gamma-kohl-94.vercel.app/api/reviews")
                setReviews(revs.data.reviews || defaultReviews.reviews);
            } catch (error) {
                setReviews(defaultReviews.reviews);
            }
        }
        getReviews()
    }, [])

    return(
        <div className='flex flex-col gap-12 py-12 px-6 dark:bg-dark-bg'>
            <h1 className='dark:text-white text-black text-center text-3xl font-bold font-Poppins underline underline-offset-4 decoration-cta-bg decoration-[5px]'>{t("view_home.testimonials.title")}</h1>
            <Marquee pauseOnHover={canHover} gradient={false} speed={25} autoFill={true} className='gap-8 p-5' >
                {   reviews &&
                    reviews.filter(review => review.comment)
                        .map((review, index) => (
                            <Card key={index} index={index} text={review.comment} author={review.reviewer.displayName} role={"Paziente verificato"} image={review.reviewer.profilePhotoUrl} />
                        ))
                }
            </Marquee>
        </div>
    )
}

export default Testimonials