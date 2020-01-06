import React from 'react';

const hospitalsListOriginal = [
    {
        id: 1,
        name: 'Stanford Health Care-Stanford Hospital',
        phone: '(650) 723-4000',
        about: 'Stanford Health Care-Stanford Hospital in Stanford, CA is ranked No. 12 on the Best Hospitals Honor Roll. It is nationally ranked in 10 adult specialties and rated high performing in 4 adult specialties and 9 procedures and conditions. It is a general medical and surgical facility. It is a teaching hospital.',
        address: '300 Pasteur Dr, Stanford, CA 94305, United States',
        zipCode: ' 94305',
        state: ' United States',
        rating: 4.0,
        lat:'37.436115',
        lng: '-122.174324',
        doctorsList: [
            {
                name: 'Dr. Oliver Aalami, MD',
                proceduresTakeup: [
                    'Cataract ',
                    'Vascular Surgery'
                ],
                rating: 4.5,
                reviews: [
                    {
                        name: 'Joshua Cowley',
                        rating: 5.0,
                        reviewContent: 'Doctor saved my best friends life without a doubt. Absolutely incredible doctors and nurses in the cardiac icu. Words cannot express my appreciation. Thank you so much.'
                    },
                    {
                        name: 'John H',
                        rating: 2.0,
                        reviewContent: 'Although the quality of care I received on my short ER visit seems to have been decent, the billing system is exceptionally poor and completely lacks transparency. I am insured with pretty decent employer-based coverage.'
                    },
                    {
                        name: 'E.B. Scurry',
                        rating: 2.0,
                        reviewContent: 'Doctors care more about teaching than they care about treatment of patients. We did have several nurses in the 2C wing that were super. The nurses really went above and beyond helping during our time there.'
                    },
                    {
                        name: 'erika campos',
                        rating: 5.0,
                        reviewContent: 'I feel really blessed with the Stanford team they’re amazing, highly recommend this place they’re Angel’s.'
                    },
                    {
                        name: 'Steven Ritter',
                        rating: 4.0,
                        reviewContent: 'Not very pleased so far. Being able to communicate with Stanford by phone is very challenging. I have three medical problems that I am told two are urgent, yet Interventional Radiology can’t seem to schedule an appointment for a procedure, and I’ve been waiting four days now and not one word from them. I can’t even get them to answer the phone or return a message, it’s like they’re closed. Maybe Stanford isn’t a good choice.'
                    }
                ],
                aboutDoctor: 'Dr. Oliver Aalami is a vascular surgeon in Palo Alto, California and is affiliated with multiple hospitals in the area, including Stanford Health Care-Stanford Hospital and VA Palo Alto Health Care System. He received his medical degree from Boston University School of Medicine and has been in practice between 11-20 years. Dr. Aalami accepts several types of health insurance, listed below.'
            },
            {
                name: 'Dr. Gregory Magee, MD',
                proceduresTakeup: [
                    'Vascular Surgery'
                ],
                reviews: [
                    {
                        name: 'S Lewis',
                        rating: 1.0,
                        reviewContent: `Keep in mind this event took place inside of a hospital with sick people and germs everywhere. 

                        I have a unique perspective of having worked with these individuals temporarily.  I came to work a breakfast holiday event for the cancer center.   I've been in the industry 25 years and I have never encountered such unsafe food handling practices, impatient,  rude,  culturally clique-ishness and disorginization.
                        
                        The women who organized the event were a pack of "Karens" to the worst degree.  There wasn't enough food or supplies in a timely manner, no plan for execution, the "Karens" kept getting in the way and each of them would ask the same questions over and over.  Example:  the event was due to start at 7:30.  From 7:05 until 7:20 (when I eventually walked out the service area)  one of them came in to ask if it was ready every 10-30 seconds. 
                        
                        The person who was supposed to be in charge- Marcus, was m.I.a. for most of the event, leaving in charge a group of Latina girls who spoke mostly in Spanish to one another, didn't know what they were doing. 
                        
                        I watched The "Karens" put food service lids on the bare floor, touch food with their bare hands and completely ignore the dangerous environment of live food service to come and hover.over the workers like Gestapo. Served food. That should have been kept warm,  on a cold plate because they didn't.want to wait for the stern set-up. 
                        
                        If they are treating guest workers like trash and disregard food safety....what are they doing to the helpless people on their care.
                        
                        Oh, I also had to pay for parking which is bogus.`
                    },
                    {
                        name: 'William Manchisi',
                        rating: 4.0,
                        reviewContent: `Elon Musk wants to get to mars. I have no idea about genetics. You can only judge a book by its cover. I would never assault anybody. In phs biology class they dissected a frog.`
                    },
                    {
                        name: 'Sean S',
                        rating: 2.0,
                        reviewContent: `Very few Korean speaking doctors in the network. No Korean language provider in the language search filter. I would not recommend to Korean speaking community. Switching from Aetna Open Select to Anthem HMA..`
                    },
                    {
                        name: 'Katt',
                        rating: 2.0,
                        reviewContent: `Id give Stanford 5 Stars but they don't have a clinic in Gilroy, Morgan Hill area. An area that is sorely laking in medical services for their patients.  In general, care is very good. They have finally gotten Walk in clinics as sell as Express Care services.  It makes it a bit easier, but they still need a full clinic in Coyote Valley.`
                    }
                ],
                rating: 4.4,
                aboutDoctor: 'Dr. Gregory Magee is a vascular surgeon in Los Angeles, California and is affiliated with multiple hospitals in the area, including Keck Hospital of USC and LAC+USC Medical Center. He received his medical degree from Yale University School of Medicine and has been in practice between 11-20 years. He also speaks multiple languages, including Spanish.'
            },
            {
                name: 'Dr. Edmund Harris, MD',
                proceduresTakeup: [
                    'Vascular Surgery'
                ],
                reviews: [
                    {
                        name: 'Justin Lambert',
                        rating: 2.0,
                        reviewContent: `Absolutely awful. I gave them 2 stars because there are a handful of nurses who are amazing but I had to spend a week there after a major surgery. Hopefully surgery will heal okay. Regarding ortho drs, awful they rather teach then take care of patients. Maybe saw and heard from them once or twice. Trauma wanted to take a chest tube out bc they weren’t sure if it should or should they just wanted to try. A dr should make decisions with confidence. I made them one wait one more day. Most Olof nurses forgot to bring me medicine I had to call and remind them. And the communication between Drs was the worse. Trauma came in one morning And said they we’re waiting to discharge me because they wanted to see my final CT scans and XRays. I had to tell them that both were done the night before. They had no idea. Don’t go here!`
                    },
                    {
                        name: 'lydia polyzou',
                        rating: 2.0,
                        reviewContent: `I went to Stanford for an annual health exam and discussing some personal concerns. The service was high but I cannot say the same for the billing. My visit was charged as an Office visit which didn't meet my insurance's criteria to offer assistance. When I called their support and asked for guidance they said that they're charging all of the new patients an Office Visit even if it is preventative! On top they suggested that there is no way to file 2 separate claims for the preventative part of the service and that I should have known to have booked a separate appointment.
                        I thought that I would go again but I'm not sure anymore. The cost of the service was pretty high and after being treated so poorly I would expect even worse billing cases in the future.`
                    },
                    {
                        name: 'dibset',
                        rating: 2.0,
                        reviewContent: `Staff was very friendly, but the rooms were very uncomfortable. There was a single chair with no kind of accomodations for staying with my dad over night. Any guests that came to visit were constantly shifting in and out of the room due to size. No seating area for guests anywhere near our room and any area we chose to relax in was cramped and uncomfortable.`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Edmund Harris is a vascular surgeon in Stanford, California and is affiliated with multiple hospitals in the area, including Lucile Packard Children&apos;s Hospital Stanford and Stanford Health Care-Stanford Hospital. He received his medical degree from Saint Louis University School of Medicine and has been in practice for more than 20 years.'
            },
            {
                name: 'Dr. Jason Lee, MD',
                proceduresTakeup: [
                    'Vascular Surgery',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Bianca Mulaney',
                        rating: 1.0,
                        reviewContent: `Frustrated by Doctor's opaque billing practices. Care is very expensive and it is difficult to estimate how much it will cost beforehand (I was given an estimate for an office visit of "$150-800, but could be more or less" - not helpful at all!)`
                    },
                    {
                        name: 'Claire Hubel',
                        rating: 1.0,
                        reviewContent: `Stanford Hospital lost my friend's wallet and van keys during his stay, during a scrambled room change, in which it was carelessly dropped on the floor.  The wallet was allegedly placed in a safe, with a tracking number, but could not be located when my friend was discharged. The wallet contained everything, including his birth certificate, SS card, bank card, ID, etc. It also contained his address book with all his contacts. As a homeless individual, the loss of his van keys is the equivalent to the keys to his home. Also on this key ring were 3 small antique keys, which are the only things that my friend owned that had formerly belonged to his mother, and which can never be replaced. Stanford offered no help in finding these items, no compensation, no apology, and no concern. I cannot help but believe that if this had happened to myself or my husband, it would have been handled differently. But since it happened to someone who was homeless, no attempt was made to right this mistake. It has taken months of work and support to replace the wallet contents, but the antique keys and address book can never be recovered, which has caused my friend significant heartbreak. I was shocked and appalled at the lack of concern for this devastating incident.`
                    },
                    {
                        name: 'Jackie Aperi',
                        rating: 1.0,
                        reviewContent: `This is a review about Stanford Health Care in general. Basically, stay the hell away as it has extremely shady billing practices. I made an appointment over the phone, citing my annual free preventive check-up as the reason for my visit. I did the same thing at the office the day of my appointment and to the doctor. I was shocked to receive a bill about two weeks later for over $500. Because I was a first time patient, I was hit with a $441 'new patient' fee that my insurance barely covered. Stanford Health had ample opportunities to tell me I would be charged this fee: I could have been told when making the appointment on the phone or when I showed up to the appointment. Or they could put it on its website. But they kept it a secret and because I have never previously been charged such a fee (I'm 38 - this wasn't my first time visiting a doctor), I never thought to ask. On top of this fee, I was charged $200 for the five minutes it took to remove wax from one ear. Mind you, I was charged for both ears despite the fact the doctor said only one needed to be cleaned because the other was "only 25% blocked". I chalk this up to me not asking if it was covered but the 'new patient' fee is ridiculous. I appealed the 'new patient' fee to Stanford Health billing department but the woman there was incredibly rude and basically stated the charge will not change. Worse, this person stated that if I came in next year and got the same services, I wouldn't be charged meaning it's all semantics and has absolutely nothing to do with the services rendered. I appealed to my insurance (Blue Cross Blue Shield) to fight the fee but they also couldn't care less about patients. My last hope is the California Department of Managed Healthcare. Worse part...I told my wife to go here before the bill came so now we owe nearly $900 for two basic preventative visits. 

                        The care from the Stanford doctors is fine but it's not special in any way. Proceed with caution if you decide to go here and make sure you ask what you will be charged. I don't recommend this place at all.`
                    },
                    {
                        name: 'Chris Fallis',
                        rating: 5.0,
                        reviewContent: `Dr. Jason preformed a bilateral mastectomy in Nov. 2018.  She has been nothing but exceptional in all aspects of the pre and post surgery consultations.  Very patient and understanding of the difficulties that go along with this type of surgery.`
                    }
                ],
                rating: 2.5,
                aboutDoctor: 'Dr. Jason Lee is a vascular surgeon in Stanford, California and is affiliated with Stanford Health Care-Stanford Hospital. He received his medical degree from University of California San Diego School of Medicine and has been in practice between 11-20 years. Dr. Lee accepts several types of health insurance.'
            },
            {
                name: 'Dr. Rania Abbasi, MD',
                proceduresTakeup: [
                    'Anesthesiology',
                ],
                reviews: [
                    {
                        name: 'Roberta Kerr',
                        rating: 5.0,
                        reviewContent: `The best!.`
                    },
                    {
                        name: 'Luis Flores',
                        rating: 5.0,
                        reviewContent: `Excellent service friendly courteous doctor,caring.`
                    },
                    {
                        name: 'John Mejia',
                        rating: 5.0,
                        reviewContent: `Awesome friendly Doctor. Professional caring. fast check in. Starbucks coffee. Valet parking for a reasonable price. Great food in the cafeteria. Not a single negative thing to say.`
                    }
                ],
                rating: 5,
                aboutDoctor: 'Dr. Rania Abbasi is an anesthesiologist in Stanford, California and is affiliated with Stanford Health Care-Stanford Hospital. She received her medical degree from Indiana University School of Medicine and has been in practice between 6-10 years.'
            },
            {
                name: 'Dr. Ellen Wang, MD',
                proceduresTakeup: [
                    'Anesthesiology',
                ],
                reviews: [
                    {
                        name: 'Terri-Beth Simmons',
                        rating: 5.0,
                        reviewContent: `Well they have more than once saved my dads life. Hes been through some crazy extensive surgerical procedures taking up to 14 hours. His staff was always soft and friendly and kept up update about every hour. And helped us get into a private room which we were more than thankful to have for my mom. Amazingly talented people who run this hospital.`
                    },
                    {
                        name: 'Joshua Cabe Johnson',
                        rating: 5.0,
                        reviewContent: `The Doctor, communication, cleanliness, food, and everything else about this hospital are great. My wife and I spent 7 full days here after her total elbow replacement. Each and every single nurse that helped were so patient and helpful. The pain management team was very knowledgeable and creative to help my wife get her pain under control. The surgeon was a super hero. I can't say enough about this hospital. Even the maintenance crew had an attitude of excellence.`
                    },
                    {
                        name: 'Susan Robyn',
                        rating: 5.0,
                        reviewContent: `Great experience at Stanford Hospital this month. Excellent doctors and nurses and staff in neurosurgery and neurology. The neurosurgeon, anethesiologist, MRI staff were amazing.`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Ellen Wang is an anesthesiologist in Stanford, California and is affiliated with multiple hospitals in the area, including Lucile Packard Children&apos;s Hospital Stanford and Stanford Health Care-Stanford Hospital. She received her medical degree from University of California San Francisco School of Medicine and has been in practice between 11-20 years.'
            },
            {
                name: 'Dr. Timothy Angelotti, MD',
                proceduresTakeup: [
                    'Anesthesiology',
                ],
                reviews: [
                    {
                        name: 'TurQ_BLaDez',
                        rating: 1.0,
                        reviewContent: `I took my dad to emergency room for a stomach pain. He end up having a surgery to remove his gallstone. After the surgery he had a bile leak. They waited for three days to do a procedure to fix his bile leak.it’s been ten days  now and He is still in the hospital with more complications. I thought standford Hospital was the best.`
                    },
                    {
                        name: 'Avel Manansala',
                        rating: 5.0,
                        reviewContent: `Toured this hospital while it is under expansion and was impressed by its promise of being the most modern by the time it is fully finished by 2018. It will have almost 400 rooms by then with 2x emergency care capacity and 3x intensive care capacity. Awesome!`
                    },
                    {
                        name: 'Daniel Selden',
                        rating: 1.0,
                        reviewContent: `Although Stanford Hospital has many topnotch physicians, dealing with the bureaucracy there has become a nightmare.  To begin with, it is no longer possible to call any clinic or doctor directly.  All calls go to a central phone bank where operators take messages which they forward to the doctor or clinic in question who, they say, will get back to you within 24 hours.  Often they do not.  When you do manage to get an appointment, the follow-up is sub-par.  On one occasion, I had a procedure after which it took five weeks for them to communicate to me the results.  Since the tests came back within the week, I am at a loss to explain the delay after delay after delay until I was finally able to talk to the physician. On a Monday, I phoned in a formal complaint and the administrator said that he would have the doctor call me that afternoon.  He did not. Instead, the administrator called back on Tuesday morning to tell me that the doctor had called him and said that either he or his nurse would call me on Wednesday. I asked why, if the doctor could pick up the phone and call the complaints office, he couldn't have called me  as well. The administrator had no idea. On Wednesday, the nurse did call me and told me that the doctor would be calling me on Thursday between 9:30 and 11:00 AM.  I asked her why he couldn't call me that day, but she had no idea either.  Finally, at 11:15 on Thursday, the doctor did call, saying that he had tried calling me twice before--which is true--but I never called back.  I explained that he did not leave his number and that the call center would not give it to me.  He said, "Oh". So, in effect, it took four days of consistent pressure to get the news that the tests were all negative and that he would have to repeat the procedure.  I said fine, but asked whether it would take another four to five weeks to get the results again.  He said that hopefully things would go more swiftly this time.

                        I find this kind of treatment unacceptable.  Since I also use medical care in New York and Berlin, where I have always been able to reach my physician and gotten test results in a timely manner, I have some point of comparison.  Fifteen years ago, Stanford Hospital was user-friendly. Today it is a labyrinthine institution which does not serve the interests of its patients well.`
                    }
                ],
                rating: 2.5,
                aboutDoctor: 'Dr. Timothy Angelotti is an anesthesiologist in Palo Alto, California. He received his medical degree from University of Michigan Medical School and has been in practice for more than 20 years. Dr. Angelotti accepts several types of health insurance.'
            },
            {
                name: 'Dr. Creed Stary, MD',
                proceduresTakeup: [
                    'Anesthesiology',
                ],
                reviews: [
                    {
                        name: 'TurQ_BLaDez',
                        rating: 1.0,
                        reviewContent: `I took my dad to emergency room for a stomach pain. He end up having a surgery to remove his gallstone. After the surgery he had a bile leak. They waited for three days to do a procedure to fix his bile leak.it’s been ten days  now and He is still in the hospital with more complications. I thought standford Hospital was the best.`
                    },
                    {
                        name: 'Avel Manansala',
                        rating: 5.0,
                        reviewContent: `Toured this hospital while it is under expansion and was impressed by its promise of being the most modern by the time it is fully finished by 2018. It will have almost 400 rooms by then with 2x emergency care capacity and 3x intensive care capacity. Awesome!`
                    },
                    {
                        name: 'Daniel Selden',
                        rating: 1.0,
                        reviewContent: `Although Stanford Hospital has many topnotch physicians, dealing with the bureaucracy there has become a nightmare.  To begin with, it is no longer possible to call any clinic or doctor directly.  All calls go to a central phone bank where operators take messages which they forward to the doctor or clinic in question who, they say, will get back to you within 24 hours.  Often they do not.  When you do manage to get an appointment, the follow-up is sub-par.  On one occasion, I had a procedure after which it took five weeks for them to communicate to me the results.  Since the tests came back within the week, I am at a loss to explain the delay after delay after delay until I was finally able to talk to the physician. On a Monday, I phoned in a formal complaint and the administrator said that he would have the doctor call me that afternoon.  He did not. Instead, the administrator called back on Tuesday morning to tell me that the doctor had called him and said that either he or his nurse would call me on Wednesday. I asked why, if the doctor could pick up the phone and call the complaints office, he couldn't have called me  as well. The administrator had no idea. On Wednesday, the nurse did call me and told me that the doctor would be calling me on Thursday between 9:30 and 11:00 AM.  I asked her why he couldn't call me that day, but she had no idea either.  Finally, at 11:15 on Thursday, the doctor did call, saying that he had tried calling me twice before--which is true--but I never called back.  I explained that he did not leave his number and that the call center would not give it to me.  He said, "Oh". So, in effect, it took four days of consistent pressure to get the news that the tests were all negative and that he would have to repeat the procedure.  I said fine, but asked whether it would take another four to five weeks to get the results again.  He said that hopefully things would go more swiftly this time.

                        I find this kind of treatment unacceptable.  Since I also use medical care in New York and Berlin, where I have always been able to reach my physician and gotten test results in a timely manner, I have some point of comparison.  Fifteen years ago, Stanford Hospital was user-friendly. Today it is a labyrinthine institution which does not serve the interests of its patients well.`
                    }
                ],
                rating: 5,
                aboutDoctor: 'Dr. Creed Stary is an anesthesiologist in Palo Alto, California and is affiliated with Stanford Health Care-Stanford Hospital. He received his medical degree from University of California San Diego School of Medicine and has been in practice between 6-10 years.'
            },
            {
                name: 'Dr. Arman Abdalkhani, MD',
                proceduresTakeup: [
                    'Otolaryngology (ENT)',
                ],
                reviews: [
                    {
                        name: 'TurQ_BLaDez',
                        rating: 1.0,
                        reviewContent: `I took my dad to emergency room for a stomach pain. He end up having a surgery to remove his gallstone. After the surgery he had a bile leak. They waited for three days to do a procedure to fix his bile leak.it’s been ten days  now and He is still in the hospital with more complications. I thought standford Hospital was the best.`
                    },
                    {
                        name: 'Avel Manansala',
                        rating: 5.0,
                        reviewContent: `Toured this hospital while it is under expansion and was impressed by its promise of being the most modern by the time it is fully finished by 2018. It will have almost 400 rooms by then with 2x emergency care capacity and 3x intensive care capacity. Awesome!`
                    },
                    {
                        name: 'Daniel Selden',
                        rating: 1.0,
                        reviewContent: `Although Stanford Hospital has many topnotch physicians, dealing with the bureaucracy there has become a nightmare.  To begin with, it is no longer possible to call any clinic or doctor directly.  All calls go to a central phone bank where operators take messages which they forward to the doctor or clinic in question who, they say, will get back to you within 24 hours.  Often they do not.  When you do manage to get an appointment, the follow-up is sub-par.  On one occasion, I had a procedure after which it took five weeks for them to communicate to me the results.  Since the tests came back within the week, I am at a loss to explain the delay after delay after delay until I was finally able to talk to the physician. On a Monday, I phoned in a formal complaint and the administrator said that he would have the doctor call me that afternoon.  He did not. Instead, the administrator called back on Tuesday morning to tell me that the doctor had called him and said that either he or his nurse would call me on Wednesday. I asked why, if the doctor could pick up the phone and call the complaints office, he couldn't have called me  as well. The administrator had no idea. On Wednesday, the nurse did call me and told me that the doctor would be calling me on Thursday between 9:30 and 11:00 AM.  I asked her why he couldn't call me that day, but she had no idea either.  Finally, at 11:15 on Thursday, the doctor did call, saying that he had tried calling me twice before--which is true--but I never called back.  I explained that he did not leave his number and that the call center would not give it to me.  He said, "Oh". So, in effect, it took four days of consistent pressure to get the news that the tests were all negative and that he would have to repeat the procedure.  I said fine, but asked whether it would take another four to five weeks to get the results again.  He said that hopefully things would go more swiftly this time.

                        I find this kind of treatment unacceptable.  Since I also use medical care in New York and Berlin, where I have always been able to reach my physician and gotten test results in a timely manner, I have some point of comparison.  Fifteen years ago, Stanford Hospital was user-friendly. Today it is a labyrinthine institution which does not serve the interests of its patients well.`
                    }
                ],
                rating: 5,
                aboutDoctor: 'Dr. Arman Abdalkhani is an ENT-otolaryngologist in Palo Alto, California and is affiliated with multiple hospitals in the area, including El Camino Hospital and Stanford Health Care-Stanford Hospital. He received his medical degree from Indiana University School of Medicine and has been in practice between 11-20 years. Dr. Abdalkhani accepts several types of health insurance.'
            },
            {
                name: 'Dr. Uchechukwu Megwalu, MD',
                proceduresTakeup: [
                    'Otolaryngology (ENT)',
                ],
                reviews: [
                    {
                        name: 'TurQ_BLaDez',
                        rating: 1.0,
                        reviewContent: `I took my dad to emergency room for a stomach pain. He end up having a surgery to remove his gallstone. After the surgery he had a bile leak. They waited for three days to do a procedure to fix his bile leak.it’s been ten days  now and He is still in the hospital with more complications. I thought standford Hospital was the best.`
                    },
                    {
                        name: 'Avel Manansala',
                        rating: 5.0,
                        reviewContent: `Toured this hospital while it is under expansion and was impressed by its promise of being the most modern by the time it is fully finished by 2018. It will have almost 400 rooms by then with 2x emergency care capacity and 3x intensive care capacity. Awesome!`
                    },
                    {
                        name: 'Daniel Selden',
                        rating: 1.0,
                        reviewContent: `Although Stanford Hospital has many topnotch physicians, dealing with the bureaucracy there has become a nightmare.  To begin with, it is no longer possible to call any clinic or doctor directly.  All calls go to a central phone bank where operators take messages which they forward to the doctor or clinic in question who, they say, will get back to you within 24 hours.  Often they do not.  When you do manage to get an appointment, the follow-up is sub-par.  On one occasion, I had a procedure after which it took five weeks for them to communicate to me the results.  Since the tests came back within the week, I am at a loss to explain the delay after delay after delay until I was finally able to talk to the physician. On a Monday, I phoned in a formal complaint and the administrator said that he would have the doctor call me that afternoon.  He did not. Instead, the administrator called back on Tuesday morning to tell me that the doctor had called him and said that either he or his nurse would call me on Wednesday. I asked why, if the doctor could pick up the phone and call the complaints office, he couldn't have called me  as well. The administrator had no idea. On Wednesday, the nurse did call me and told me that the doctor would be calling me on Thursday between 9:30 and 11:00 AM.  I asked her why he couldn't call me that day, but she had no idea either.  Finally, at 11:15 on Thursday, the doctor did call, saying that he had tried calling me twice before--which is true--but I never called back.  I explained that he did not leave his number and that the call center would not give it to me.  He said, "Oh". So, in effect, it took four days of consistent pressure to get the news that the tests were all negative and that he would have to repeat the procedure.  I said fine, but asked whether it would take another four to five weeks to get the results again.  He said that hopefully things would go more swiftly this time.

                        I find this kind of treatment unacceptable.  Since I also use medical care in New York and Berlin, where I have always been able to reach my physician and gotten test results in a timely manner, I have some point of comparison.  Fifteen years ago, Stanford Hospital was user-friendly. Today it is a labyrinthine institution which does not serve the interests of its patients well.`
                    }
                ],
                rating: 2.5,
                aboutDoctor: 'Dr. Uchechukwu Megwalu is an ENT-otolaryngologist in Stanford, California and is affiliated with Stanford Health Care-Stanford Hospital. He received his medical degree from Washington University School of Medicine in St. Louis and has been in practice between 11-20 years.'
            },
            {
                name: 'Dr. Anna Messner, MD',
                proceduresTakeup: [
                    'Otolaryngology (ENT)',
                ],
                reviews: [
                    {
                        name: 'TurQ_BLaDez',
                        rating: 1.0,
                        reviewContent: `I took my dad to emergency room for a stomach pain. He end up having a surgery to remove his gallstone. After the surgery he had a bile leak. They waited for three days to do a procedure to fix his bile leak.it’s been ten days  now and He is still in the hospital with more complications. I thought standford Hospital was the best.`
                    },
                    {
                        name: 'Avel Manansala',
                        rating: 5.0,
                        reviewContent: `Toured this hospital while it is under expansion and was impressed by its promise of being the most modern by the time it is fully finished by 2018. It will have almost 400 rooms by then with 2x emergency care capacity and 3x intensive care capacity. Awesome!`
                    },
                    {
                        name: 'Daniel Selden',
                        rating: 1.0,
                        reviewContent: `Although Stanford Hospital has many topnotch physicians, dealing with the bureaucracy there has become a nightmare.  To begin with, it is no longer possible to call any clinic or doctor directly.  All calls go to a central phone bank where operators take messages which they forward to the doctor or clinic in question who, they say, will get back to you within 24 hours.  Often they do not.  When you do manage to get an appointment, the follow-up is sub-par.  On one occasion, I had a procedure after which it took five weeks for them to communicate to me the results.  Since the tests came back within the week, I am at a loss to explain the delay after delay after delay until I was finally able to talk to the physician. On a Monday, I phoned in a formal complaint and the administrator said that he would have the doctor call me that afternoon.  He did not. Instead, the administrator called back on Tuesday morning to tell me that the doctor had called him and said that either he or his nurse would call me on Wednesday. I asked why, if the doctor could pick up the phone and call the complaints office, he couldn't have called me  as well. The administrator had no idea. On Wednesday, the nurse did call me and told me that the doctor would be calling me on Thursday between 9:30 and 11:00 AM.  I asked her why he couldn't call me that day, but she had no idea either.  Finally, at 11:15 on Thursday, the doctor did call, saying that he had tried calling me twice before--which is true--but I never called back.  I explained that he did not leave his number and that the call center would not give it to me.  He said, "Oh". So, in effect, it took four days of consistent pressure to get the news that the tests were all negative and that he would have to repeat the procedure.  I said fine, but asked whether it would take another four to five weeks to get the results again.  He said that hopefully things would go more swiftly this time.

                        I find this kind of treatment unacceptable.  Since I also use medical care in New York and Berlin, where I have always been able to reach my physician and gotten test results in a timely manner, I have some point of comparison.  Fifteen years ago, Stanford Hospital was user-friendly. Today it is a labyrinthine institution which does not serve the interests of its patients well.`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Anna Messner is an ENT-otolaryngologist in Palo Alto, California and is affiliated with multiple hospitals in the area, including Lucile Packard Children&apos;s Hospital Stanford and Stanford Health Care-Stanford Hospital. She received her medical degree from Wake Forest School of Medicine and has been in practice for more than 20 years. Dr. Messner accepts several types of health insurance.'
            },
            {
                name: 'Dr. Peter Hwang, MD',
                proceduresTakeup: [
                    'Otolaryngology (ENT)',
                ],
                reviews: [
                    {
                        name: 'TurQ_BLaDez',
                        rating: 1.0,
                        reviewContent: `I took my dad to emergency room for a stomach pain. He end up having a surgery to remove his gallstone. After the surgery he had a bile leak. They waited for three days to do a procedure to fix his bile leak.it’s been ten days  now and He is still in the hospital with more complications. I thought standford Hospital was the best.`
                    },
                    {
                        name: 'Avel Manansala',
                        rating: 5.0,
                        reviewContent: `Toured this hospital while it is under expansion and was impressed by its promise of being the most modern by the time it is fully finished by 2018. It will have almost 400 rooms by then with 2x emergency care capacity and 3x intensive care capacity. Awesome!`
                    },
                    {
                        name: 'Daniel Selden',
                        rating: 1.0,
                        reviewContent: `Although Stanford Hospital has many topnotch physicians, dealing with the bureaucracy there has become a nightmare.  To begin with, it is no longer possible to call any clinic or doctor directly.  All calls go to a central phone bank where operators take messages which they forward to the doctor or clinic in question who, they say, will get back to you within 24 hours.  Often they do not.  When you do manage to get an appointment, the follow-up is sub-par.  On one occasion, I had a procedure after which it took five weeks for them to communicate to me the results.  Since the tests came back within the week, I am at a loss to explain the delay after delay after delay until I was finally able to talk to the physician. On a Monday, I phoned in a formal complaint and the administrator said that he would have the doctor call me that afternoon.  He did not. Instead, the administrator called back on Tuesday morning to tell me that the doctor had called him and said that either he or his nurse would call me on Wednesday. I asked why, if the doctor could pick up the phone and call the complaints office, he couldn't have called me  as well. The administrator had no idea. On Wednesday, the nurse did call me and told me that the doctor would be calling me on Thursday between 9:30 and 11:00 AM.  I asked her why he couldn't call me that day, but she had no idea either.  Finally, at 11:15 on Thursday, the doctor did call, saying that he had tried calling me twice before--which is true--but I never called back.  I explained that he did not leave his number and that the call center would not give it to me.  He said, "Oh". So, in effect, it took four days of consistent pressure to get the news that the tests were all negative and that he would have to repeat the procedure.  I said fine, but asked whether it would take another four to five weeks to get the results again.  He said that hopefully things would go more swiftly this time.

                        I find this kind of treatment unacceptable.  Since I also use medical care in New York and Berlin, where I have always been able to reach my physician and gotten test results in a timely manner, I have some point of comparison.  Fifteen years ago, Stanford Hospital was user-friendly. Today it is a labyrinthine institution which does not serve the interests of its patients well.`
                    }
                ],
                rating: 4.5,
                aboutDoctor: 'Dr. Peter Hwang is an ENT-otolaryngologist in Palo Alto, California and is affiliated with multiple hospitals in the area, including Lucile Packard Children&apos;s Hospital Stanford and Stanford Health Care-Stanford Hospital. He received his medical degree from University of California San Francisco School of Medicine and has been in practice for more than 20 years. Dr. Hwang accepts several types of health insurance.'
            }
        ]
    },
    {
        id: 2,
        name: 'El Camino Hospital',
        phone: '(650) 940-7000',
        about: 'El Camino Hospital in Mountain View, CA is rated high performing in 1 adult specialty and 7 procedures and conditions. It is a general medical and surgical facility.',
        address: '2500 Grant Rd, Mountain View, CA 94040, United States',
        zipCode: ' 94040',
        rating: 3.0,
        lat: '37.369106',
        lng: '-122.080182',
        doctorsList: [
            {
                name: 'Dr. Elizabeth Abel, MD',
                proceduresTakeup: [
                    'Abdominal Aortic Aneurysm Repair',
                    'Aortic Valve Surgery',
                    'Colon Cancer Surgery',
                    'Knee Replacement',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Gulia I.',
                        rating: 5.0,
                        reviewContent: `I writing to say my thank you to the Emergency room specialist for their professionalism, empathy and care about patients. I came to ER with food poisoned and they did my tests very fast, explained me everything, gave me not only receipt but also instructions how to take care of my health - in English and in my native language! They were very kind and attentive to everyone who was seated with me in the ER yesterday.  Thank you so much for your hard work!`
                    },
                    {
                        name: 'Joey Weitz',
                        rating: 5.0,
                        reviewContent: `Absolutely rethink your decision if you’re about to have a baby here. The lack of professionalism, empathy, and follow through on commitments is abysmal. Nothing like almost to having your baby delivered onto the floor and a nurse thinking that your wife is not in labor yet, yet having contractions consistently for a couple of hours. I can’t say enough about how disappointing our last child’s birth experience was here. After you have the child they seem to care for a bit but soon after shove you off and basically say sorry, not sorry. Promises were made by senior level managers to offer post natal care, billing concerns, along with many other accommodations.  After playing ball for several months with their department leadership, we are just forgotten about and disregarded like nothing bad ever happened. They are lucky that I was paying attention during the delivery of my son and that I noticed she was about to give birth, because the professionals in and out of the room didn’t care at all or were too incompetent to perform the basic duties of a delivery nurse. Again, this place has gone severely downhill over the last few years and I can’t recommend enough that you look elsewhere. ***update 8/19:  They decided to send us to collections even though the original plan was to not have any charges. What’s that oath...?  Do no harm?  These guys are just horrible. Recommend anywhere but here.`
                    },
                    {
                        name: 'Isela Drews',
                        rating: 1.0,
                        reviewContent: `I almost chickened out....I was the most nervous person about this procedure.
                        And wow  - SHOCK!  I am SO amazingly happy, lying here 30 hours post- op after total hip replacement, reflecting & absorbing it all.  I know what your thinking ( she's high on meds ) but no - Dude, I am walking! !!!!  I mean I limped for 1 1/2 years - badly with cane 1 year.   After surgery was over my ( handsome & Rock Star surgeon Dr. Yamimoto) said he was surprised that I could even walk before.  You know how you have pain- and deal when its all the time? Well, I kinda was.  A relative really who knows me and how active I am. told me it killed her to see me lying down so much.  She strongly urged me....so after 'interviewing' like 4 Surgeon later....(between Santa Cruz & San Jose), I found Dr. Yamimoto on Yelp!   He was tied into El Camino hospital which I wanted and is part of PAMF-  and I could tell immediately he was very sharp & nice!!  
                        Getting back to Hospital review...they have been so nice & so accommodating.  I have liked ALL my nurses & initially at the rush. - rush at 6:00am when we arrived it was a little chaotic,  but I give 'em props for efficiency, organization & humor.
                        Hey- they even let me pick my music choice in pre-op.
                        The Assisting nurse not only new Green Day- but all words to American Idiot-
                        Rock On El Camino!!!`
                    }
                ],
                rating: 2.5,
                aboutDoctor: 'Dr. Elizabeth Abel is a Surgeon in Mountain View, California and is affiliated with multiple hospitals in the area, including El Camino Hospital and VA Palo Alto Health Care System. She received her medical degree from University of Maryland School of Medicine and has been in practice for more than 20 years.'
            },
            {
                name: 'Dr. Jill Ackerman, MD',
                proceduresTakeup: [
                    'Lung Cancer Surgery'
                ],
                reviews: [
                    {
                        name: 'Gulia I.',
                        rating: 5.0,
                        reviewContent: `I writing to say my thank you to the Emergency room specialist for their professionalism, empathy and care about patients. I came to ER with food poisoned and they did my tests very fast, explained me everything, gave me not only receipt but also instructions how to take care of my health - in English and in my native language! They were very kind and attentive to everyone who was seated with me in the ER yesterday.  Thank you so much for your hard work!`
                    },
                    {
                        name: 'Joey Weitz',
                        rating: 5.0,
                        reviewContent: `Absolutely rethink your decision if you’re about to have a baby here. The lack of professionalism, empathy, and follow through on commitments is abysmal. Nothing like almost to having your baby delivered onto the floor and a nurse thinking that your wife is not in labor yet, yet having contractions consistently for a couple of hours. I can’t say enough about how disappointing our last child’s birth experience was here. After you have the child they seem to care for a bit but soon after shove you off and basically say sorry, not sorry. Promises were made by senior level managers to offer post natal care, billing concerns, along with many other accommodations.  After playing ball for several months with their department leadership, we are just forgotten about and disregarded like nothing bad ever happened. They are lucky that I was paying attention during the delivery of my son and that I noticed she was about to give birth, because the professionals in and out of the room didn’t care at all or were too incompetent to perform the basic duties of a delivery nurse. Again, this place has gone severely downhill over the last few years and I can’t recommend enough that you look elsewhere. ***update 8/19:  They decided to send us to collections even though the original plan was to not have any charges. What’s that oath...?  Do no harm?  These guys are just horrible. Recommend anywhere but here.`
                    },
                    {
                        name: 'Isela Drews',
                        rating: 1.0,
                        reviewContent: `I almost chickened out....I was the most nervous person about this procedure.
                        And wow  - SHOCK!  I am SO amazingly happy, lying here 30 hours post- op after total hip replacement, reflecting & absorbing it all.  I know what your thinking ( she's high on meds ) but no - Dude, I am walking! !!!!  I mean I limped for 1 1/2 years - badly with cane 1 year.   After surgery was over my ( handsome & Rock Star surgeon Dr. Yamimoto) said he was surprised that I could even walk before.  You know how you have pain- and deal when its all the time? Well, I kinda was.  A relative really who knows me and how active I am. told me it killed her to see me lying down so much.  She strongly urged me....so after 'interviewing' like 4 Surgeon later....(between Santa Cruz & San Jose), I found Dr. Yamimoto on Yelp!   He was tied into El Camino hospital which I wanted and is part of PAMF-  and I could tell immediately he was very sharp & nice!!  
                        Getting back to Hospital review...they have been so nice & so accommodating.  I have liked ALL my nurses & initially at the rush. - rush at 6:00am when we arrived it was a little chaotic,  but I give 'em props for efficiency, organization & humor.
                        Hey- they even let me pick my music choice in pre-op.
                        The Assisting nurse not only new Green Day- but all words to American Idiot-
                        Rock On El Camino!!!`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Jill Ackerman is an Surgeon in Irvine, California and is affiliated with El Camino Hospital. She received her medical degree from Stanford University School of Medicine and has been in practice for more than 20 years.'
            }
        ]
    },
    {
        id: 3,
        name: 'Kaiser Permanente Santa Clara Medical Center',
        phone: '(408) 851-1000',
        about: 'Kaiser Permanente Santa Clara Medical Center in Santa Clara, CA is rated high performing in 6 adult procedures and conditions. It is a general medical and surgical facility.',
        address: '1263 E Arques Ave, Sunnyvale, CA 94085, United States',
        zipCode: ' 94085',
        rating: 3.9,
        lat: '37.336036',
        lng: '-121.998924',
        doctorsList: [
            {
                name: 'Dr. Sirtaz Adatya, MD',
                proceduresTakeup: [
                    'Heart Failure',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Jean Vilmenay',
                        rating: 4.0,
                        reviewContent: `The staff has been very good to our family, taking time to explain everything to us and helping/freeing us to make the right decisions for our family. The nursing staff has taken incredible care of our loved one for the most part. 

                        There have been a few issues which were addressed and resolved well! They have been very respectful and responsive to our needs. 
                        
                        It's been a good experience in a difficult time overall for our family and loved one. The team of doctors assembled to care for her is overwhelming! Their ability to work together and remain on the same page is impressive. The rapid response team are poetry in motion! 
                        
                        We have been in good hands overall...`
                    },
                    {
                        name: 'Joshua Ebonrose',
                        rating: 5.0,
                        reviewContent: `I am very pleased by the care the doctors at this facility provide.  I have always been listened to and I have always felt like my health mattered to them.  I will continue to keep coming back, for sure.  The facility is clean and there are plenty of sanitation stations, as well as the flu masks, should you feel the need to use them.`
                    },
                    {
                        name: 'Lawrence Marwong',
                        rating: 1.0,
                        reviewContent: `Been in Kaiser system my whole life. All my kids were born at Kaiser hospital, extended family is with Kaiser, no complaints what so ever. In fact I hear more complaints about co-workers having issue with their PPO provider. Then when I toot the lack of paperwork and great service that Kaiser gives my coworkers are usually surprised. Unfortunately I Kaiser gets lumped in with other HMOs and unfairly gets a bad rap. Only issue I have is limited number of primary care doctors who are male. I'm old school, I feel more comfortable talking with a guy about my man parts..okay, maybe I'm just old 😜`
                    }
                ],
                rating: 4.5,
                aboutDoctor: 'Dr. Sirtaz Adatya is a cardiologist in Santa Clara, California and is affiliated with multiple hospitals in the area, including Kaiser Permanente Santa Clara Medical Center and University of Chicago Medical Center. He received his medical degree from Ross University School of Medicine and has been in practice between 11-20 years.'
            },
            {
                name: 'Dr. Sandeep Ahluwalia, MD',
                proceduresTakeup: [
                    'Hip Replacement'
                ],
                reviews: [
                    {
                        name: 'Jean Vilmenay',
                        rating: 4.0,
                        reviewContent: `The staff has been very good to our family, taking time to explain everything to us and helping/freeing us to make the right decisions for our family. The nursing staff has taken incredible care of our loved one for the most part. 

                        There have been a few issues which were addressed and resolved well! They have been very respectful and responsive to our needs. 
                        
                        It's been a good experience in a difficult time overall for our family and loved one. The team of doctors assembled to care for her is overwhelming! Their ability to work together and remain on the same page is impressive. The rapid response team are poetry in motion! 
                        
                        We have been in good hands overall...`
                    },
                    {
                        name: 'Joshua Ebonrose',
                        rating: 5.0,
                        reviewContent: `I am very pleased by the care the doctors at this facility provide.  I have always been listened to and I have always felt like my health mattered to them.  I will continue to keep coming back, for sure.  The facility is clean and there are plenty of sanitation stations, as well as the flu masks, should you feel the need to use them.`
                    },
                    {
                        name: 'Lawrence Marwong',
                        rating: 1.0,
                        reviewContent: `Been in Kaiser system my whole life. All my kids were born at Kaiser hospital, extended family is with Kaiser, no complaints what so ever. In fact I hear more complaints about co-workers having issue with their PPO provider. Then when I toot the lack of paperwork and great service that Kaiser gives my coworkers are usually surprised. Unfortunately I Kaiser gets lumped in with other HMOs and unfairly gets a bad rap. Only issue I have is limited number of primary care doctors who are male. I'm old school, I feel more comfortable talking with a guy about my man parts..okay, maybe I'm just old 😜`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Sandeep Ahluwalia is a radiologist in Stockton, California and is affiliated with multiple hospitals in the area, including Kaiser Permanente Modesto and Manteca Medical Centers and Kaiser Permanente Santa Clara Medical Center. He received his medical degree from Medical College of Wisconsin and has been in practice between 11-20 years.'
            }
        ]
    },
    {
        id: 4,
        name: 'Regional Medical Center of San Jose',
        phone: '(408) 259-5000',
        about: 'Regional Medical Center of San Jose in San Jose, CA is rated high performing in 2 adult procedures and conditions. It is a general medical and surgical facility.',
        address: '225 N Jackson Ave, San Jose, CA 95116, United States',
        zipCode: ' 95116',
        rating: 3.6,
        lat: '37.363063',
        lng: '-121.849774',
        doctorsList: [
            {
                name: 'Dr. Manoj Agarwal, MD',
                proceduresTakeup: [
                    'Colon Cancer Surgery'
                ],
                reviews: [
                    {
                        name: 'Jackie Brongiel',
                        rating: 5.0,
                        reviewContent: `My husband entered ER at 7:30pm .  They took him in immediately. By 1:30pm he was admitted in to the Hospital.   After an 8 day stay he was released.   All test were taken and he is now following up with his own doctors.  Great caring and very thorough follow through the nurses. doctors were GREAT, THANK YOU VERY MUCH FOR CARING FOR MY husband!`
                    },
                    {
                        name: 'Danny Juco Arimboanga',
                        rating: 5.0,
                        reviewContent: `I accompanied my 96 years old Dad to the Imaging Center. The Registration process was smooth and the representative was using an iPad. She was very friendly and professional. After registration, an awesome over 70 years old volunteer who was working alone that day, 9/9 wheeled my Dad from the main registration to the Imaging Center. The Imaging process was excellent, the Ultrasound Tech.was friendly, very professional and also took the time to communicate with my Dad who was hard of hearing. She explained to us what she was doing and allowed for a seamless procedure. 

                        Today, 9/19, my Dad and I returned to the Imaging Center to obtain a copy of the Ultrasound results as well as the images. Keith in Imaging was awesome. He was very helpful, professional and completed the process in less than 10 minutes. 
                        
                        I am extremely happy with all the various processes at Regional Medical Center of San Jose. Keep up the great work and the awesome professionalism that every member of the team demonstrates! I am extremely impressed! 👍👍👍👍👍`
                    },
                    {
                        name: 'Sarah Steele',
                        rating: 5.0,
                        reviewContent: `The staff at the RMC were absolutely amazing. So kind and caring. The did everything they could to make my stay pleasant. Thank your so much for everything!`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Manoj Agarwal is an oncologist in San Jose, California and is affiliated with multiple hospitals in the area, including Good Samaritan Hospital-San Jose and O&apos;Connor Hospital-San Jose. He received his medical degree from Christian Medical College Vellore and has been in practice for more than 20 years. Dr. Agarwal accepts several types of health insurance, listed below. He also speaks multiple languages, including Hindi.'
            },
            {
                name: 'Dr. Sanjay Agarwal, MD',
                proceduresTakeup: [
                    'Lung Cancer Surgery',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Jackie Brongiel',
                        rating: 5.0,
                        reviewContent: `My husband entered ER at 7:30pm .  They took him in immediately. By 1:30pm he was admitted in to the Hospital.   After an 8 day stay he was released.   All test were taken and he is now following up with his own doctors.  Great caring and very thorough follow through the nurses. doctors were GREAT, THANK YOU VERY MUCH FOR CARING FOR MY husband!`
                    },
                    {
                        name: 'Danny Juco Arimboanga',
                        rating: 5.0,
                        reviewContent: `I accompanied my 96 years old Dad to the Imaging Center. The Registration process was smooth and the representative was using an iPad. She was very friendly and professional. After registration, an awesome over 70 years old volunteer who was working alone that day, 9/9 wheeled my Dad from the main registration to the Imaging Center. The Imaging process was excellent, the Ultrasound Tech.was friendly, very professional and also took the time to communicate with my Dad who was hard of hearing. She explained to us what she was doing and allowed for a seamless procedure. 

                        Today, 9/19, my Dad and I returned to the Imaging Center to obtain a copy of the Ultrasound results as well as the images. Keith in Imaging was awesome. He was very helpful, professional and completed the process in less than 10 minutes. 
                        
                        I am extremely happy with all the various processes at Regional Medical Center of San Jose. Keep up the great work and the awesome professionalism that every member of the team demonstrates! I am extremely impressed! 👍👍👍👍👍`
                    },
                    {
                        name: 'Sarah Steele',
                        rating: 5.0,
                        reviewContent: `The staff at the RMC were absolutely amazing. So kind and caring. The did everything they could to make my stay pleasant. Thank your so much for everything!`
                    }
                ],
                rating: 4.5,
                aboutDoctor: 'Dr. Sanjay Agarwal is a pulmonologist in Milpitas, California and is affiliated with multiple hospitals in the area, including El Camino Hospital and Good Samaritan Hospital-San Jose. He received his medical degree from Bangalore Medical College and has been in practice for more than 20 years. Dr. Agarwal accepts several types of health insurance, listed below. He also speaks multiple languages, including Spanish, Hindi, Kannada, Punjabi and Urdu.'
            },
            {
                name: 'Dr. Sangeetha Balasubramanian, MD',
                proceduresTakeup: [
                    'Chronic Obstructive Pulmonary Disease (COPD)',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Jackie Brongiel',
                        rating: 5.0,
                        reviewContent: `My husband entered ER at 7:30pm .  They took him in immediately. By 1:30pm he was admitted in to the Hospital.   After an 8 day stay he was released.   All test were taken and he is now following up with his own doctors.  Great caring and very thorough follow through the nurses. doctors were GREAT, THANK YOU VERY MUCH FOR CARING FOR MY husband!`
                    },
                    {
                        name: 'Danny Juco Arimboanga',
                        rating: 5.0,
                        reviewContent: `I accompanied my 96 years old Dad to the Imaging Center. The Registration process was smooth and the representative was using an iPad. She was very friendly and professional. After registration, an awesome over 70 years old volunteer who was working alone that day, 9/9 wheeled my Dad from the main registration to the Imaging Center. The Imaging process was excellent, the Ultrasound Tech.was friendly, very professional and also took the time to communicate with my Dad who was hard of hearing. She explained to us what she was doing and allowed for a seamless procedure. 

                        Today, 9/19, my Dad and I returned to the Imaging Center to obtain a copy of the Ultrasound results as well as the images. Keith in Imaging was awesome. He was very helpful, professional and completed the process in less than 10 minutes. 
                        
                        I am extremely happy with all the various processes at Regional Medical Center of San Jose. Keep up the great work and the awesome professionalism that every member of the team demonstrates! I am extremely impressed! 👍👍👍👍👍`
                    },
                    {
                        name: 'Sarah Steele',
                        rating: 5.0,
                        reviewContent: `The staff at the RMC were absolutely amazing. So kind and caring. The did everything they could to make my stay pleasant. Thank your so much for everything!`
                    }
                ],
                rating: 4.5,
                aboutDoctor: 'Dr. Sangeetha Balasubramanian is a rheumatologist in Campbell, California and is affiliated with multiple hospitals in the area, including Good Samaritan Hospital-San Jose and O&apos;Connor Hospital-San Jose. She received her medical degree from Bangalore Medical College and has been in practice between 11-20 years.'
            },
            {
                name: 'Dr. Kenneth Blumenfeld, MD',
                proceduresTakeup: [
                    'Abdominal Aortic Aneurysm Repair'
                ],
                reviews: [
                    {
                        name: 'Jackie Brongiel',
                        rating: 5.0,
                        reviewContent: `My husband entered ER at 7:30pm .  They took him in immediately. By 1:30pm he was admitted in to the Hospital.   After an 8 day stay he was released.   All test were taken and he is now following up with his own doctors.  Great caring and very thorough follow through the nurses. doctors were GREAT, THANK YOU VERY MUCH FOR CARING FOR MY husband!`
                    },
                    {
                        name: 'Danny Juco Arimboanga',
                        rating: 5.0,
                        reviewContent: `I accompanied my 96 years old Dad to the Imaging Center. The Registration process was smooth and the representative was using an iPad. She was very friendly and professional. After registration, an awesome over 70 years old volunteer who was working alone that day, 9/9 wheeled my Dad from the main registration to the Imaging Center. The Imaging process was excellent, the Ultrasound Tech.was friendly, very professional and also took the time to communicate with my Dad who was hard of hearing. She explained to us what she was doing and allowed for a seamless procedure. 

                        Today, 9/19, my Dad and I returned to the Imaging Center to obtain a copy of the Ultrasound results as well as the images. Keith in Imaging was awesome. He was very helpful, professional and completed the process in less than 10 minutes. 
                        
                        I am extremely happy with all the various processes at Regional Medical Center of San Jose. Keep up the great work and the awesome professionalism that every member of the team demonstrates! I am extremely impressed! 👍👍👍👍👍`
                    },
                    {
                        name: 'Sarah Steele',
                        rating: 5.0,
                        reviewContent: `The staff at the RMC were absolutely amazing. So kind and caring. The did everything they could to make my stay pleasant. Thank your so much for everything!`
                    }
                ],
                rating: 2.5,
                aboutDoctor: 'Dr. Kenneth Blumenfeld is a neurosurgeon in San Jose, California and is affiliated with multiple hospitals in the area, including El Camino Hospital and Good Samaritan Hospital-San Jose. He received his medical degree from Johns Hopkins University School of Medicine and has been in practice for more than 20 years.'
            }
        ]
    },
    {
        id: 5,
        name: 'Hazel Hawkins Memorial Hospital',
        phone: '(831) 637-5711',
        about: 'Hazel Hawkins Memorial Hospital in Hollister, CA is a general medical and surgical facility.',
        address: '911 Sunset Dr, Hollister, CA 95023, United States',
        zipCode: ' 95023',
        rating: 2.6,
        lat: '36.834953',
        lng: '-121.386581',
        doctorsList: [
            {
                name: 'Dr. Zareen Amin, DO',
                proceduresTakeup: [
                    'Chronic Obstructive Pulmonary Disease (COPD)',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Cowgirl Sherri',
                        rating: 5.0,
                        reviewContent: `I went in for a same day procedure,  and I had the best group of people taking care of me. Alice brought me back, and she explained everything that she was doing and what would be happening.  I was very relaxed, by the time I was ready to go back. Dr. Martinez stopped by and made sure I was ready, then Gaby came next and talked with me. Then Victor stopped by and said Hi, letting me know what he would be doing. Then Nicole came and whisked me back to the procedure room. All of them were friendly, and a fun group to have taking care of me. There where two more that were there Mandie and Theresa, but I don't think I was awake at that time. 😁  All in all, everything went well and I highly recommend them! If you ever need a procedure at Hazel Hawkins Day surgery,  know that there is a great group of folks there who will take good care of you, and check back with you after a few days, just to make sure you are doing well.`
                    },
                    {
                        name: 'Miriam Villalobos',
                        rating: 5.0,
                        reviewContent: `Today's visit has been a good one. All my nurses and doctors were very understanding and caring. Thank you for all your help and support.`
                    },
                    {
                        name: 'MitchellKenneth DeJesus',
                        rating: 5.0,
                        reviewContent: `Well, we as people know the difference when we are treated right or not treated well. Do you think this Hospital should have been sued in a Court of  Law, (?), when you come in with a Nose bleed that was result of a botched operation by another Doctor from San Jose and you just seen him and while you where traveling to get back to where you reside which is here in Hollister, the packs in your nose slip out do to an onset of bleeding( Hot Day.), Now, have a decision, as had to pull over on 25 in front of Trical and exit Vehicle to clear airway passage and change my sweat shirt as it is soaking with blood, do I go to Hazel Hawkins or Saint Louise(?), question will I make it. Lots of Blood having a hell of a time trying to stop the flow, nothing is working. Decision go to Hazel, closer.
                        I make it to Hazel, Blood everywhere, as soon as I am taken to a room, passed out. Loss of Blood. Definitely would not have made it to Saint Louise. Would have crashed Vehicle. The ER Doctor, says I have to be transported to San Jose Regional and that in His opinion I did this to myself to get pain Medication. WHAT. This Is California. You can get anything you need if that is what you perfer. 
                     So I tell the ER Doctor I need to go back to where I reside and get my medication for Harvonni as I am on Hep. "C", treatment. He states I will remove the nose packs he placed in and you can leave. Then say's I will call the Cops, Go ahead. He does. The Cops show up. The cops say can not leave. Explain my situation. They say we will put you on a three day pysch hold. Three Cops show up for this enlighten Drama. And not one say's I will go over and get your medication as I even suggested that also.
                       So after about 3 hours closer to 4, the ambulance shows up and taken to San Jose Regional. No Harvonni. The Other Doctor, Nose Doc, not there. WOW. So it had come to my attention that should have been given a blood transfusion. Did not get my Harvonni until 39 plus hours later.
                       My Hep "C" treatment failed. Now some of you may find it in that brain of yours to be upset about this post. Let me assure you. If you do. Your a Whack JOB. I am the one who went thru this ordeal and reaped the consequences of it, NOT YOU. So do you think this Hazel Hawkins Hospital should have been SUED IN A COURT OF LAW ?`
                    }
                ],
                rating: 2.5,
                aboutDoctor: 'Dr. Zareen Amin is an obstetrician-gynecologist in Hollister, California and is affiliated with Hazel Hawkins Memorial Hospital. She received her medical degree from Texas College of Osteopathic Medicine and has been in practice between 6-10 years. She also speaks multiple languages, including Hindi and Urdu.'
            },
            {
                name: 'Dr. Luke Bi, MD',
                proceduresTakeup: [
                    'Chronic Obstructive Pulmonary Disease (COPD)',
                    'Cataract '
                ],
                reviews: [
                    {
                        name: 'Cowgirl Sherri',
                        rating: 5.0,
                        reviewContent: `I went in for a same day procedure,  and I had the best group of people taking care of me. Alice brought me back, and she explained everything that she was doing and what would be happening.  I was very relaxed, by the time I was ready to go back. Dr. Martinez stopped by and made sure I was ready, then Gaby came next and talked with me. Then Victor stopped by and said Hi, letting me know what he would be doing. Then Nicole came and whisked me back to the procedure room. All of them were friendly, and a fun group to have taking care of me. There where two more that were there Mandie and Theresa, but I don't think I was awake at that time. 😁  All in all, everything went well and I highly recommend them! If you ever need a procedure at Hazel Hawkins Day surgery,  know that there is a great group of folks there who will take good care of you, and check back with you after a few days, just to make sure you are doing well.`
                    },
                    {
                        name: 'Miriam Villalobos',
                        rating: 5.0,
                        reviewContent: `Today's visit has been a good one. All my nurses and doctors were very understanding and caring. Thank you for all your help and support.`
                    },
                    {
                        name: 'MitchellKenneth DeJesus',
                        rating: 5.0,
                        reviewContent: `Well, we as people know the difference when we are treated right or not treated well. Do you think this Hospital should have been sued in a Court of  Law, (?), when you come in with a Nose bleed that was result of a botched operation by another Doctor from San Jose and you just seen him and while you where traveling to get back to where you reside which is here in Hollister, the packs in your nose slip out do to an onset of bleeding( Hot Day.), Now, have a decision, as had to pull over on 25 in front of Trical and exit Vehicle to clear airway passage and change my sweat shirt as it is soaking with blood, do I go to Hazel Hawkins or Saint Louise(?), question will I make it. Lots of Blood having a hell of a time trying to stop the flow, nothing is working. Decision go to Hazel, closer.
                        I make it to Hazel, Blood everywhere, as soon as I am taken to a room, passed out. Loss of Blood. Definitely would not have made it to Saint Louise. Would have crashed Vehicle. The ER Doctor, says I have to be transported to San Jose Regional and that in His opinion I did this to myself to get pain Medication. WHAT. This Is California. You can get anything you need if that is what you perfer. 
                     So I tell the ER Doctor I need to go back to where I reside and get my medication for Harvonni as I am on Hep. "C", treatment. He states I will remove the nose packs he placed in and you can leave. Then say's I will call the Cops, Go ahead. He does. The Cops show up. The cops say can not leave. Explain my situation. They say we will put you on a three day pysch hold. Three Cops show up for this enlighten Drama. And not one say's I will go over and get your medication as I even suggested that also.
                       So after about 3 hours closer to 4, the ambulance shows up and taken to San Jose Regional. No Harvonni. The Other Doctor, Nose Doc, not there. WOW. So it had come to my attention that should have been given a blood transfusion. Did not get my Harvonni until 39 plus hours later.
                       My Hep "C" treatment failed. Now some of you may find it in that brain of yours to be upset about this post. Let me assure you. If you do. Your a Whack JOB. I am the one who went thru this ordeal and reaped the consequences of it, NOT YOU. So do you think this Hazel Hawkins Hospital should have been SUED IN A COURT OF LAW ?`
                    }
                ],
                rating: 3.5,
                aboutDoctor: 'Dr. Luke Bi is a gastroenterologist in Millbrae, California and is affiliated with multiple hospitals in the area, including Contra Costa Regional Medical Center and David Grant USAF Medical Center. He received his medical degree from University of California Irvine School of Medicine and has been in practice between 11-20 years. Dr. Bi accepts several types of health insurance, listed below. He also speaks multiple languages, including Chinese (Mandarin) and Chinese (Cantonese).'
            }
        ]
    }
]
export const hospitalProcedureDoctorsData = (props) => {
    const { queryRequest } = props;
    console.log('Request Received For: ', queryRequest);
    let data = [];
    if(queryRequest === 'hospitalsList'){
        const hospitalsListh = hospitalsListOriginal;
            hospitalsListh.forEach(element => {
                data.push({
                    id: element.id,
                    name: element.name
                });
            });
    } else if(queryRequest === 'doctorsList'){
        const hospitalsListd = hospitalsListOriginal;
            const tempDoctorsList = [];
            hospitalsListd.forEach(hospitalObject => {
                hospitalObject.doctorsList.forEach(doctorObject => {
                    if (tempDoctorsList.indexOf(doctorObject.name) === -1) {
                        tempDoctorsList.push(doctorObject.name);
                        data.push({
                            id: hospitalObject.id,
                            name: doctorObject.name
                        });
                    }
                });
            });
    } else if(queryRequest === 'proceduresList'){
        const hospitalsListp = hospitalsListOriginal;
        const tempProceduresList = [];
        for(let i=0; i<hospitalsListp.length; i++){
            const doctorsList = hospitalsListp[i].doctorsList;
            for(let j=0; j<doctorsList.length; j++){
                const proceduresList = doctorsList[j].proceduresTakeup;
                for(let k=0; k<proceduresList.length; k++){
                    if (tempProceduresList.indexOf(proceduresList[k]) === -1) {
                        tempProceduresList.push(proceduresList[k]);
                        data.push({
                            id: hospitalsListp[i].id,
                            name: proceduresList[k]
                        });
                    }
                }
            }
        }
    } else if(queryRequest === 'doctorsNameByProcedure'){
        const hospitalsListdp = hospitalsListOriginal;
        const tempDoctorsList1 = [];
        const { procedureName } = props;
        hospitalsListdp.forEach(hospitalObject => {
            hospitalObject.doctorsList.forEach(doctorObject => {
                doctorObject.proceduresTakeup.forEach(procedureObject => {
                    if (procedureName === procedureObject) {
                        if (tempDoctorsList1.indexOf(doctorObject.name) === -1) {
                            tempDoctorsList1.push(doctorObject.name);
                            data.push({
                                id: hospitalObject.id,
                                name: doctorObject.name
                            });
                        }
                    }
                });
            });
        });
    } else {
        const hospitalsListdf = hospitalsListOriginal;
            data = hospitalsListdf;
    }
    console.log('final data: ', data);
    return data;
}