import React, { useState } from 'react';
import './productdetails.css';

export default function ProductDetails() {
    const [activeSection, setActiveSection] = useState('description');

    const renderSection = () => {
        switch (activeSection) {
            case 'description':
                return (
                    <div className='detailed-des'>
                       Yamaha F Series 280 6 String Acoustic Guitar Bundle with Strap, Polishing Cloth, Picks & E book
 


 It Includes :
 
 F-280 Acoustic Guitar
 Guitar Strap
 Guitar Picks - Pack of 6
 Bajaao Polishing Cloth
 Bajaao Beginner's Guide to Learning Guitar E-book
 Yamaha Acoustic guitars are a testimony to the long-lasting legacy of handcrafted guitars that give people a platform to make waves. They are affordable, reliable and most of all; desirable.
 
 What sets apart the F Series of Acoustic Guitars? For starters, the F280 is made in India, exclusively for India. This iconic piece reflects the ease and comfort every beginner is searching for, or the familiarity of playability that every seasoned player seeks.
 Features :
 
 Comfortable playability for beginners
 High durability and stability proven by Yamaha's quality standard
 Made in Yamaha Music India factory
  
 
 
 Comfortable Playability for Beginners
 
 A strong built for a talented beginner! Experiment with this acoustic guitar and bring your creativity to life. Easy to tune, effortless to play – this guitar is all you need for the beginning of your musical way!
 
  
 
  
 
 
 High durability and stability
 
 High durability and stability proven by Yamaha's quality standard Yamaha has a long-standing history of creating quality instruments that surpass expectations. You can sit back and relax because the F280 is going to be your sturdy companion for a long, long time. This beginner guitar is sure to help you create the sound you want to produce, so pick it up and perfect the art of strumming!
 
  
 
 
  
 
 The friendliest price point
 
 The friendliest price point Another attractive quality of this starter guitar is its value. For beginners and seasoned players alike, this acoustic guitar is a true find! It has been priced just right, so there’s one less thing for you to worry about when choosing the perfect guitar for you.
 
  
 
 
 Made in Yamaha Music India factory
 
 
 Made in Yamaha Music India factory Created at the home nation, this one is special because it is exclusively for India.
 
 Built with care and precision at the Yamaha Music India factory, welcome this iconic piece into your life.
 
  
 
 F280 : A Remarkable Acoustic Guitar, Exclusively Made For India !
 A guitar that lives long, a guitar that fuels your passion and makes it strong – Meet the Yamaha F280 & FS80C . A unique acoustic guitar that is made exclusively for India. Come, discover more about yourself!
 
 General Specifications F280
 
 Body Shape Traditional Western
 Scale Length: 634mm (25”)
 Body Length: 505mm (19 7/8")
 Total Length: 1029mm (40 1/2")
 Body Width: 412mm (16 1/4")
 Body Depth: 96-116mm (3 13/16" - 4 9/16")
 Nut Width: 43mm (1 11/16”)
 String Spacing: * 10.0mm
 Top Material: Spruce
 Back Material: Tonewood **
 Side Material: Tonewood **
 Neck Material: Tonewood **
 Fingerboard Material: Rosewood
 Fingerboard Radius: R400mm (15 3/4")
 Bridge Material: Rosewood
 Nut Material: Urea
 Saddle Material: Urea
 Bridge Pins: Black ABS
 Tuners: Covered Chrome(TM-14P)
 Body Binding: Black
 Soundhole Inlay: Black + White
 Pickguard: Black
 Body Finish Top: Gloss Side/Back : Matt
 Neck Finish: Matt
 Electronics: None
 Controls: None
 Connections: None
 Strings: .012/.016/.025(or.024)/.033(.032)/.043(.042)/.053(.052)
 Accessories: Hex Wrench
 Case: None
 It includes the following components 
 
 Guitar Picks - Set of 6 Overview:
 
  These 351-shaped picks are precision cut and expertly tumbled to provide a smooth, rounded edge resistant to chipping. The finishing process assures a virtually slip-proof grip and unmatched durability even after hours of playing!
 
 Specifications:
 
 Material : Delrin
 Shape : 351 Shape
 Gauge: .50mm
 Bajaao Microfiber Guitar/Instrument Polishing Cloth Overview:
 
 The Bajaao Microfiber Polishing Cloth is made of 80% polyester and 20% nylon. One strand is 10 times finer than silk and 100 times smaller than a human hair. Microfiber is preferred for its very lightweight, super absorbency, and rapid drying properties. The polishing cloth rapidly absorbs up to 7 times its weight in moisture and can be used safely on any surface. Polishes your guitar to a brilliant shine.
 
 Bajaao Guitar Shoulder Strap Nylon Brown Overview:
 
 BAJAAO 2" Nylon shoulder straps feature easy-adjustment buckles, Comfort-Edge webbing that's easy on the neck and won't deteriorate, and 100% leather ends.
 
 Beginner's Guide to Learning Guitar - EBook Overview:
 
 BAJAAO India introduces the Beginner's Guide to Learning Guitar,. This book is an excellent learning tool for the beginner guitarist who has no knowledge of music theory, to the intermediate guitarist who is looking to improve his or her knowledge of the the instrument. This E-Book teaches the basics of playing guitar and strengthens this foundation through exercises in each chapter. From the the right posture to the right way of holding a chord, all information is consistently applied to the guitar fret board.
 
 Made in India
                    </div>
                );
            case 'specifications':
                return (
                    <div className='detailed-det'>
                        SPECIFICATIONS:
                        <ul>
                            <li>Back & Sides Wood : Tonewood</li>
                        

<li>Body Shape : Dreadnought</li>
<li>Fretboard: Rosewood</li>
<li>Number of Frets
:  
20</li>
<li>Number of Strings
:  
6</li>
<li>Nut Width (mm)
:  
43mm</li>
<li>Orienation
:  
Right Handed</li>
<li>Scale Length (Inches)
:  
25�</li>
<li>Solid-Top
:  
No</li>
<li>Top Wood
:  
Spruce</li>
</ul>
                    </div>
                );
            case 'reviews':
                return (
                    <div className='Cutomer-Reviews'>
                        Customer Reviews content here
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className='productdetails'>
            <div className='details-title'>
                <div className='details-head'>
                    <button onClick={() => setActiveSection('description')}>DESCRIPTION</button>
                </div>
                <div className='details-head'>
                    <button onClick={() => setActiveSection('specifications')}>SPECIFICATIONS</button>
                </div>
                <div className='details-head'>
                    <button onClick={() => setActiveSection('reviews')}>REVIEWS</button>
                </div>
            </div>
            {renderSection()}
        </section>
    );
}
