# Litmus 🔥

## HACKATHON

## SUMMARY

Litmus is a decentralized voting platform for the issuance of on-chain experience and credentials. Currently there is no wasy way to prove that you are knowledgeable in a specific field unless you show a certification or diploma. And thers is no simple way to check if these certificates are correct. Additionally, traditional forms of certification and issuance of degres are expensive, centralized, and tend to focus on standardized testing which is not indicative of real world experience.
Litmus, a Web3 platform, revolutionizes education verification using NEAR Protocol and NEAR BOS. Users create secure online portfolios tied to NEAR wallets for decentralized skills validation. Certified judges vote on skills, incentivized with NEAR tokens. Litmus captures value through user fees, interest on judges' stakes, and potential data monetization. Strategic partnerships with NEAR Protocol, NEAR University, Brunel University, and the Mayor of London provide credibility. Litmus, a NEAR Protocol Hackathon winner, aims to raise £500k in its first pre-seed round for further development, emphasizing transparency and accuracy in skills assessment.

## BUILDING ON NEAR

In our submission, we utilized the sponsor tech, NEAR Protocol, and the NEAR Blockchain Operating System (NEAR BOS), as the foundational technology for Litmus, a decentralized voting platform focused on transforming education verification. Litmus leverages NEAR to create a secure and scalable environment for users to showcase their skills through an online portfolio connected to their NEAR wallet. The decentralized verification process involves a skills-based voting system where certified judges participate and are incentivized with NEAR tokens. The choice of NEAR was driven by its scalability, low transaction costs, energy efficiency, developer-friendly environment, security features, interoperability, and the support of an active community. By integrating NEAR's technology, Litmus aims to capture value through skills verification, incentivizing judges, user fees, interest from judges' stakes, data monetization, strategic partnerships, and market growth, ultimately addressing the need for accurate skills assessment in education and employment. The progress made in extensive research, strategic partnerships, a track record of success, and fundraising goals further demonstrate Litmus's commitment to its mission and potential for positive impact in the Web3 space.

## About Litmus:

Litmus is a decentralized voting platform for the issuance of on-chain experience and credentials. Currently there is no wasy way to prove that you are knowledgeable in a specific field unless you show a certification or diploma. And thers is no simple way to check if these certificates are correct. Additionally, traditional forms of certification and issuance of degres are expensive, centralized, and tend to focus on standardized testing which is not indicative of real world experience.


## How Does It Work

Users can now attain on chain credentials through decentralized voting groups. This leads to more accurate assesment of skills, more opportunities avaiable, and encourages the web3 ethos of decentralization.

Users login with their Near wallet, create an online portfolio/resume, then submit their resume (~2 NEAR) to a panel of certified judges that vote on whether they believe the candiate's skills are accurate.

Judges do not know each other, and they are incentivized to vote by rewarding them with NEAR. Judges are penalized if they abstain from voting too often or vote again st the majority over a period of time.

## How we built it
We built it together from user research through sending a survey to the NEARCON telegram group. We then interviewed individuals to ask their experiences in this area. We then made paper prototypes to test out our solutions and see how our audience reacts. We adjusted accordingly, iterated and 


For the NEAR JS SDK Documentation a lot of functions were not up to date making it difficult to figure out how to connect with the database.

Project Description: Litmus addresses the challenges present in the traditional education system, where degrees and certifications often do not accurately reflect an individual's true skills and abilities. It is becoming increasingly important to assess job candidates based on their actual skills rather than relying solely on formal education credentials. Litmus provides a solution to this problem by allowing users to showcase their skills and achievements through an online portfolio connected to their NEAR wallet.
How Litmus Captures Value:
Skills Verification: Litmus captures value by providing a platform for users to have their skills and qualifications verified by a panel of certified judges. These judges assess the accuracy of the information presented in users' portfolios. Users are willing to pay a fee to have their skills validated, especially if it increases their chances of landing a job or career advancement.

## What We Learned

We have learnt that we need to spend more time of the solution making, and start figuring out and pinning down the problems earlier. We learnt that there's a huge community there they can help us when we can start in coding - such as writing the smart contracts. The developer learnt how to use the NEAR JS SDK and Pagoda.

## Technologies Used

-NEAR Protocol Testnet
-Pagoda JS SDK for NEAR
-Vue.js+Nuxt+Tailwind CSS

## Build
```
# Frontend
cd dapp

yarn

yarn run dev

# Deploy contract
cd contract

yarn run build

yarn run deploy
```
