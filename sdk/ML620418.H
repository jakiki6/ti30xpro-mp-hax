/**************************************************************

    ML620418.H - SFR define Header file for CCU8

    #CORE           "nX-U8/100"
    #TARGET         "ML620418"
    #VERSION        "4.03"
    Last Edition  Oct 04, 2018
    Copyright (C) 2018 LAPIS Semiconductor Co., Ltd.
    U8/U16 Device Information Files V2.00
**************************************************************/
#ifndef _ML620418_H_
#define _ML620418_H_

typedef struct{
  unsigned char b0  : 1 ;
  unsigned char b1  : 1 ;
  unsigned char b2  : 1 ;
  unsigned char b3  : 1 ;
  unsigned char b4  : 1 ;
  unsigned char b5  : 1 ;
  unsigned char b6  : 1 ;
  unsigned char b7  : 1 ;
} _BYTE_FIELD;

/*---------------------------------------------------
	CODE ADDRESS SYMBOLS
---------------------------------------------------*/
#define WDTINT	0x0008
#define EXI0INT	0x0010
#define EXI1INT	0x0012
#define EXI2INT	0x0014
#define EXI3INT	0x0016
#define EXI4INT	0x0018
#define EXI5INT	0x001A
#define EXI6INT	0x001C
#define EXI7INT	0x001E
#define SIO0INT	0x0020
#define SIOF0INT	0x0022
#define I2C1INT	0x0026
#define UA0INT	0x0028
#define UA1INT	0x002A
#define UAF0INT	0x002C
#define UAF1INT	0x002E
#define I2CF0INT	0x0030
#define I2CF1INT	0x0032
#define LOSCINT	0x003A
#define VLSINT	0x003C
#define MD0INT	0x003E
#define SADINT	0x0040
#define RADINT	0x0042
#define CMP0INT	0x0048
#define CMP1INT	0x004A
#define TM0INT	0x0050
#define TM1INT	0x0052
#define TM2INT	0x0054
#define TM3INT	0x0056
#define TM4INT	0x0058
#define TM5INT	0x005A
#define TM6INT	0x005C
#define TM7INT	0x005E
#define FTM0INT	0x0060
#define FTM1INT	0x0062
#define FTM2INT	0x0064
#define FTM3INT	0x0066
#define RTC1INT	0x0068
#define AL11INT	0x006A
#define TM1KINT	0x006E
#define LTB0INT	0x0070
#define LTB1INT	0x0072
#define LTB2INT	0x0074
#define LCDFRINT	0x0076
#define RTC2INT	0x0078
#define AL12INT	0x007A
#define RTC0INT	0x007C
#define AL10INT	0x007E
/*---------------------------------------------------
	END OF CODE ADDRESS SYMBOLS
---------------------------------------------------*/

/*---------------------------------------------------
	DATA ADDRESS SYMBOLS
---------------------------------------------------*/
#define DSR (*(volatile unsigned char __near *)0xF000)
#define _B_DSR (*(volatile _BYTE_FIELD __near *)0xF000)

#define FCON01 (*(volatile unsigned int __near *)0xF002)

#define FCON0 (*(volatile unsigned char __near *)0xF002)
#define _B_FCON0 (*(volatile _BYTE_FIELD __near *)0xF002)

#define FCON1 (*(volatile unsigned char __near *)0xF003)
#define _B_FCON1 (*(volatile _BYTE_FIELD __near *)0xF003)

#define FCON23 (*(volatile unsigned int __near *)0xF004)

#define FCON2 (*(volatile unsigned char __near *)0xF004)
#define _B_FCON2 (*(volatile _BYTE_FIELD __near *)0xF004)

#define FCON3 (*(volatile unsigned char __near *)0xF005)
#define _B_FCON3 (*(volatile _BYTE_FIELD __near *)0xF005)

#define FCON45 (*(volatile unsigned int __near *)0xF006)

#define FCON4 (*(volatile unsigned char __near *)0xF006)
#define _B_FCON4 (*(volatile _BYTE_FIELD __near *)0xF006)

#define FCON5 (*(volatile unsigned char __near *)0xF007)
#define _B_FCON5 (*(volatile _BYTE_FIELD __near *)0xF007)

#define STPACP (*(volatile unsigned char __near *)0xF008)

#define SBYCON (*(volatile unsigned char __near *)0xF009)
#define _B_SBYCON (*(volatile _BYTE_FIELD __near *)0xF009)

#define FSTAT (*(volatile unsigned char __near *)0xF00A)
#define _B_FSTAT (*(volatile _BYTE_FIELD __near *)0xF00A)

#define RSTAT (*(volatile unsigned char __near *)0xF00C)
#define _B_RSTAT (*(volatile _BYTE_FIELD __near *)0xF00C)

#define WDTCON (*(volatile unsigned char __near *)0xF00E)
#define _B_WDTCON (*(volatile _BYTE_FIELD __near *)0xF00E)

#define WDTMOD (*(volatile unsigned char __near *)0xF00F)
#define _B_WDTMOD (*(volatile _BYTE_FIELD __near *)0xF00F)

#define IE01 (*(volatile unsigned int __near *)0xF010)

#define IE0 (*(volatile unsigned char __near *)0xF010)

#define IE1 (*(volatile unsigned char __near *)0xF011)
#define _B_IE1 (*(volatile _BYTE_FIELD __near *)0xF011)

#define IE23 (*(volatile unsigned int __near *)0xF012)

#define IE2 (*(volatile unsigned char __near *)0xF012)
#define _B_IE2 (*(volatile _BYTE_FIELD __near *)0xF012)

#define IE3 (*(volatile unsigned char __near *)0xF013)
#define _B_IE3 (*(volatile _BYTE_FIELD __near *)0xF013)

#define IE45 (*(volatile unsigned int __near *)0xF014)

#define IE4 (*(volatile unsigned char __near *)0xF014)
#define _B_IE4 (*(volatile _BYTE_FIELD __near *)0xF014)

#define IE5 (*(volatile unsigned char __near *)0xF015)
#define _B_IE5 (*(volatile _BYTE_FIELD __near *)0xF015)

#define IE67 (*(volatile unsigned int __near *)0xF016)

#define IE6 (*(volatile unsigned char __near *)0xF016)
#define _B_IE6 (*(volatile _BYTE_FIELD __near *)0xF016)

#define IE7 (*(volatile unsigned char __near *)0xF017)
#define _B_IE7 (*(volatile _BYTE_FIELD __near *)0xF017)

#define IRQ01 (*(volatile unsigned int __near *)0xF018)

#define IRQ0 (*(volatile unsigned char __near *)0xF018)
#define _B_IRQ0 (*(volatile _BYTE_FIELD __near *)0xF018)

#define IRQ1 (*(volatile unsigned char __near *)0xF019)
#define _B_IRQ1 (*(volatile _BYTE_FIELD __near *)0xF019)

#define IRQ23 (*(volatile unsigned int __near *)0xF01A)

#define IRQ2 (*(volatile unsigned char __near *)0xF01A)
#define _B_IRQ2 (*(volatile _BYTE_FIELD __near *)0xF01A)

#define IRQ3 (*(volatile unsigned char __near *)0xF01B)
#define _B_IRQ3 (*(volatile _BYTE_FIELD __near *)0xF01B)

#define IRQ45 (*(volatile unsigned int __near *)0xF01C)

#define IRQ4 (*(volatile unsigned char __near *)0xF01C)
#define _B_IRQ4 (*(volatile _BYTE_FIELD __near *)0xF01C)

#define IRQ5 (*(volatile unsigned char __near *)0xF01D)
#define _B_IRQ5 (*(volatile _BYTE_FIELD __near *)0xF01D)

#define IRQ67 (*(volatile unsigned int __near *)0xF01E)

#define IRQ6 (*(volatile unsigned char __near *)0xF01E)
#define _B_IRQ6 (*(volatile _BYTE_FIELD __near *)0xF01E)

#define IRQ7 (*(volatile unsigned char __near *)0xF01F)
#define _B_IRQ7 (*(volatile _BYTE_FIELD __near *)0xF01F)

#define ILEN (*(volatile unsigned int __near *)0xF020)

#define ILENL (*(volatile unsigned char __near *)0xF020)
#define _B_ILENL (*(volatile _BYTE_FIELD __near *)0xF020)

#define ILENH (*(volatile unsigned char __near *)0xF021)

#define CIL (*(volatile unsigned int __near *)0xF022)

#define CILL (*(volatile unsigned char __near *)0xF022)
#define _B_CILL (*(volatile _BYTE_FIELD __near *)0xF022)

#define CILH (*(volatile unsigned char __near *)0xF023)

#define ILC1 (*(volatile unsigned int __near *)0xF024)

#define ILC1L (*(volatile unsigned char __near *)0xF024)
#define _B_ILC1L (*(volatile _BYTE_FIELD __near *)0xF024)

#define ILC1H (*(volatile unsigned char __near *)0xF025)
#define _B_ILC1H (*(volatile _BYTE_FIELD __near *)0xF025)

#define ILC2 (*(volatile unsigned int __near *)0xF026)

#define ILC2L (*(volatile unsigned char __near *)0xF026)
#define _B_ILC2L (*(volatile _BYTE_FIELD __near *)0xF026)

#define ILC2H (*(volatile unsigned char __near *)0xF027)
#define _B_ILC2H (*(volatile _BYTE_FIELD __near *)0xF027)

#define ILC3 (*(volatile unsigned int __near *)0xF028)

#define ILC3L (*(volatile unsigned char __near *)0xF028)
#define _B_ILC3L (*(volatile _BYTE_FIELD __near *)0xF028)

#define ILC3H (*(volatile unsigned char __near *)0xF029)
#define _B_ILC3H (*(volatile _BYTE_FIELD __near *)0xF029)

#define ILC4 (*(volatile unsigned int __near *)0xF02A)

#define ILC4L (*(volatile unsigned char __near *)0xF02A)
#define _B_ILC4L (*(volatile _BYTE_FIELD __near *)0xF02A)

#define ILC4H (*(volatile unsigned char __near *)0xF02B)
#define _B_ILC4H (*(volatile _BYTE_FIELD __near *)0xF02B)

#define ILC5 (*(volatile unsigned int __near *)0xF02C)

#define ILC5L (*(volatile unsigned char __near *)0xF02C)
#define _B_ILC5L (*(volatile _BYTE_FIELD __near *)0xF02C)

#define ILC5H (*(volatile unsigned char __near *)0xF02D)
#define _B_ILC5H (*(volatile _BYTE_FIELD __near *)0xF02D)

#define ILC6 (*(volatile unsigned int __near *)0xF02E)

#define ILC6L (*(volatile unsigned char __near *)0xF02E)
#define _B_ILC6L (*(volatile _BYTE_FIELD __near *)0xF02E)

#define ILC6H (*(volatile unsigned char __near *)0xF02F)
#define _B_ILC6H (*(volatile _BYTE_FIELD __near *)0xF02F)

#define ILC7 (*(volatile unsigned int __near *)0xF030)

#define ILC7L (*(volatile unsigned char __near *)0xF030)
#define _B_ILC7L (*(volatile _BYTE_FIELD __near *)0xF030)

#define ILC7H (*(volatile unsigned char __near *)0xF031)
#define _B_ILC7H (*(volatile _BYTE_FIELD __near *)0xF031)

#define EXICON01 (*(volatile unsigned int __near *)0xF040)

#define EXICON0 (*(volatile unsigned char __near *)0xF040)
#define _B_EXICON0 (*(volatile _BYTE_FIELD __near *)0xF040)

#define EXICON1 (*(volatile unsigned char __near *)0xF041)
#define _B_EXICON1 (*(volatile _BYTE_FIELD __near *)0xF041)

#define EXICON23 (*(volatile unsigned int __near *)0xF042)

#define EXICON2 (*(volatile unsigned char __near *)0xF042)
#define _B_EXICON2 (*(volatile _BYTE_FIELD __near *)0xF042)

#define EXICON3 (*(volatile unsigned char __near *)0xF043)
#define _B_EXICON3 (*(volatile _BYTE_FIELD __near *)0xF043)

#define EXI01SEL (*(volatile unsigned int __near *)0xF048)

#define EXI0SEL (*(volatile unsigned char __near *)0xF048)
#define _B_EXI0SEL (*(volatile _BYTE_FIELD __near *)0xF048)

#define EXI1SEL (*(volatile unsigned char __near *)0xF049)
#define _B_EXI1SEL (*(volatile _BYTE_FIELD __near *)0xF049)

#define EXI23SEL (*(volatile unsigned int __near *)0xF04A)

#define EXI2SEL (*(volatile unsigned char __near *)0xF04A)
#define _B_EXI2SEL (*(volatile _BYTE_FIELD __near *)0xF04A)

#define EXI3SEL (*(volatile unsigned char __near *)0xF04B)
#define _B_EXI3SEL (*(volatile _BYTE_FIELD __near *)0xF04B)

#define EXI45SEL (*(volatile unsigned int __near *)0xF04C)

#define EXI4SEL (*(volatile unsigned char __near *)0xF04C)
#define _B_EXI4SEL (*(volatile _BYTE_FIELD __near *)0xF04C)

#define EXI5SEL (*(volatile unsigned char __near *)0xF04D)
#define _B_EXI5SEL (*(volatile _BYTE_FIELD __near *)0xF04D)

#define EXI67SEL (*(volatile unsigned int __near *)0xF04E)

#define EXI6SEL (*(volatile unsigned char __near *)0xF04E)
#define _B_EXI6SEL (*(volatile _BYTE_FIELD __near *)0xF04E)

#define EXI7SEL (*(volatile unsigned char __near *)0xF04F)
#define _B_EXI7SEL (*(volatile _BYTE_FIELD __near *)0xF04F)

#define LTBR (*(volatile unsigned char __near *)0xF060)
#define _B_LTBR (*(volatile _BYTE_FIELD __near *)0xF060)

#define LTBADJ (*(volatile unsigned int __near *)0xF062)

#define LTBADJL (*(volatile unsigned char __near *)0xF062)
#define _B_LTBADJL (*(volatile _BYTE_FIELD __near *)0xF062)

#define LTBADJH (*(volatile unsigned char __near *)0xF063)
#define _B_LTBADJH (*(volatile _BYTE_FIELD __near *)0xF063)

#define LTBINT (*(volatile unsigned int __near *)0xF064)

#define LTBINTL (*(volatile unsigned char __near *)0xF064)
#define _B_LTBINTL (*(volatile _BYTE_FIELD __near *)0xF064)

#define LTBINTH (*(volatile unsigned char __near *)0xF065)
#define _B_LTBINTH (*(volatile _BYTE_FIELD __near *)0xF065)

#define PMCON (*(volatile unsigned char __near *)0xF066)
#define _B_PMCON (*(volatile _BYTE_FIELD __near *)0xF066)

#define BLKCON01 (*(volatile unsigned int __near *)0xF068)

#define BLKCON0 (*(volatile unsigned char __near *)0xF068)
#define _B_BLKCON0 (*(volatile _BYTE_FIELD __near *)0xF068)

#define BLKCON1 (*(volatile unsigned char __near *)0xF069)
#define _B_BLKCON1 (*(volatile _BYTE_FIELD __near *)0xF069)

#define BLKCON23 (*(volatile unsigned int __near *)0xF06A)

#define BLKCON2 (*(volatile unsigned char __near *)0xF06A)
#define _B_BLKCON2 (*(volatile _BYTE_FIELD __near *)0xF06A)

#define BLKCON3 (*(volatile unsigned char __near *)0xF06B)
#define _B_BLKCON3 (*(volatile _BYTE_FIELD __near *)0xF06B)

#define BLKCON45 (*(volatile unsigned int __near *)0xF06C)

#define BLKCON4 (*(volatile unsigned char __near *)0xF06C)
#define _B_BLKCON4 (*(volatile _BYTE_FIELD __near *)0xF06C)

#define BLKCON5 (*(volatile unsigned char __near *)0xF06D)
#define _B_BLKCON5 (*(volatile _BYTE_FIELD __near *)0xF06D)

#define T1KCR (*(volatile unsigned int __near *)0xF080)

#define T1KCRL (*(volatile unsigned char __near *)0xF080)
#define _B_T1KCRL (*(volatile _BYTE_FIELD __near *)0xF080)

#define T1KCRH (*(volatile unsigned char __near *)0xF081)
#define _B_T1KCRH (*(volatile _BYTE_FIELD __near *)0xF081)

#define T1KCON (*(volatile unsigned char __near *)0xF082)
#define _B_T1KCON (*(volatile _BYTE_FIELD __near *)0xF082)

#define FLASHA (*(volatile unsigned int __near *)0xF0E0)

#define FLASHAL (*(volatile unsigned char __near *)0xF0E0)
#define _B_FLASHAL (*(volatile _BYTE_FIELD __near *)0xF0E0)

#define FLASHAH (*(volatile unsigned char __near *)0xF0E1)
#define _B_FLASHAH (*(volatile _BYTE_FIELD __near *)0xF0E1)

#define FLASHD (*(volatile unsigned int __near *)0xF0E2)

#define FLASHDL (*(volatile unsigned char __near *)0xF0E2)
#define _B_FLASHDL (*(volatile _BYTE_FIELD __near *)0xF0E2)

#define FLASHDH (*(volatile unsigned char __near *)0xF0E3)
#define _B_FLASHDH (*(volatile _BYTE_FIELD __near *)0xF0E3)

#define FLASHCON (*(volatile unsigned char __near *)0xF0E4)
#define _B_FLASHCON (*(volatile _BYTE_FIELD __near *)0xF0E4)

#define FLASHACP (*(volatile unsigned char __near *)0xF0E6)

#define FLASHSEG (*(volatile unsigned char __near *)0xF0E8)
#define _B_FLASHSEG (*(volatile _BYTE_FIELD __near *)0xF0E8)

#define FLASHSLF (*(volatile unsigned char __near *)0xF0EA)
#define _B_FLASHSLF (*(volatile _BYTE_FIELD __near *)0xF0EA)

#define REMAPADD (*(volatile unsigned char __near *)0xF0EC)
#define _B_REMAPADD (*(volatile _BYTE_FIELD __near *)0xF0EC)

#define TST0PDCT (*(volatile unsigned char __near *)0xF0EE)
#define _B_TST0PDCT (*(volatile _BYTE_FIELD __near *)0xF0EE)

#define BIASCNT (*(volatile unsigned int __near *)0xF0F0)

#define BIASCON (*(volatile unsigned char __near *)0xF0F0)
#define _B_BIASCON (*(volatile _BYTE_FIELD __near *)0xF0F0)

#define DSPCNT (*(volatile unsigned char __near *)0xF0F1)
#define _B_DSPCNT (*(volatile _BYTE_FIELD __near *)0xF0F1)

#define DSPMOD0 (*(volatile unsigned char __near *)0xF0F2)
#define _B_DSPMOD0 (*(volatile _BYTE_FIELD __near *)0xF0F2)

#define DSPCON01 (*(volatile unsigned int __near *)0xF0F4)

#define DSPCON0 (*(volatile unsigned char __near *)0xF0F4)
#define _B_DSPCON0 (*(volatile _BYTE_FIELD __near *)0xF0F4)

#define DSPCON1 (*(volatile unsigned char __near *)0xF0F5)
#define _B_DSPCON1 (*(volatile _BYTE_FIELD __near *)0xF0F5)

#define DSPCON23 (*(volatile unsigned int __near *)0xF0F6)

#define DSPCON2 (*(volatile unsigned char __near *)0xF0F6)
#define _B_DSPCON2 (*(volatile _BYTE_FIELD __near *)0xF0F6)

#define DSPCON3 (*(volatile unsigned char __near *)0xF0F7)
#define _B_DSPCON3 (*(volatile _BYTE_FIELD __near *)0xF0F7)

#define DSPAREA (*(volatile unsigned int __near *)0xF0F8)

#define DSPOFST (*(volatile unsigned char __near *)0xF0F8)
#define _B_DSPOFST (*(volatile _BYTE_FIELD __near *)0xF0F8)

#define DSPBUF (*(volatile unsigned char __near *)0xF0F9)
#define _B_DSPBUF (*(volatile _BYTE_FIELD __near *)0xF0F9)

#define DSPCLK (*(volatile unsigned char __near *)0xF0FA)
#define _B_DSPCLK (*(volatile _BYTE_FIELD __near *)0xF0FA)

#define LCDINT (*(volatile unsigned int __near *)0xF0FC)

#define LCDISET (*(volatile unsigned char __near *)0xF0FC)
#define _B_LCDISET (*(volatile _BYTE_FIELD __near *)0xF0FC)

#define LCDISTAT (*(volatile unsigned char __near *)0xF0FE)
#define _B_LCDISTAT (*(volatile _BYTE_FIELD __near *)0xF0FE)

#define DSPR000W (*(volatile unsigned int __near *)0xF100)

#define DSPR000 (*(volatile unsigned char __near *)0xF100)

#define DSPR001 (*(volatile unsigned char __near *)0xF101)

#define DSPR002W (*(volatile unsigned int __near *)0xF102)

#define DSPR002 (*(volatile unsigned char __near *)0xF102)

#define DSPR003 (*(volatile unsigned char __near *)0xF103)

#define DSPR004W (*(volatile unsigned int __near *)0xF104)

#define DSPR004 (*(volatile unsigned char __near *)0xF104)

#define DSPR005 (*(volatile unsigned char __near *)0xF105)

#define DSPR006W (*(volatile unsigned int __near *)0xF106)

#define DSPR006 (*(volatile unsigned char __near *)0xF106)

#define DSPR007 (*(volatile unsigned char __near *)0xF107)

#define DSPR008W (*(volatile unsigned int __near *)0xF108)

#define DSPR008 (*(volatile unsigned char __near *)0xF108)

#define DSPR009 (*(volatile unsigned char __near *)0xF109)

#define DSPR00AW (*(volatile unsigned int __near *)0xF10A)

#define DSPR00A (*(volatile unsigned char __near *)0xF10A)

#define DSPR00B (*(volatile unsigned char __near *)0xF10B)

#define DSPR00CW (*(volatile unsigned int __near *)0xF10C)

#define DSPR00C (*(volatile unsigned char __near *)0xF10C)

#define DSPR00D (*(volatile unsigned char __near *)0xF10D)

#define DSPR00EW (*(volatile unsigned int __near *)0xF10E)

#define DSPR00E (*(volatile unsigned char __near *)0xF10E)

#define DSPR00F (*(volatile unsigned char __near *)0xF10F)

#define DSPR010W (*(volatile unsigned int __near *)0xF110)

#define DSPR010 (*(volatile unsigned char __near *)0xF110)

#define DSPR011 (*(volatile unsigned char __near *)0xF111)

#define DSPR012W (*(volatile unsigned int __near *)0xF112)

#define DSPR012 (*(volatile unsigned char __near *)0xF112)

#define DSPR013 (*(volatile unsigned char __near *)0xF113)

#define DSPR014W (*(volatile unsigned int __near *)0xF114)

#define DSPR014 (*(volatile unsigned char __near *)0xF114)

#define DSPR015 (*(volatile unsigned char __near *)0xF115)

#define DSPR016W (*(volatile unsigned int __near *)0xF116)

#define DSPR016 (*(volatile unsigned char __near *)0xF116)

#define DSPR017 (*(volatile unsigned char __near *)0xF117)

#define DSPR018W (*(volatile unsigned int __near *)0xF118)

#define DSPR018 (*(volatile unsigned char __near *)0xF118)

#define DSPR019 (*(volatile unsigned char __near *)0xF119)

#define DSPR01AW (*(volatile unsigned int __near *)0xF11A)

#define DSPR01A (*(volatile unsigned char __near *)0xF11A)

#define DSPR01B (*(volatile unsigned char __near *)0xF11B)

#define DSPR01CW (*(volatile unsigned int __near *)0xF11C)

#define DSPR01C (*(volatile unsigned char __near *)0xF11C)

#define DSPR01D (*(volatile unsigned char __near *)0xF11D)

#define DSPR01EW (*(volatile unsigned int __near *)0xF11E)

#define DSPR01E (*(volatile unsigned char __near *)0xF11E)

#define DSPR01F (*(volatile unsigned char __near *)0xF11F)

#define DSPR020W (*(volatile unsigned int __near *)0xF120)

#define DSPR020 (*(volatile unsigned char __near *)0xF120)

#define DSPR021 (*(volatile unsigned char __near *)0xF121)

#define DSPR022W (*(volatile unsigned int __near *)0xF122)

#define DSPR022 (*(volatile unsigned char __near *)0xF122)

#define DSPR023 (*(volatile unsigned char __near *)0xF123)

#define DSPR024W (*(volatile unsigned int __near *)0xF124)

#define DSPR024 (*(volatile unsigned char __near *)0xF124)

#define DSPR025 (*(volatile unsigned char __near *)0xF125)

#define DSPR026W (*(volatile unsigned int __near *)0xF126)

#define DSPR026 (*(volatile unsigned char __near *)0xF126)

#define DSPR027 (*(volatile unsigned char __near *)0xF127)

#define DSPR028W (*(volatile unsigned int __near *)0xF128)

#define DSPR028 (*(volatile unsigned char __near *)0xF128)

#define DSPR029 (*(volatile unsigned char __near *)0xF129)

#define DSPR02AW (*(volatile unsigned int __near *)0xF12A)

#define DSPR02A (*(volatile unsigned char __near *)0xF12A)

#define DSPR02B (*(volatile unsigned char __near *)0xF12B)

#define DSPR02CW (*(volatile unsigned int __near *)0xF12C)

#define DSPR02C (*(volatile unsigned char __near *)0xF12C)

#define DSPR02D (*(volatile unsigned char __near *)0xF12D)

#define DSPR02EW (*(volatile unsigned int __near *)0xF12E)

#define DSPR02E (*(volatile unsigned char __near *)0xF12E)

#define DSPR02F (*(volatile unsigned char __near *)0xF12F)

#define DSPR030W (*(volatile unsigned int __near *)0xF130)

#define DSPR030 (*(volatile unsigned char __near *)0xF130)

#define DSPR031 (*(volatile unsigned char __near *)0xF131)

#define DSPR032W (*(volatile unsigned int __near *)0xF132)

#define DSPR032 (*(volatile unsigned char __near *)0xF132)

#define DSPR033 (*(volatile unsigned char __near *)0xF133)

#define DSPR034W (*(volatile unsigned int __near *)0xF134)

#define DSPR034 (*(volatile unsigned char __near *)0xF134)

#define DSPR035 (*(volatile unsigned char __near *)0xF135)

#define DSPR036W (*(volatile unsigned int __near *)0xF136)

#define DSPR036 (*(volatile unsigned char __near *)0xF136)

#define DSPR037 (*(volatile unsigned char __near *)0xF137)

#define DSPR038W (*(volatile unsigned int __near *)0xF138)

#define DSPR038 (*(volatile unsigned char __near *)0xF138)

#define DSPR039 (*(volatile unsigned char __near *)0xF139)

#define DSPR03AW (*(volatile unsigned int __near *)0xF13A)

#define DSPR03A (*(volatile unsigned char __near *)0xF13A)

#define DSPR03B (*(volatile unsigned char __near *)0xF13B)

#define DSPR03CW (*(volatile unsigned int __near *)0xF13C)

#define DSPR03C (*(volatile unsigned char __near *)0xF13C)

#define DSPR03D (*(volatile unsigned char __near *)0xF13D)

#define DSPR03EW (*(volatile unsigned int __near *)0xF13E)

#define DSPR03E (*(volatile unsigned char __near *)0xF13E)

#define DSPR03F (*(volatile unsigned char __near *)0xF13F)

#define DSPR040W (*(volatile unsigned int __near *)0xF140)

#define DSPR040 (*(volatile unsigned char __near *)0xF140)

#define DSPR041 (*(volatile unsigned char __near *)0xF141)

#define DSPR042W (*(volatile unsigned int __near *)0xF142)

#define DSPR042 (*(volatile unsigned char __near *)0xF142)

#define DSPR043 (*(volatile unsigned char __near *)0xF143)

#define DSPR044W (*(volatile unsigned int __near *)0xF144)

#define DSPR044 (*(volatile unsigned char __near *)0xF144)

#define DSPR045 (*(volatile unsigned char __near *)0xF145)

#define DSPR046W (*(volatile unsigned int __near *)0xF146)

#define DSPR046 (*(volatile unsigned char __near *)0xF146)

#define DSPR047 (*(volatile unsigned char __near *)0xF147)

#define DSPR048W (*(volatile unsigned int __near *)0xF148)

#define DSPR048 (*(volatile unsigned char __near *)0xF148)

#define DSPR049 (*(volatile unsigned char __near *)0xF149)

#define DSPR04AW (*(volatile unsigned int __near *)0xF14A)

#define DSPR04A (*(volatile unsigned char __near *)0xF14A)

#define DSPR04B (*(volatile unsigned char __near *)0xF14B)

#define DSPR04CW (*(volatile unsigned int __near *)0xF14C)

#define DSPR04C (*(volatile unsigned char __near *)0xF14C)

#define DSPR04D (*(volatile unsigned char __near *)0xF14D)

#define DSPR04EW (*(volatile unsigned int __near *)0xF14E)

#define DSPR04E (*(volatile unsigned char __near *)0xF14E)

#define DSPR04F (*(volatile unsigned char __near *)0xF14F)

#define DSPR050W (*(volatile unsigned int __near *)0xF150)

#define DSPR050 (*(volatile unsigned char __near *)0xF150)

#define DSPR051 (*(volatile unsigned char __near *)0xF151)

#define DSPR052W (*(volatile unsigned int __near *)0xF152)

#define DSPR052 (*(volatile unsigned char __near *)0xF152)

#define DSPR053 (*(volatile unsigned char __near *)0xF153)

#define DSPR054W (*(volatile unsigned int __near *)0xF154)

#define DSPR054 (*(volatile unsigned char __near *)0xF154)

#define DSPR055 (*(volatile unsigned char __near *)0xF155)

#define DSPR056W (*(volatile unsigned int __near *)0xF156)

#define DSPR056 (*(volatile unsigned char __near *)0xF156)

#define DSPR057 (*(volatile unsigned char __near *)0xF157)

#define DSPR058W (*(volatile unsigned int __near *)0xF158)

#define DSPR058 (*(volatile unsigned char __near *)0xF158)

#define DSPR059 (*(volatile unsigned char __near *)0xF159)

#define DSPR05AW (*(volatile unsigned int __near *)0xF15A)

#define DSPR05A (*(volatile unsigned char __near *)0xF15A)

#define DSPR05B (*(volatile unsigned char __near *)0xF15B)

#define DSPR05CW (*(volatile unsigned int __near *)0xF15C)

#define DSPR05C (*(volatile unsigned char __near *)0xF15C)

#define DSPR05D (*(volatile unsigned char __near *)0xF15D)

#define DSPR05EW (*(volatile unsigned int __near *)0xF15E)

#define DSPR05E (*(volatile unsigned char __near *)0xF15E)

#define DSPR05F (*(volatile unsigned char __near *)0xF15F)

#define DSPR060W (*(volatile unsigned int __near *)0xF160)

#define DSPR060 (*(volatile unsigned char __near *)0xF160)

#define DSPR061 (*(volatile unsigned char __near *)0xF161)

#define DSPR062W (*(volatile unsigned int __near *)0xF162)

#define DSPR062 (*(volatile unsigned char __near *)0xF162)

#define DSPR063 (*(volatile unsigned char __near *)0xF163)

#define DSPR064W (*(volatile unsigned int __near *)0xF164)

#define DSPR064 (*(volatile unsigned char __near *)0xF164)

#define DSPR065 (*(volatile unsigned char __near *)0xF165)

#define DSPR066W (*(volatile unsigned int __near *)0xF166)

#define DSPR066 (*(volatile unsigned char __near *)0xF166)

#define DSPR067 (*(volatile unsigned char __near *)0xF167)

#define DSPR068W (*(volatile unsigned int __near *)0xF168)

#define DSPR068 (*(volatile unsigned char __near *)0xF168)

#define DSPR069 (*(volatile unsigned char __near *)0xF169)

#define DSPR06AW (*(volatile unsigned int __near *)0xF16A)

#define DSPR06A (*(volatile unsigned char __near *)0xF16A)

#define DSPR06B (*(volatile unsigned char __near *)0xF16B)

#define DSPR06CW (*(volatile unsigned int __near *)0xF16C)

#define DSPR06C (*(volatile unsigned char __near *)0xF16C)

#define DSPR06D (*(volatile unsigned char __near *)0xF16D)

#define DSPR06EW (*(volatile unsigned int __near *)0xF16E)

#define DSPR06E (*(volatile unsigned char __near *)0xF16E)

#define DSPR06F (*(volatile unsigned char __near *)0xF16F)

#define DSPR070W (*(volatile unsigned int __near *)0xF170)

#define DSPR070 (*(volatile unsigned char __near *)0xF170)

#define DSPR071 (*(volatile unsigned char __near *)0xF171)

#define DSPR072W (*(volatile unsigned int __near *)0xF172)

#define DSPR072 (*(volatile unsigned char __near *)0xF172)

#define DSPR073 (*(volatile unsigned char __near *)0xF173)

#define DSPR074W (*(volatile unsigned int __near *)0xF174)

#define DSPR074 (*(volatile unsigned char __near *)0xF174)

#define DSPR075 (*(volatile unsigned char __near *)0xF175)

#define DSPR076W (*(volatile unsigned int __near *)0xF176)

#define DSPR076 (*(volatile unsigned char __near *)0xF176)

#define DSPR077 (*(volatile unsigned char __near *)0xF177)

#define DSPR078W (*(volatile unsigned int __near *)0xF178)

#define DSPR078 (*(volatile unsigned char __near *)0xF178)

#define DSPR079 (*(volatile unsigned char __near *)0xF179)

#define DSPR07AW (*(volatile unsigned int __near *)0xF17A)

#define DSPR07A (*(volatile unsigned char __near *)0xF17A)

#define DSPR07B (*(volatile unsigned char __near *)0xF17B)

#define DSPR07CW (*(volatile unsigned int __near *)0xF17C)

#define DSPR07C (*(volatile unsigned char __near *)0xF17C)

#define DSPR07D (*(volatile unsigned char __near *)0xF17D)

#define DSPR07EW (*(volatile unsigned int __near *)0xF17E)

#define DSPR07E (*(volatile unsigned char __near *)0xF17E)

#define DSPR07F (*(volatile unsigned char __near *)0xF17F)

#define DSPR080W (*(volatile unsigned int __near *)0xF180)

#define DSPR080 (*(volatile unsigned char __near *)0xF180)

#define DSPR081 (*(volatile unsigned char __near *)0xF181)

#define DSPR082W (*(volatile unsigned int __near *)0xF182)

#define DSPR082 (*(volatile unsigned char __near *)0xF182)

#define DSPR083 (*(volatile unsigned char __near *)0xF183)

#define DSPR084W (*(volatile unsigned int __near *)0xF184)

#define DSPR084 (*(volatile unsigned char __near *)0xF184)

#define DSPR085 (*(volatile unsigned char __near *)0xF185)

#define DSPR086W (*(volatile unsigned int __near *)0xF186)

#define DSPR086 (*(volatile unsigned char __near *)0xF186)

#define DSPR087 (*(volatile unsigned char __near *)0xF187)

#define DSPR088W (*(volatile unsigned int __near *)0xF188)

#define DSPR088 (*(volatile unsigned char __near *)0xF188)

#define DSPR089 (*(volatile unsigned char __near *)0xF189)

#define DSPR08AW (*(volatile unsigned int __near *)0xF18A)

#define DSPR08A (*(volatile unsigned char __near *)0xF18A)

#define DSPR08B (*(volatile unsigned char __near *)0xF18B)

#define DSPR08CW (*(volatile unsigned int __near *)0xF18C)

#define DSPR08C (*(volatile unsigned char __near *)0xF18C)

#define DSPR08D (*(volatile unsigned char __near *)0xF18D)

#define DSPR08EW (*(volatile unsigned int __near *)0xF18E)

#define DSPR08E (*(volatile unsigned char __near *)0xF18E)

#define DSPR08F (*(volatile unsigned char __near *)0xF18F)

#define DSPR090W (*(volatile unsigned int __near *)0xF190)

#define DSPR090 (*(volatile unsigned char __near *)0xF190)

#define DSPR091 (*(volatile unsigned char __near *)0xF191)

#define DSPR092W (*(volatile unsigned int __near *)0xF192)

#define DSPR092 (*(volatile unsigned char __near *)0xF192)

#define DSPR093 (*(volatile unsigned char __near *)0xF193)

#define DSPR094W (*(volatile unsigned int __near *)0xF194)

#define DSPR094 (*(volatile unsigned char __near *)0xF194)

#define DSPR095 (*(volatile unsigned char __near *)0xF195)

#define DSPR096W (*(volatile unsigned int __near *)0xF196)

#define DSPR096 (*(volatile unsigned char __near *)0xF196)

#define DSPR097 (*(volatile unsigned char __near *)0xF197)

#define DSPR098W (*(volatile unsigned int __near *)0xF198)

#define DSPR098 (*(volatile unsigned char __near *)0xF198)

#define DSPR099 (*(volatile unsigned char __near *)0xF199)

#define DSPR09AW (*(volatile unsigned int __near *)0xF19A)

#define DSPR09A (*(volatile unsigned char __near *)0xF19A)

#define DSPR09B (*(volatile unsigned char __near *)0xF19B)

#define DSPR09CW (*(volatile unsigned int __near *)0xF19C)

#define DSPR09C (*(volatile unsigned char __near *)0xF19C)

#define DSPR09D (*(volatile unsigned char __near *)0xF19D)

#define DSPR09EW (*(volatile unsigned int __near *)0xF19E)

#define DSPR09E (*(volatile unsigned char __near *)0xF19E)

#define DSPR09F (*(volatile unsigned char __near *)0xF19F)

#define DSPR0A0W (*(volatile unsigned int __near *)0xF1A0)

#define DSPR0A0 (*(volatile unsigned char __near *)0xF1A0)

#define DSPR0A1 (*(volatile unsigned char __near *)0xF1A1)

#define DSPR0A2W (*(volatile unsigned int __near *)0xF1A2)

#define DSPR0A2 (*(volatile unsigned char __near *)0xF1A2)

#define DSPR0A3 (*(volatile unsigned char __near *)0xF1A3)

#define DSPR0A4W (*(volatile unsigned int __near *)0xF1A4)

#define DSPR0A4 (*(volatile unsigned char __near *)0xF1A4)

#define DSPR0A5 (*(volatile unsigned char __near *)0xF1A5)

#define DSPR0A6W (*(volatile unsigned int __near *)0xF1A6)

#define DSPR0A6 (*(volatile unsigned char __near *)0xF1A6)

#define DSPR0A7 (*(volatile unsigned char __near *)0xF1A7)

#define DSPR0A8W (*(volatile unsigned int __near *)0xF1A8)

#define DSPR0A8 (*(volatile unsigned char __near *)0xF1A8)

#define DSPR0A9 (*(volatile unsigned char __near *)0xF1A9)

#define DSPR0AAW (*(volatile unsigned int __near *)0xF1AA)

#define DSPR0AA (*(volatile unsigned char __near *)0xF1AA)

#define DSPR0AB (*(volatile unsigned char __near *)0xF1AB)

#define DSPR0ACW (*(volatile unsigned int __near *)0xF1AC)

#define DSPR0AC (*(volatile unsigned char __near *)0xF1AC)

#define DSPR0AD (*(volatile unsigned char __near *)0xF1AD)

#define DSPR0AEW (*(volatile unsigned int __near *)0xF1AE)

#define DSPR0AE (*(volatile unsigned char __near *)0xF1AE)

#define DSPR0AF (*(volatile unsigned char __near *)0xF1AF)

#define DSPR0B0W (*(volatile unsigned int __near *)0xF1B0)

#define DSPR0B0 (*(volatile unsigned char __near *)0xF1B0)

#define DSPR0B1 (*(volatile unsigned char __near *)0xF1B1)

#define DSPR0B2W (*(volatile unsigned int __near *)0xF1B2)

#define DSPR0B2 (*(volatile unsigned char __near *)0xF1B2)

#define DSPR0B3 (*(volatile unsigned char __near *)0xF1B3)

#define DSPR0B4W (*(volatile unsigned int __near *)0xF1B4)

#define DSPR0B4 (*(volatile unsigned char __near *)0xF1B4)

#define DSPR0B5 (*(volatile unsigned char __near *)0xF1B5)

#define DSPR0B6W (*(volatile unsigned int __near *)0xF1B6)

#define DSPR0B6 (*(volatile unsigned char __near *)0xF1B6)

#define DSPR0B7 (*(volatile unsigned char __near *)0xF1B7)

#define DSPR0B8W (*(volatile unsigned int __near *)0xF1B8)

#define DSPR0B8 (*(volatile unsigned char __near *)0xF1B8)

#define DSPR0B9 (*(volatile unsigned char __near *)0xF1B9)

#define DSPR0BAW (*(volatile unsigned int __near *)0xF1BA)

#define DSPR0BA (*(volatile unsigned char __near *)0xF1BA)

#define DSPR0BB (*(volatile unsigned char __near *)0xF1BB)

#define DSPR0BCW (*(volatile unsigned int __near *)0xF1BC)

#define DSPR0BC (*(volatile unsigned char __near *)0xF1BC)

#define DSPR0BD (*(volatile unsigned char __near *)0xF1BD)

#define DSPR0BEW (*(volatile unsigned int __near *)0xF1BE)

#define DSPR0BE (*(volatile unsigned char __near *)0xF1BE)

#define DSPR0BF (*(volatile unsigned char __near *)0xF1BF)

#define DSPR0C0W (*(volatile unsigned int __near *)0xF1C0)

#define DSPR0C0 (*(volatile unsigned char __near *)0xF1C0)

#define DSPR0C1 (*(volatile unsigned char __near *)0xF1C1)

#define DSPR0C2W (*(volatile unsigned int __near *)0xF1C2)

#define DSPR0C2 (*(volatile unsigned char __near *)0xF1C2)

#define DSPR0C3 (*(volatile unsigned char __near *)0xF1C3)

#define DSPR0C4W (*(volatile unsigned int __near *)0xF1C4)

#define DSPR0C4 (*(volatile unsigned char __near *)0xF1C4)

#define DSPR0C5 (*(volatile unsigned char __near *)0xF1C5)

#define DSPR0C6W (*(volatile unsigned int __near *)0xF1C6)

#define DSPR0C6 (*(volatile unsigned char __near *)0xF1C6)

#define DSPR0C7 (*(volatile unsigned char __near *)0xF1C7)

#define DSPR0C8W (*(volatile unsigned int __near *)0xF1C8)

#define DSPR0C8 (*(volatile unsigned char __near *)0xF1C8)

#define DSPR0C9 (*(volatile unsigned char __near *)0xF1C9)

#define DSPR0CAW (*(volatile unsigned int __near *)0xF1CA)

#define DSPR0CA (*(volatile unsigned char __near *)0xF1CA)

#define DSPR0CB (*(volatile unsigned char __near *)0xF1CB)

#define DSPR0CCW (*(volatile unsigned int __near *)0xF1CC)

#define DSPR0CC (*(volatile unsigned char __near *)0xF1CC)

#define DSPR0CD (*(volatile unsigned char __near *)0xF1CD)

#define DSPR0CEW (*(volatile unsigned int __near *)0xF1CE)

#define DSPR0CE (*(volatile unsigned char __near *)0xF1CE)

#define DSPR0CF (*(volatile unsigned char __near *)0xF1CF)

#define DSPR0D0W (*(volatile unsigned int __near *)0xF1D0)

#define DSPR0D0 (*(volatile unsigned char __near *)0xF1D0)

#define DSPR0D1 (*(volatile unsigned char __near *)0xF1D1)

#define DSPR0D2W (*(volatile unsigned int __near *)0xF1D2)

#define DSPR0D2 (*(volatile unsigned char __near *)0xF1D2)

#define DSPR0D3 (*(volatile unsigned char __near *)0xF1D3)

#define DSPR0D4W (*(volatile unsigned int __near *)0xF1D4)

#define DSPR0D4 (*(volatile unsigned char __near *)0xF1D4)

#define DSPR0D5 (*(volatile unsigned char __near *)0xF1D5)

#define DSPR0D6W (*(volatile unsigned int __near *)0xF1D6)

#define DSPR0D6 (*(volatile unsigned char __near *)0xF1D6)

#define DSPR0D7 (*(volatile unsigned char __near *)0xF1D7)

#define DSPR0D8W (*(volatile unsigned int __near *)0xF1D8)

#define DSPR0D8 (*(volatile unsigned char __near *)0xF1D8)

#define DSPR0D9 (*(volatile unsigned char __near *)0xF1D9)

#define DSPR0DAW (*(volatile unsigned int __near *)0xF1DA)

#define DSPR0DA (*(volatile unsigned char __near *)0xF1DA)

#define DSPR0DB (*(volatile unsigned char __near *)0xF1DB)

#define DSPR0DCW (*(volatile unsigned int __near *)0xF1DC)

#define DSPR0DC (*(volatile unsigned char __near *)0xF1DC)

#define DSPR0DD (*(volatile unsigned char __near *)0xF1DD)

#define DSPR0DEW (*(volatile unsigned int __near *)0xF1DE)

#define DSPR0DE (*(volatile unsigned char __near *)0xF1DE)

#define DSPR0DF (*(volatile unsigned char __near *)0xF1DF)

#define DSPR0E0W (*(volatile unsigned int __near *)0xF1E0)

#define DSPR0E0 (*(volatile unsigned char __near *)0xF1E0)

#define DSPR0E1 (*(volatile unsigned char __near *)0xF1E1)

#define DSPR0E2W (*(volatile unsigned int __near *)0xF1E2)

#define DSPR0E2 (*(volatile unsigned char __near *)0xF1E2)

#define DSPR0E3 (*(volatile unsigned char __near *)0xF1E3)

#define DSPR0E4W (*(volatile unsigned int __near *)0xF1E4)

#define DSPR0E4 (*(volatile unsigned char __near *)0xF1E4)

#define DSPR0E5 (*(volatile unsigned char __near *)0xF1E5)

#define DSPR0E6W (*(volatile unsigned int __near *)0xF1E6)

#define DSPR0E6 (*(volatile unsigned char __near *)0xF1E6)

#define DSPR0E7 (*(volatile unsigned char __near *)0xF1E7)

#define DSPR0E8W (*(volatile unsigned int __near *)0xF1E8)

#define DSPR0E8 (*(volatile unsigned char __near *)0xF1E8)

#define DSPR0E9 (*(volatile unsigned char __near *)0xF1E9)

#define DSPR0EAW (*(volatile unsigned int __near *)0xF1EA)

#define DSPR0EA (*(volatile unsigned char __near *)0xF1EA)

#define DSPR0EB (*(volatile unsigned char __near *)0xF1EB)

#define DSPR0ECW (*(volatile unsigned int __near *)0xF1EC)

#define DSPR0EC (*(volatile unsigned char __near *)0xF1EC)

#define DSPR0ED (*(volatile unsigned char __near *)0xF1ED)

#define DSPR0EEW (*(volatile unsigned int __near *)0xF1EE)

#define DSPR0EE (*(volatile unsigned char __near *)0xF1EE)

#define DSPR0EF (*(volatile unsigned char __near *)0xF1EF)

#define DSPR0F0W (*(volatile unsigned int __near *)0xF1F0)

#define DSPR0F0 (*(volatile unsigned char __near *)0xF1F0)

#define DSPR0F1 (*(volatile unsigned char __near *)0xF1F1)

#define DSPR0F2W (*(volatile unsigned int __near *)0xF1F2)

#define DSPR0F2 (*(volatile unsigned char __near *)0xF1F2)

#define DSPR0F3 (*(volatile unsigned char __near *)0xF1F3)

#define DSPR0F4W (*(volatile unsigned int __near *)0xF1F4)

#define DSPR0F4 (*(volatile unsigned char __near *)0xF1F4)

#define DSPR0F5 (*(volatile unsigned char __near *)0xF1F5)

#define DSPR0F6W (*(volatile unsigned int __near *)0xF1F6)

#define DSPR0F6 (*(volatile unsigned char __near *)0xF1F6)

#define DSPR0F7 (*(volatile unsigned char __near *)0xF1F7)

#define DSPR0F8W (*(volatile unsigned int __near *)0xF1F8)

#define DSPR0F8 (*(volatile unsigned char __near *)0xF1F8)

#define DSPR0F9 (*(volatile unsigned char __near *)0xF1F9)

#define DSPR0FAW (*(volatile unsigned int __near *)0xF1FA)

#define DSPR0FA (*(volatile unsigned char __near *)0xF1FA)

#define DSPR0FB (*(volatile unsigned char __near *)0xF1FB)

#define DSPR0FCW (*(volatile unsigned int __near *)0xF1FC)

#define DSPR0FC (*(volatile unsigned char __near *)0xF1FC)

#define DSPR0FD (*(volatile unsigned char __near *)0xF1FD)

#define DSPR0FEW (*(volatile unsigned int __near *)0xF1FE)

#define DSPR0FE (*(volatile unsigned char __near *)0xF1FE)

#define DSPR0FF (*(volatile unsigned char __near *)0xF1FF)

#define P0D (*(volatile unsigned char __near *)0xF210)
#define _B_P0D (*(volatile _BYTE_FIELD __near *)0xF210)

#define P0DIR (*(volatile unsigned char __near *)0xF211)
#define _B_P0DIR (*(volatile _BYTE_FIELD __near *)0xF211)

#define P0CON (*(volatile unsigned int __near *)0xF212)

#define P0CON0 (*(volatile unsigned char __near *)0xF212)
#define _B_P0CON0 (*(volatile _BYTE_FIELD __near *)0xF212)

#define P0CON1 (*(volatile unsigned char __near *)0xF213)
#define _B_P0CON1 (*(volatile _BYTE_FIELD __near *)0xF213)

#define P0MOD (*(volatile unsigned int __near *)0xF214)

#define P0MOD0 (*(volatile unsigned char __near *)0xF214)
#define _B_P0MOD0 (*(volatile _BYTE_FIELD __near *)0xF214)

#define P0MOD1 (*(volatile unsigned char __near *)0xF215)
#define _B_P0MOD1 (*(volatile _BYTE_FIELD __near *)0xF215)

#define P2D (*(volatile unsigned char __near *)0xF220)
#define _B_P2D (*(volatile _BYTE_FIELD __near *)0xF220)

#define P2DIR (*(volatile unsigned char __near *)0xF221)
#define _B_P2DIR (*(volatile _BYTE_FIELD __near *)0xF221)

#define P2CON (*(volatile unsigned int __near *)0xF222)

#define P2CON0 (*(volatile unsigned char __near *)0xF222)
#define _B_P2CON0 (*(volatile _BYTE_FIELD __near *)0xF222)

#define P2CON1 (*(volatile unsigned char __near *)0xF223)
#define _B_P2CON1 (*(volatile _BYTE_FIELD __near *)0xF223)

#define P2MOD (*(volatile unsigned int __near *)0xF224)

#define P2MOD0 (*(volatile unsigned char __near *)0xF224)
#define _B_P2MOD0 (*(volatile _BYTE_FIELD __near *)0xF224)

#define P2MOD1 (*(volatile unsigned char __near *)0xF225)
#define _B_P2MOD1 (*(volatile _BYTE_FIELD __near *)0xF225)

#define P3D (*(volatile unsigned char __near *)0xF228)
#define _B_P3D (*(volatile _BYTE_FIELD __near *)0xF228)

#define P3DIR (*(volatile unsigned char __near *)0xF229)
#define _B_P3DIR (*(volatile _BYTE_FIELD __near *)0xF229)

#define P3CON (*(volatile unsigned int __near *)0xF22A)

#define P3CON0 (*(volatile unsigned char __near *)0xF22A)
#define _B_P3CON0 (*(volatile _BYTE_FIELD __near *)0xF22A)

#define P3CON1 (*(volatile unsigned char __near *)0xF22B)
#define _B_P3CON1 (*(volatile _BYTE_FIELD __near *)0xF22B)

#define P3MOD01 (*(volatile unsigned int __near *)0xF22C)

#define P3MOD0 (*(volatile unsigned char __near *)0xF22C)
#define _B_P3MOD0 (*(volatile _BYTE_FIELD __near *)0xF22C)

#define P3MOD1 (*(volatile unsigned char __near *)0xF22D)
#define _B_P3MOD1 (*(volatile _BYTE_FIELD __near *)0xF22D)

#define P3MOD23 (*(volatile unsigned int __near *)0xF22E)

#define P3MOD2 (*(volatile unsigned char __near *)0xF22E)
#define _B_P3MOD2 (*(volatile _BYTE_FIELD __near *)0xF22E)

#define P3MOD3 (*(volatile unsigned char __near *)0xF22F)

#define P4D (*(volatile unsigned char __near *)0xF230)
#define _B_P4D (*(volatile _BYTE_FIELD __near *)0xF230)

#define P4DIR (*(volatile unsigned char __near *)0xF231)
#define _B_P4DIR (*(volatile _BYTE_FIELD __near *)0xF231)

#define P4CON (*(volatile unsigned int __near *)0xF232)

#define P4CON0 (*(volatile unsigned char __near *)0xF232)
#define _B_P4CON0 (*(volatile _BYTE_FIELD __near *)0xF232)

#define P4CON1 (*(volatile unsigned char __near *)0xF233)
#define _B_P4CON1 (*(volatile _BYTE_FIELD __near *)0xF233)

#define P4MOD (*(volatile unsigned int __near *)0xF234)

#define P4MOD0 (*(volatile unsigned char __near *)0xF234)
#define _B_P4MOD0 (*(volatile _BYTE_FIELD __near *)0xF234)

#define P4MOD1 (*(volatile unsigned char __near *)0xF235)
#define _B_P4MOD1 (*(volatile _BYTE_FIELD __near *)0xF235)

#define P5D (*(volatile unsigned char __near *)0xF238)
#define _B_P5D (*(volatile _BYTE_FIELD __near *)0xF238)

#define P5DIR (*(volatile unsigned char __near *)0xF239)
#define _B_P5DIR (*(volatile _BYTE_FIELD __near *)0xF239)

#define P5CON (*(volatile unsigned int __near *)0xF23A)

#define P5CON0 (*(volatile unsigned char __near *)0xF23A)
#define _B_P5CON0 (*(volatile _BYTE_FIELD __near *)0xF23A)

#define P5CON1 (*(volatile unsigned char __near *)0xF23B)
#define _B_P5CON1 (*(volatile _BYTE_FIELD __near *)0xF23B)

#define P5MOD01 (*(volatile unsigned int __near *)0xF23C)

#define P5MOD0 (*(volatile unsigned char __near *)0xF23C)
#define _B_P5MOD0 (*(volatile _BYTE_FIELD __near *)0xF23C)

#define P5MOD1 (*(volatile unsigned char __near *)0xF23D)
#define _B_P5MOD1 (*(volatile _BYTE_FIELD __near *)0xF23D)

#define P5MOD23 (*(volatile unsigned int __near *)0xF23E)

#define P5MOD2 (*(volatile unsigned char __near *)0xF23E)
#define _B_P5MOD2 (*(volatile _BYTE_FIELD __near *)0xF23E)

#define P5MOD3 (*(volatile unsigned char __near *)0xF23F)

#define P6D (*(volatile unsigned char __near *)0xF240)
#define _B_P6D (*(volatile _BYTE_FIELD __near *)0xF240)

#define P6DIR (*(volatile unsigned char __near *)0xF241)
#define _B_P6DIR (*(volatile _BYTE_FIELD __near *)0xF241)

#define P6CON (*(volatile unsigned int __near *)0xF242)

#define P6CON0 (*(volatile unsigned char __near *)0xF242)
#define _B_P6CON0 (*(volatile _BYTE_FIELD __near *)0xF242)

#define P6CON1 (*(volatile unsigned char __near *)0xF243)
#define _B_P6CON1 (*(volatile _BYTE_FIELD __near *)0xF243)

#define P6MOD (*(volatile unsigned int __near *)0xF244)

#define P6MOD0 (*(volatile unsigned char __near *)0xF244)
#define _B_P6MOD0 (*(volatile _BYTE_FIELD __near *)0xF244)

#define P6MOD1 (*(volatile unsigned char __near *)0xF245)
#define _B_P6MOD1 (*(volatile _BYTE_FIELD __near *)0xF245)

#define P7D (*(volatile unsigned char __near *)0xF248)
#define _B_P7D (*(volatile _BYTE_FIELD __near *)0xF248)

#define P7DIR (*(volatile unsigned char __near *)0xF249)
#define _B_P7DIR (*(volatile _BYTE_FIELD __near *)0xF249)

#define P7CON (*(volatile unsigned int __near *)0xF24A)

#define P7CON0 (*(volatile unsigned char __near *)0xF24A)
#define _B_P7CON0 (*(volatile _BYTE_FIELD __near *)0xF24A)

#define P7CON1 (*(volatile unsigned char __near *)0xF24B)
#define _B_P7CON1 (*(volatile _BYTE_FIELD __near *)0xF24B)

#define P7MOD (*(volatile unsigned int __near *)0xF24C)

#define P7MOD0 (*(volatile unsigned char __near *)0xF24C)
#define _B_P7MOD0 (*(volatile _BYTE_FIELD __near *)0xF24C)

#define P7MOD1 (*(volatile unsigned char __near *)0xF24D)

#define P8D (*(volatile unsigned char __near *)0xF250)
#define _B_P8D (*(volatile _BYTE_FIELD __near *)0xF250)

#define P8DIR (*(volatile unsigned char __near *)0xF251)
#define _B_P8DIR (*(volatile _BYTE_FIELD __near *)0xF251)

#define P8CON (*(volatile unsigned int __near *)0xF252)

#define P8CON0 (*(volatile unsigned char __near *)0xF252)
#define _B_P8CON0 (*(volatile _BYTE_FIELD __near *)0xF252)

#define P8CON1 (*(volatile unsigned char __near *)0xF253)
#define _B_P8CON1 (*(volatile _BYTE_FIELD __near *)0xF253)

#define P8MOD (*(volatile unsigned int __near *)0xF254)

#define P8MOD0 (*(volatile unsigned char __near *)0xF254)
#define _B_P8MOD0 (*(volatile _BYTE_FIELD __near *)0xF254)

#define P8MOD1 (*(volatile unsigned char __near *)0xF255)

#define TM01D (*(volatile unsigned int __near *)0xF300)

#define TM0D (*(volatile unsigned char __near *)0xF300)
#define _B_TM0D (*(volatile _BYTE_FIELD __near *)0xF300)

#define TM1D (*(volatile unsigned char __near *)0xF301)
#define _B_TM1D (*(volatile _BYTE_FIELD __near *)0xF301)

#define TM23D (*(volatile unsigned int __near *)0xF302)

#define TM2D (*(volatile unsigned char __near *)0xF302)
#define _B_TM2D (*(volatile _BYTE_FIELD __near *)0xF302)

#define TM3D (*(volatile unsigned char __near *)0xF303)
#define _B_TM3D (*(volatile _BYTE_FIELD __near *)0xF303)

#define TM45D (*(volatile unsigned int __near *)0xF304)

#define TM4D (*(volatile unsigned char __near *)0xF304)
#define _B_TM4D (*(volatile _BYTE_FIELD __near *)0xF304)

#define TM5D (*(volatile unsigned char __near *)0xF305)
#define _B_TM5D (*(volatile _BYTE_FIELD __near *)0xF305)

#define TM67D (*(volatile unsigned int __near *)0xF306)

#define TM6D (*(volatile unsigned char __near *)0xF306)
#define _B_TM6D (*(volatile _BYTE_FIELD __near *)0xF306)

#define TM7D (*(volatile unsigned char __near *)0xF307)
#define _B_TM7D (*(volatile _BYTE_FIELD __near *)0xF307)

#define TM01C (*(volatile unsigned int __near *)0xF310)

#define TM0C (*(volatile unsigned char __near *)0xF310)
#define _B_TM0C (*(volatile _BYTE_FIELD __near *)0xF310)

#define TM1C (*(volatile unsigned char __near *)0xF311)
#define _B_TM1C (*(volatile _BYTE_FIELD __near *)0xF311)

#define TM23C (*(volatile unsigned int __near *)0xF312)

#define TM2C (*(volatile unsigned char __near *)0xF312)
#define _B_TM2C (*(volatile _BYTE_FIELD __near *)0xF312)

#define TM3C (*(volatile unsigned char __near *)0xF313)
#define _B_TM3C (*(volatile _BYTE_FIELD __near *)0xF313)

#define TM45C (*(volatile unsigned int __near *)0xF314)

#define TM4C (*(volatile unsigned char __near *)0xF314)
#define _B_TM4C (*(volatile _BYTE_FIELD __near *)0xF314)

#define TM5C (*(volatile unsigned char __near *)0xF315)
#define _B_TM5C (*(volatile _BYTE_FIELD __near *)0xF315)

#define TM67C (*(volatile unsigned int __near *)0xF316)

#define TM6C (*(volatile unsigned char __near *)0xF316)
#define _B_TM6C (*(volatile _BYTE_FIELD __near *)0xF316)

#define TM7C (*(volatile unsigned char __near *)0xF317)
#define _B_TM7C (*(volatile _BYTE_FIELD __near *)0xF317)

#define TM01CON (*(volatile unsigned int __near *)0xF320)

#define TM0CON (*(volatile unsigned char __near *)0xF320)
#define _B_TM0CON (*(volatile _BYTE_FIELD __near *)0xF320)

#define TM1CON (*(volatile unsigned char __near *)0xF321)
#define _B_TM1CON (*(volatile _BYTE_FIELD __near *)0xF321)

#define TM23CON (*(volatile unsigned int __near *)0xF322)

#define TM2CON (*(volatile unsigned char __near *)0xF322)
#define _B_TM2CON (*(volatile _BYTE_FIELD __near *)0xF322)

#define TM3CON (*(volatile unsigned char __near *)0xF323)
#define _B_TM3CON (*(volatile _BYTE_FIELD __near *)0xF323)

#define TM45CON (*(volatile unsigned int __near *)0xF324)

#define TM4CON (*(volatile unsigned char __near *)0xF324)
#define _B_TM4CON (*(volatile _BYTE_FIELD __near *)0xF324)

#define TM5CON (*(volatile unsigned char __near *)0xF325)
#define _B_TM5CON (*(volatile _BYTE_FIELD __near *)0xF325)

#define TM67CON (*(volatile unsigned int __near *)0xF326)

#define TM6CON (*(volatile unsigned char __near *)0xF326)
#define _B_TM6CON (*(volatile _BYTE_FIELD __near *)0xF326)

#define TM7CON (*(volatile unsigned char __near *)0xF327)
#define _B_TM7CON (*(volatile _BYTE_FIELD __near *)0xF327)

#define TMSTR0 (*(volatile unsigned char __near *)0xF330)
#define _B_TMSTR0 (*(volatile _BYTE_FIELD __near *)0xF330)

#define TMSTP0 (*(volatile unsigned char __near *)0xF332)
#define _B_TMSTP0 (*(volatile _BYTE_FIELD __near *)0xF332)

#define TMSTAT0 (*(volatile unsigned char __near *)0xF334)
#define _B_TMSTAT0 (*(volatile _BYTE_FIELD __near *)0xF334)

#define RTC0SEC (*(volatile unsigned char __near *)0xF3C0)
#define _B_RTC0SEC (*(volatile _BYTE_FIELD __near *)0xF3C0)

#define RTC0MIN (*(volatile unsigned char __near *)0xF3C1)
#define _B_RTC0MIN (*(volatile _BYTE_FIELD __near *)0xF3C1)

#define RTC0HOUR (*(volatile unsigned char __near *)0xF3C2)
#define _B_RTC0HOUR (*(volatile _BYTE_FIELD __near *)0xF3C2)

#define RTC0WEEK (*(volatile unsigned char __near *)0xF3C3)
#define _B_RTC0WEEK (*(volatile _BYTE_FIELD __near *)0xF3C3)

#define RTC0DAY (*(volatile unsigned char __near *)0xF3C4)
#define _B_RTC0DAY (*(volatile _BYTE_FIELD __near *)0xF3C4)

#define RTC0MON (*(volatile unsigned char __near *)0xF3C5)
#define _B_RTC0MON (*(volatile _BYTE_FIELD __near *)0xF3C5)

#define RTC0YEAR (*(volatile unsigned char __near *)0xF3C6)
#define _B_RTC0YEAR (*(volatile _BYTE_FIELD __near *)0xF3C6)

#define RTC0CON (*(volatile unsigned char __near *)0xF3C7)
#define _B_RTC0CON (*(volatile _BYTE_FIELD __near *)0xF3C7)

#define AL10MIN (*(volatile unsigned char __near *)0xF3CB)
#define _B_AL10MIN (*(volatile _BYTE_FIELD __near *)0xF3CB)

#define AL10HOUR (*(volatile unsigned char __near *)0xF3CC)
#define _B_AL10HOUR (*(volatile _BYTE_FIELD __near *)0xF3CC)

#define AL10DAY (*(volatile unsigned char __near *)0xF3CD)
#define _B_AL10DAY (*(volatile _BYTE_FIELD __near *)0xF3CD)

#define AL10MON (*(volatile unsigned char __near *)0xF3CE)
#define _B_AL10MON (*(volatile _BYTE_FIELD __near *)0xF3CE)

#define RTC1SEC (*(volatile unsigned char __near *)0xF3D0)
#define _B_RTC1SEC (*(volatile _BYTE_FIELD __near *)0xF3D0)

#define RTC1MIN (*(volatile unsigned char __near *)0xF3D1)
#define _B_RTC1MIN (*(volatile _BYTE_FIELD __near *)0xF3D1)

#define RTC1HOUR (*(volatile unsigned char __near *)0xF3D2)
#define _B_RTC1HOUR (*(volatile _BYTE_FIELD __near *)0xF3D2)

#define RTC1WEEK (*(volatile unsigned char __near *)0xF3D3)
#define _B_RTC1WEEK (*(volatile _BYTE_FIELD __near *)0xF3D3)

#define RTC1DAY (*(volatile unsigned char __near *)0xF3D4)
#define _B_RTC1DAY (*(volatile _BYTE_FIELD __near *)0xF3D4)

#define RTC1MON (*(volatile unsigned char __near *)0xF3D5)
#define _B_RTC1MON (*(volatile _BYTE_FIELD __near *)0xF3D5)

#define RTC1YEAR (*(volatile unsigned char __near *)0xF3D6)
#define _B_RTC1YEAR (*(volatile _BYTE_FIELD __near *)0xF3D6)

#define RTC1CON (*(volatile unsigned char __near *)0xF3D7)
#define _B_RTC1CON (*(volatile _BYTE_FIELD __near *)0xF3D7)

#define AL11MIN (*(volatile unsigned char __near *)0xF3DB)
#define _B_AL11MIN (*(volatile _BYTE_FIELD __near *)0xF3DB)

#define AL11HOUR (*(volatile unsigned char __near *)0xF3DC)
#define _B_AL11HOUR (*(volatile _BYTE_FIELD __near *)0xF3DC)

#define AL11DAY (*(volatile unsigned char __near *)0xF3DD)
#define _B_AL11DAY (*(volatile _BYTE_FIELD __near *)0xF3DD)

#define AL11MON (*(volatile unsigned char __near *)0xF3DE)
#define _B_AL11MON (*(volatile _BYTE_FIELD __near *)0xF3DE)

#define RTC2SEC (*(volatile unsigned char __near *)0xF3E0)
#define _B_RTC2SEC (*(volatile _BYTE_FIELD __near *)0xF3E0)

#define RTC2MIN (*(volatile unsigned char __near *)0xF3E1)
#define _B_RTC2MIN (*(volatile _BYTE_FIELD __near *)0xF3E1)

#define RTC2HOUR (*(volatile unsigned char __near *)0xF3E2)
#define _B_RTC2HOUR (*(volatile _BYTE_FIELD __near *)0xF3E2)

#define RTC2WEEK (*(volatile unsigned char __near *)0xF3E3)
#define _B_RTC2WEEK (*(volatile _BYTE_FIELD __near *)0xF3E3)

#define RTC2DAY (*(volatile unsigned char __near *)0xF3E4)
#define _B_RTC2DAY (*(volatile _BYTE_FIELD __near *)0xF3E4)

#define RTC2MON (*(volatile unsigned char __near *)0xF3E5)
#define _B_RTC2MON (*(volatile _BYTE_FIELD __near *)0xF3E5)

#define RTC2YEAR (*(volatile unsigned char __near *)0xF3E6)
#define _B_RTC2YEAR (*(volatile _BYTE_FIELD __near *)0xF3E6)

#define RTC2CON (*(volatile unsigned char __near *)0xF3E7)
#define _B_RTC2CON (*(volatile _BYTE_FIELD __near *)0xF3E7)

#define AL12MIN (*(volatile unsigned char __near *)0xF3EB)
#define _B_AL12MIN (*(volatile _BYTE_FIELD __near *)0xF3EB)

#define AL12HOUR (*(volatile unsigned char __near *)0xF3EC)
#define _B_AL12HOUR (*(volatile _BYTE_FIELD __near *)0xF3EC)

#define AL12DAY (*(volatile unsigned char __near *)0xF3ED)
#define _B_AL12DAY (*(volatile _BYTE_FIELD __near *)0xF3ED)

#define AL12MON (*(volatile unsigned char __near *)0xF3EE)
#define _B_AL12MON (*(volatile _BYTE_FIELD __near *)0xF3EE)

#define FT0P (*(volatile unsigned int __near *)0xF400)

#define FT0EA (*(volatile unsigned int __near *)0xF402)

#define FT0EB (*(volatile unsigned int __near *)0xF404)

#define FT0DT (*(volatile unsigned int __near *)0xF406)

#define FT0C (*(volatile unsigned int __near *)0xF408)

#define FT0CON0 (*(volatile unsigned char __near *)0xF40A)
#define _B_FT0CON0 (*(volatile _BYTE_FIELD __near *)0xF40A)

#define FT0CON1 (*(volatile unsigned char __near *)0xF40B)
#define _B_FT0CON1 (*(volatile _BYTE_FIELD __near *)0xF40B)

#define FT0MOD (*(volatile unsigned int __near *)0xF40C)

#define FT0MODL (*(volatile unsigned char __near *)0xF40C)
#define _B_FT0MODL (*(volatile _BYTE_FIELD __near *)0xF40C)

#define FT0MODH (*(volatile unsigned char __near *)0xF40D)
#define _B_FT0MODH (*(volatile _BYTE_FIELD __near *)0xF40D)

#define FT0CLK (*(volatile unsigned int __near *)0xF40E)

#define FT0CLKL (*(volatile unsigned char __near *)0xF40E)
#define _B_FT0CLKL (*(volatile _BYTE_FIELD __near *)0xF40E)

#define FT0CLKH (*(volatile unsigned char __near *)0xF40F)
#define _B_FT0CLKH (*(volatile _BYTE_FIELD __near *)0xF40F)

#define FT0TRG0 (*(volatile unsigned int __near *)0xF410)

#define FT0TRG0L (*(volatile unsigned char __near *)0xF410)
#define _B_FT0TRG0L (*(volatile _BYTE_FIELD __near *)0xF410)

#define FT0TRG0H (*(volatile unsigned char __near *)0xF411)
#define _B_FT0TRG0H (*(volatile _BYTE_FIELD __near *)0xF411)

#define FT0TRG1 (*(volatile unsigned int __near *)0xF412)

#define FT0TRG1L (*(volatile unsigned char __near *)0xF412)
#define _B_FT0TRG1L (*(volatile _BYTE_FIELD __near *)0xF412)

#define FT0TRG1H (*(volatile unsigned char __near *)0xF413)

#define FT0INTE (*(volatile unsigned int __near *)0xF418)

#define FT0INTEL (*(volatile unsigned char __near *)0xF418)
#define _B_FT0INTEL (*(volatile _BYTE_FIELD __near *)0xF418)

#define FT0INTEH (*(volatile unsigned char __near *)0xF419)
#define _B_FT0INTEH (*(volatile _BYTE_FIELD __near *)0xF419)

#define FT0INTS (*(volatile unsigned int __near *)0xF41A)

#define FT0INTSL (*(volatile unsigned char __near *)0xF41A)
#define _B_FT0INTSL (*(volatile _BYTE_FIELD __near *)0xF41A)

#define FT0INTC (*(volatile unsigned int __near *)0xF41C)

#define FT0INTCL (*(volatile unsigned char __near *)0xF41C)
#define _B_FT0INTCL (*(volatile _BYTE_FIELD __near *)0xF41C)

#define FT0INTCH (*(volatile unsigned char __near *)0xF41D)
#define _B_FT0INTCH (*(volatile _BYTE_FIELD __near *)0xF41D)

#define FT1P (*(volatile unsigned int __near *)0xF420)

#define FT1EA (*(volatile unsigned int __near *)0xF422)

#define FT1EB (*(volatile unsigned int __near *)0xF424)

#define FT1DT (*(volatile unsigned int __near *)0xF426)

#define FT1C (*(volatile unsigned int __near *)0xF428)

#define FT1CON0 (*(volatile unsigned char __near *)0xF42A)
#define _B_FT1CON0 (*(volatile _BYTE_FIELD __near *)0xF42A)

#define FT1CON1 (*(volatile unsigned char __near *)0xF42B)
#define _B_FT1CON1 (*(volatile _BYTE_FIELD __near *)0xF42B)

#define FT1MOD (*(volatile unsigned int __near *)0xF42C)

#define FT1MODL (*(volatile unsigned char __near *)0xF42C)
#define _B_FT1MODL (*(volatile _BYTE_FIELD __near *)0xF42C)

#define FT1MODH (*(volatile unsigned char __near *)0xF42D)
#define _B_FT1MODH (*(volatile _BYTE_FIELD __near *)0xF42D)

#define FT1CLK (*(volatile unsigned int __near *)0xF42E)

#define FT1CLKL (*(volatile unsigned char __near *)0xF42E)
#define _B_FT1CLKL (*(volatile _BYTE_FIELD __near *)0xF42E)

#define FT1CLKH (*(volatile unsigned char __near *)0xF42F)
#define _B_FT1CLKH (*(volatile _BYTE_FIELD __near *)0xF42F)

#define FT1TRG0 (*(volatile unsigned int __near *)0xF430)

#define FT1TRG0L (*(volatile unsigned char __near *)0xF430)
#define _B_FT1TRG0L (*(volatile _BYTE_FIELD __near *)0xF430)

#define FT1TRG0H (*(volatile unsigned char __near *)0xF431)
#define _B_FT1TRG0H (*(volatile _BYTE_FIELD __near *)0xF431)

#define FT1TRG1 (*(volatile unsigned int __near *)0xF432)

#define FT1TRG1L (*(volatile unsigned char __near *)0xF432)
#define _B_FT1TRG1L (*(volatile _BYTE_FIELD __near *)0xF432)

#define FT1TRG1H (*(volatile unsigned char __near *)0xF433)

#define FT1INTE (*(volatile unsigned int __near *)0xF438)

#define FT1INTEL (*(volatile unsigned char __near *)0xF438)
#define _B_FT1INTEL (*(volatile _BYTE_FIELD __near *)0xF438)

#define FT1INTEH (*(volatile unsigned char __near *)0xF439)
#define _B_FT1INTEH (*(volatile _BYTE_FIELD __near *)0xF439)

#define FT1INTS (*(volatile unsigned int __near *)0xF43A)

#define FT1INTSL (*(volatile unsigned char __near *)0xF43A)
#define _B_FT1INTSL (*(volatile _BYTE_FIELD __near *)0xF43A)

#define FT1INTC (*(volatile unsigned int __near *)0xF43C)

#define FT1INTCL (*(volatile unsigned char __near *)0xF43C)
#define _B_FT1INTCL (*(volatile _BYTE_FIELD __near *)0xF43C)

#define FT1INTCH (*(volatile unsigned char __near *)0xF43D)
#define _B_FT1INTCH (*(volatile _BYTE_FIELD __near *)0xF43D)

#define FT2P (*(volatile unsigned int __near *)0xF440)

#define FT2EA (*(volatile unsigned int __near *)0xF442)

#define FT2EB (*(volatile unsigned int __near *)0xF444)

#define FT2DT (*(volatile unsigned int __near *)0xF446)

#define FT2C (*(volatile unsigned int __near *)0xF448)

#define FT2CON0 (*(volatile unsigned char __near *)0xF44A)
#define _B_FT2CON0 (*(volatile _BYTE_FIELD __near *)0xF44A)

#define FT2CON1 (*(volatile unsigned char __near *)0xF44B)
#define _B_FT2CON1 (*(volatile _BYTE_FIELD __near *)0xF44B)

#define FT2MOD (*(volatile unsigned int __near *)0xF44C)

#define FT2MODL (*(volatile unsigned char __near *)0xF44C)
#define _B_FT2MODL (*(volatile _BYTE_FIELD __near *)0xF44C)

#define FT2MODH (*(volatile unsigned char __near *)0xF44D)
#define _B_FT2MODH (*(volatile _BYTE_FIELD __near *)0xF44D)

#define FT2CLK (*(volatile unsigned int __near *)0xF44E)

#define FT2CLKL (*(volatile unsigned char __near *)0xF44E)
#define _B_FT2CLKL (*(volatile _BYTE_FIELD __near *)0xF44E)

#define FT2CLKH (*(volatile unsigned char __near *)0xF44F)
#define _B_FT2CLKH (*(volatile _BYTE_FIELD __near *)0xF44F)

#define FT2TRG0 (*(volatile unsigned int __near *)0xF450)

#define FT2TRG0L (*(volatile unsigned char __near *)0xF450)
#define _B_FT2TRG0L (*(volatile _BYTE_FIELD __near *)0xF450)

#define FT2TRG0H (*(volatile unsigned char __near *)0xF451)
#define _B_FT2TRG0H (*(volatile _BYTE_FIELD __near *)0xF451)

#define FT2TRG1 (*(volatile unsigned int __near *)0xF452)

#define FT2TRG1L (*(volatile unsigned char __near *)0xF452)
#define _B_FT2TRG1L (*(volatile _BYTE_FIELD __near *)0xF452)

#define FT2TRG1H (*(volatile unsigned char __near *)0xF453)

#define FT2INTE (*(volatile unsigned int __near *)0xF458)

#define FT2INTEL (*(volatile unsigned char __near *)0xF458)
#define _B_FT2INTEL (*(volatile _BYTE_FIELD __near *)0xF458)

#define FT2INTEH (*(volatile unsigned char __near *)0xF459)
#define _B_FT2INTEH (*(volatile _BYTE_FIELD __near *)0xF459)

#define FT2INTS (*(volatile unsigned int __near *)0xF45A)

#define FT2INTSL (*(volatile unsigned char __near *)0xF45A)
#define _B_FT2INTSL (*(volatile _BYTE_FIELD __near *)0xF45A)

#define FT2INTC (*(volatile unsigned int __near *)0xF45C)

#define FT2INTCL (*(volatile unsigned char __near *)0xF45C)
#define _B_FT2INTCL (*(volatile _BYTE_FIELD __near *)0xF45C)

#define FT2INTCH (*(volatile unsigned char __near *)0xF45D)
#define _B_FT2INTCH (*(volatile _BYTE_FIELD __near *)0xF45D)

#define FT3P (*(volatile unsigned int __near *)0xF460)

#define FT3EA (*(volatile unsigned int __near *)0xF462)

#define FT3EB (*(volatile unsigned int __near *)0xF464)

#define FT3DT (*(volatile unsigned int __near *)0xF466)

#define FT3C (*(volatile unsigned int __near *)0xF468)

#define FT3CON0 (*(volatile unsigned char __near *)0xF46A)
#define _B_FT3CON0 (*(volatile _BYTE_FIELD __near *)0xF46A)

#define FT3CON1 (*(volatile unsigned char __near *)0xF46B)
#define _B_FT3CON1 (*(volatile _BYTE_FIELD __near *)0xF46B)

#define FT3MOD (*(volatile unsigned int __near *)0xF46C)

#define FT3MODL (*(volatile unsigned char __near *)0xF46C)
#define _B_FT3MODL (*(volatile _BYTE_FIELD __near *)0xF46C)

#define FT3MODH (*(volatile unsigned char __near *)0xF46D)
#define _B_FT3MODH (*(volatile _BYTE_FIELD __near *)0xF46D)

#define FT3CLK (*(volatile unsigned int __near *)0xF46E)

#define FT3CLKL (*(volatile unsigned char __near *)0xF46E)
#define _B_FT3CLKL (*(volatile _BYTE_FIELD __near *)0xF46E)

#define FT3CLKH (*(volatile unsigned char __near *)0xF46F)
#define _B_FT3CLKH (*(volatile _BYTE_FIELD __near *)0xF46F)

#define FT3TRG0 (*(volatile unsigned int __near *)0xF470)

#define FT3TRG0L (*(volatile unsigned char __near *)0xF470)
#define _B_FT3TRG0L (*(volatile _BYTE_FIELD __near *)0xF470)

#define FT3TRG0H (*(volatile unsigned char __near *)0xF471)
#define _B_FT3TRG0H (*(volatile _BYTE_FIELD __near *)0xF471)

#define FT3TRG1 (*(volatile unsigned int __near *)0xF472)

#define FT3TRG1L (*(volatile unsigned char __near *)0xF472)
#define _B_FT3TRG1L (*(volatile _BYTE_FIELD __near *)0xF472)

#define FT3TRG1H (*(volatile unsigned char __near *)0xF473)

#define FT3INTE (*(volatile unsigned int __near *)0xF478)

#define FT3INTEL (*(volatile unsigned char __near *)0xF478)
#define _B_FT3INTEL (*(volatile _BYTE_FIELD __near *)0xF478)

#define FT3INTEH (*(volatile unsigned char __near *)0xF479)
#define _B_FT3INTEH (*(volatile _BYTE_FIELD __near *)0xF479)

#define FT3INTS (*(volatile unsigned int __near *)0xF47A)

#define FT3INTSL (*(volatile unsigned char __near *)0xF47A)
#define _B_FT3INTSL (*(volatile _BYTE_FIELD __near *)0xF47A)

#define FT3INTC (*(volatile unsigned int __near *)0xF47C)

#define FT3INTCL (*(volatile unsigned char __near *)0xF47C)
#define _B_FT3INTCL (*(volatile _BYTE_FIELD __near *)0xF47C)

#define FT3INTCH (*(volatile unsigned char __near *)0xF47D)
#define _B_FT3INTCH (*(volatile _BYTE_FIELD __near *)0xF47D)

#define FTO01SL (*(volatile unsigned int __near *)0xF480)

#define FTO0SL (*(volatile unsigned char __near *)0xF480)
#define _B_FTO0SL (*(volatile _BYTE_FIELD __near *)0xF480)

#define FTO1SL (*(volatile unsigned char __near *)0xF481)
#define _B_FTO1SL (*(volatile _BYTE_FIELD __near *)0xF481)

#define FTO23SL (*(volatile unsigned int __near *)0xF482)

#define FTO2SL (*(volatile unsigned char __near *)0xF482)
#define _B_FTO2SL (*(volatile _BYTE_FIELD __near *)0xF482)

#define FTO3SL (*(volatile unsigned char __near *)0xF483)
#define _B_FTO3SL (*(volatile _BYTE_FIELD __near *)0xF483)

#define FTO45SL (*(volatile unsigned int __near *)0xF484)

#define FTO4SL (*(volatile unsigned char __near *)0xF484)
#define _B_FTO4SL (*(volatile _BYTE_FIELD __near *)0xF484)

#define FTO5SL (*(volatile unsigned char __near *)0xF485)
#define _B_FTO5SL (*(volatile _BYTE_FIELD __near *)0xF485)

#define FTO67SL (*(volatile unsigned int __near *)0xF486)

#define FTO6SL (*(volatile unsigned char __near *)0xF486)
#define _B_FTO6SL (*(volatile _BYTE_FIELD __near *)0xF486)

#define FTO7SL (*(volatile unsigned char __near *)0xF487)
#define _B_FTO7SL (*(volatile _BYTE_FIELD __near *)0xF487)

#define FTO89SL (*(volatile unsigned int __near *)0xF488)

#define FTO8SL (*(volatile unsigned char __near *)0xF488)
#define _B_FTO8SL (*(volatile _BYTE_FIELD __near *)0xF488)

#define FTO9SL (*(volatile unsigned char __near *)0xF489)
#define _B_FTO9SL (*(volatile _BYTE_FIELD __near *)0xF489)

#define FTOABSL (*(volatile unsigned int __near *)0xF48A)

#define FTOASL (*(volatile unsigned char __near *)0xF48A)
#define _B_FTOASL (*(volatile _BYTE_FIELD __near *)0xF48A)

#define FTOBSL (*(volatile unsigned char __near *)0xF48B)
#define _B_FTOBSL (*(volatile _BYTE_FIELD __near *)0xF48B)

#define FTOCDSL (*(volatile unsigned int __near *)0xF48C)

#define FTOCSL (*(volatile unsigned char __near *)0xF48C)
#define _B_FTOCSL (*(volatile _BYTE_FIELD __near *)0xF48C)

#define FTODSL (*(volatile unsigned char __near *)0xF48D)
#define _B_FTODSL (*(volatile _BYTE_FIELD __near *)0xF48D)

#define FTOEFSL (*(volatile unsigned int __near *)0xF48E)

#define FTOESL (*(volatile unsigned char __near *)0xF48E)
#define _B_FTOESL (*(volatile _BYTE_FIELD __near *)0xF48E)

#define FTOFSL (*(volatile unsigned char __near *)0xF48F)
#define _B_FTOFSL (*(volatile _BYTE_FIELD __near *)0xF48F)

#define SIO0BUF (*(volatile unsigned int __near *)0xF700)

#define SIO0BUFL (*(volatile unsigned char __near *)0xF700)
#define _B_SIO0BUFL (*(volatile _BYTE_FIELD __near *)0xF700)

#define SIO0BUFH (*(volatile unsigned char __near *)0xF701)
#define _B_SIO0BUFH (*(volatile _BYTE_FIELD __near *)0xF701)

#define SIO0CON (*(volatile unsigned char __near *)0xF702)
#define _B_SIO0CON (*(volatile _BYTE_FIELD __near *)0xF702)

#define SIO0MOD (*(volatile unsigned int __near *)0xF704)

#define SIO0MOD0 (*(volatile unsigned char __near *)0xF704)
#define _B_SIO0MOD0 (*(volatile _BYTE_FIELD __near *)0xF704)

#define SIO0MOD1 (*(volatile unsigned char __near *)0xF705)
#define _B_SIO0MOD1 (*(volatile _BYTE_FIELD __near *)0xF705)

#define UA0BUF (*(volatile unsigned char __near *)0xF710)
#define _B_UA0BUF (*(volatile _BYTE_FIELD __near *)0xF710)

#define UA0CON (*(volatile unsigned char __near *)0xF711)
#define _B_UA0CON (*(volatile _BYTE_FIELD __near *)0xF711)

#define UA0MOD (*(volatile unsigned int __near *)0xF712)

#define UA0MOD0 (*(volatile unsigned char __near *)0xF712)
#define _B_UA0MOD0 (*(volatile _BYTE_FIELD __near *)0xF712)

#define UA0MOD1 (*(volatile unsigned char __near *)0xF713)
#define _B_UA0MOD1 (*(volatile _BYTE_FIELD __near *)0xF713)

#define UA0BRT (*(volatile unsigned int __near *)0xF714)

#define UA0BRTL (*(volatile unsigned char __near *)0xF714)
#define _B_UA0BRTL (*(volatile _BYTE_FIELD __near *)0xF714)

#define UA0BRTH (*(volatile unsigned char __near *)0xF715)
#define _B_UA0BRTH (*(volatile _BYTE_FIELD __near *)0xF715)

#define UA0STAT (*(volatile unsigned char __near *)0xF716)
#define _B_UA0STAT (*(volatile _BYTE_FIELD __near *)0xF716)

#define UA1BUF (*(volatile unsigned char __near *)0xF718)
#define _B_UA1BUF (*(volatile _BYTE_FIELD __near *)0xF718)

#define UA1CON (*(volatile unsigned char __near *)0xF719)
#define _B_UA1CON (*(volatile _BYTE_FIELD __near *)0xF719)

#define UA1STAT (*(volatile unsigned char __near *)0xF71E)
#define _B_UA1STAT (*(volatile _BYTE_FIELD __near *)0xF71E)

#define I2F0SAD (*(volatile unsigned int __near *)0xF720)

#define I2F0SADL (*(volatile unsigned char __near *)0xF720)
#define _B_I2F0SADL (*(volatile _BYTE_FIELD __near *)0xF720)

#define I2F0SADH (*(volatile unsigned char __near *)0xF721)
#define _B_I2F0SADH (*(volatile _BYTE_FIELD __near *)0xF721)

#define I2F0CTL (*(volatile unsigned int __near *)0xF722)

#define I2F0CTLL (*(volatile unsigned char __near *)0xF722)
#define _B_I2F0CTLL (*(volatile _BYTE_FIELD __near *)0xF722)

#define I2F0CTLH (*(volatile unsigned char __near *)0xF723)
#define _B_I2F0CTLH (*(volatile _BYTE_FIELD __near *)0xF723)

#define I2F0SR (*(volatile unsigned int __near *)0xF724)

#define I2F0SRL (*(volatile unsigned char __near *)0xF724)
#define _B_I2F0SRL (*(volatile _BYTE_FIELD __near *)0xF724)

#define I2F0SRH (*(volatile unsigned char __near *)0xF725)
#define _B_I2F0SRH (*(volatile _BYTE_FIELD __near *)0xF725)

#define I2F0DR (*(volatile unsigned int __near *)0xF726)

#define I2F0DRL (*(volatile unsigned char __near *)0xF726)
#define _B_I2F0DRL (*(volatile _BYTE_FIELD __near *)0xF726)

#define I2F0DRH (*(volatile unsigned char __near *)0xF727)

#define I2F0MON (*(volatile unsigned int __near *)0xF728)

#define I2F0MONL (*(volatile unsigned char __near *)0xF728)
#define _B_I2F0MONL (*(volatile _BYTE_FIELD __near *)0xF728)

#define I2F0MONH (*(volatile unsigned char __near *)0xF729)

#define I2F0BC (*(volatile unsigned int __near *)0xF72A)

#define I2F0BCL (*(volatile unsigned char __near *)0xF72A)
#define _B_I2F0BCL (*(volatile _BYTE_FIELD __near *)0xF72A)

#define I2F0BCH (*(volatile unsigned char __near *)0xF72B)

#define I2F0MOD (*(volatile unsigned int __near *)0xF72C)

#define I2F0MODL (*(volatile unsigned char __near *)0xF72C)
#define _B_I2F0MODL (*(volatile _BYTE_FIELD __near *)0xF72C)

#define I2F0MODH (*(volatile unsigned char __near *)0xF72D)

#define I2F0BSV (*(volatile unsigned int __near *)0xF72E)

#define I2F0BSVL (*(volatile unsigned char __near *)0xF72E)
#define _B_I2F0BSVL (*(volatile _BYTE_FIELD __near *)0xF72E)

#define I2F0BSVH (*(volatile unsigned char __near *)0xF72F)
#define _B_I2F0BSVH (*(volatile _BYTE_FIELD __near *)0xF72F)

#define I2F0BSB (*(volatile unsigned int __near *)0xF730)

#define I2F0BSBL (*(volatile unsigned char __near *)0xF730)
#define _B_I2F0BSBL (*(volatile _BYTE_FIELD __near *)0xF730)

#define I2F0BSBH (*(volatile unsigned char __near *)0xF731)
#define _B_I2F0BSBH (*(volatile _BYTE_FIELD __near *)0xF731)

#define I2F0BFR (*(volatile unsigned int __near *)0xF732)

#define I2F0BFRL (*(volatile unsigned char __near *)0xF732)
#define _B_I2F0BFRL (*(volatile _BYTE_FIELD __near *)0xF732)

#define I2F0BFRH (*(volatile unsigned char __near *)0xF733)
#define _B_I2F0BFRH (*(volatile _BYTE_FIELD __near *)0xF733)

#define I2F0BCT (*(volatile unsigned int __near *)0xF734)

#define I2F0BCTL (*(volatile unsigned char __near *)0xF734)
#define _B_I2F0BCTL (*(volatile _BYTE_FIELD __near *)0xF734)

#define I2F0BCTH (*(volatile unsigned char __near *)0xF735)

#define I2F0BMK (*(volatile unsigned int __near *)0xF736)

#define I2F0BMKL (*(volatile unsigned char __near *)0xF736)
#define _B_I2F0BMKL (*(volatile _BYTE_FIELD __near *)0xF736)

#define I2F0BMKH (*(volatile unsigned char __near *)0xF737)

#define I2F0BSR (*(volatile unsigned int __near *)0xF738)

#define I2F0BSRL (*(volatile unsigned char __near *)0xF738)
#define _B_I2F0BSRL (*(volatile _BYTE_FIELD __near *)0xF738)

#define I2F0BSRH (*(volatile unsigned char __near *)0xF739)

#define I2F0BLV (*(volatile unsigned int __near *)0xF73A)

#define I2F0BLVL (*(volatile unsigned char __near *)0xF73A)
#define _B_I2F0BLVL (*(volatile _BYTE_FIELD __near *)0xF73A)

#define I2F0BLVH (*(volatile unsigned char __near *)0xF73B)

#define I2F0TMR (*(volatile unsigned int __near *)0xF744)

#define I2F0TMRL (*(volatile unsigned char __near *)0xF744)
#define _B_I2F0TMRL (*(volatile _BYTE_FIELD __near *)0xF744)

#define I2F0TMRH (*(volatile unsigned char __near *)0xF745)
#define _B_I2F0TMRH (*(volatile _BYTE_FIELD __near *)0xF745)

#define I2F0NF (*(volatile unsigned int __near *)0xF748)

#define I2F0NFL (*(volatile unsigned char __near *)0xF748)
#define _B_I2F0NFL (*(volatile _BYTE_FIELD __near *)0xF748)

#define I2F0NFH (*(volatile unsigned char __near *)0xF749)

#define I2F0IU (*(volatile unsigned int __near *)0xF74E)

#define I2F0IUL (*(volatile unsigned char __near *)0xF74E)
#define _B_I2F0IUL (*(volatile _BYTE_FIELD __near *)0xF74E)

#define I2F0IUH (*(volatile unsigned char __near *)0xF74F)

#define I2C1RD (*(volatile unsigned char __near *)0xF750)
#define _B_I2C1RD (*(volatile _BYTE_FIELD __near *)0xF750)

#define I2C1SA (*(volatile unsigned char __near *)0xF752)
#define _B_I2C1SA (*(volatile _BYTE_FIELD __near *)0xF752)

#define I2C1TD (*(volatile unsigned char __near *)0xF754)
#define _B_I2C1TD (*(volatile _BYTE_FIELD __near *)0xF754)

#define I2C1CON (*(volatile unsigned int __near *)0xF756)

#define I2C1CON0 (*(volatile unsigned char __near *)0xF756)
#define _B_I2C1CON0 (*(volatile _BYTE_FIELD __near *)0xF756)

#define I2C1CON1 (*(volatile unsigned char __near *)0xF757)

#define I2C1MOD (*(volatile unsigned int __near *)0xF758)

#define I2C1MODL (*(volatile unsigned char __near *)0xF758)
#define _B_I2C1MODL (*(volatile _BYTE_FIELD __near *)0xF758)

#define I2C1MODH (*(volatile unsigned char __near *)0xF759)
#define _B_I2C1MODH (*(volatile _BYTE_FIELD __near *)0xF759)

#define I2C1STA (*(volatile unsigned int __near *)0xF75A)

#define I2C1STAL (*(volatile unsigned char __near *)0xF75A)
#define _B_I2C1STAL (*(volatile _BYTE_FIELD __near *)0xF75A)

#define I2C1STAH (*(volatile unsigned char __near *)0xF75B)

#define SF0CTRL (*(volatile unsigned int __near *)0xF780)

#define SF0CTRLL (*(volatile unsigned char __near *)0xF780)
#define _B_SF0CTRLL (*(volatile _BYTE_FIELD __near *)0xF780)

#define SF0CTRLH (*(volatile unsigned char __near *)0xF781)
#define _B_SF0CTRLH (*(volatile _BYTE_FIELD __near *)0xF781)

#define SF0INTC (*(volatile unsigned int __near *)0xF782)

#define SF0INTCL (*(volatile unsigned char __near *)0xF782)
#define _B_SF0INTCL (*(volatile _BYTE_FIELD __near *)0xF782)

#define SF0INTCH (*(volatile unsigned char __near *)0xF783)
#define _B_SF0INTCH (*(volatile _BYTE_FIELD __near *)0xF783)

#define SF0TRAC (*(volatile unsigned int __near *)0xF784)

#define SF0TRACL (*(volatile unsigned char __near *)0xF784)
#define _B_SF0TRACL (*(volatile _BYTE_FIELD __near *)0xF784)

#define SF0TRACH (*(volatile unsigned char __near *)0xF785)
#define _B_SF0TRACH (*(volatile _BYTE_FIELD __near *)0xF785)

#define SF0BRR (*(volatile unsigned int __near *)0xF786)

#define SF0BRRL (*(volatile unsigned char __near *)0xF786)
#define _B_SF0BRRL (*(volatile _BYTE_FIELD __near *)0xF786)

#define SF0BRRH (*(volatile unsigned char __near *)0xF787)
#define _B_SF0BRRH (*(volatile _BYTE_FIELD __near *)0xF787)

#define SF0SRR (*(volatile unsigned int __near *)0xF788)

#define SF0SRRL (*(volatile unsigned char __near *)0xF788)
#define _B_SF0SRRL (*(volatile _BYTE_FIELD __near *)0xF788)

#define SF0SRRH (*(volatile unsigned char __near *)0xF789)
#define _B_SF0SRRH (*(volatile _BYTE_FIELD __near *)0xF789)

#define SF0SRC (*(volatile unsigned int __near *)0xF78A)

#define SF0SRCL (*(volatile unsigned char __near *)0xF78A)
#define _B_SF0SRCL (*(volatile _BYTE_FIELD __near *)0xF78A)

#define SF0SRCH (*(volatile unsigned char __near *)0xF78B)
#define _B_SF0SRCH (*(volatile _BYTE_FIELD __near *)0xF78B)

#define SF0FSR (*(volatile unsigned int __near *)0xF78C)

#define SF0FSRL (*(volatile unsigned char __near *)0xF78C)
#define _B_SF0FSRL (*(volatile _BYTE_FIELD __near *)0xF78C)

#define SF0FSRH (*(volatile unsigned char __near *)0xF78D)
#define _B_SF0FSRH (*(volatile _BYTE_FIELD __near *)0xF78D)

#define SF0DWR (*(volatile unsigned int __near *)0xF78E)

#define SF0DWRL (*(volatile unsigned char __near *)0xF78E)
#define _B_SF0DWRL (*(volatile _BYTE_FIELD __near *)0xF78E)

#define SF0DWRH (*(volatile unsigned char __near *)0xF78F)
#define _B_SF0DWRH (*(volatile _BYTE_FIELD __near *)0xF78F)

#define SF0DRR (*(volatile unsigned int __near *)0xF790)

#define SF0DRRL (*(volatile unsigned char __near *)0xF790)
#define _B_SF0DRRL (*(volatile _BYTE_FIELD __near *)0xF790)

#define SF0DRRH (*(volatile unsigned char __near *)0xF791)
#define _B_SF0DRRH (*(volatile _BYTE_FIELD __near *)0xF791)

#define UAF1BUF (*(volatile unsigned int __near *)0xF7A0)

#define UAF1BUFL (*(volatile unsigned char __near *)0xF7A0)
#define _B_UAF1BUFL (*(volatile _BYTE_FIELD __near *)0xF7A0)

#define UAF1BUFH (*(volatile unsigned char __near *)0xF7A1)
#define _B_UAF1BUFH (*(volatile _BYTE_FIELD __near *)0xF7A1)

#define UAF1IER (*(volatile unsigned int __near *)0xF7A2)

#define UAF1IERL (*(volatile unsigned char __near *)0xF7A2)
#define _B_UAF1IERL (*(volatile _BYTE_FIELD __near *)0xF7A2)

#define UAF1IIR (*(volatile unsigned int __near *)0xF7A4)

#define UAF1IIRL (*(volatile unsigned char __near *)0xF7A4)
#define _B_UAF1IIRL (*(volatile _BYTE_FIELD __near *)0xF7A4)

#define UAF1MOD (*(volatile unsigned int __near *)0xF7A6)

#define UAF1MODL (*(volatile unsigned char __near *)0xF7A6)
#define _B_UAF1MODL (*(volatile _BYTE_FIELD __near *)0xF7A6)

#define UAF1MODH (*(volatile unsigned char __near *)0xF7A7)
#define _B_UAF1MODH (*(volatile _BYTE_FIELD __near *)0xF7A7)

#define UAF1LSR (*(volatile unsigned int __near *)0xF7A8)

#define UAF1LSRL (*(volatile unsigned char __near *)0xF7A8)
#define _B_UAF1LSRL (*(volatile _BYTE_FIELD __near *)0xF7A8)

#define UAF1LSRH (*(volatile unsigned char __near *)0xF7A9)
#define _B_UAF1LSRH (*(volatile _BYTE_FIELD __near *)0xF7A9)

#define UAF1CAJ (*(volatile unsigned int __near *)0xF7AA)

#define UAF1CAJL (*(volatile unsigned char __near *)0xF7AA)
#define _B_UAF1CAJL (*(volatile _BYTE_FIELD __near *)0xF7AA)

#define UAF1IRQ (*(volatile unsigned int __near *)0xF7AC)

#define UAF1IRQL (*(volatile unsigned char __near *)0xF7AC)
#define _B_UAF1IRQL (*(volatile _BYTE_FIELD __near *)0xF7AC)

#define UAF0BUF (*(volatile unsigned int __near *)0xF7C0)

#define UAF0BUFL (*(volatile unsigned char __near *)0xF7C0)
#define _B_UAF0BUFL (*(volatile _BYTE_FIELD __near *)0xF7C0)

#define UAF0BUFH (*(volatile unsigned char __near *)0xF7C1)
#define _B_UAF0BUFH (*(volatile _BYTE_FIELD __near *)0xF7C1)

#define UAF0IER (*(volatile unsigned int __near *)0xF7C2)

#define UAF0IERL (*(volatile unsigned char __near *)0xF7C2)
#define _B_UAF0IERL (*(volatile _BYTE_FIELD __near *)0xF7C2)

#define UAF0IIR (*(volatile unsigned int __near *)0xF7C4)

#define UAF0IIRL (*(volatile unsigned char __near *)0xF7C4)
#define _B_UAF0IIRL (*(volatile _BYTE_FIELD __near *)0xF7C4)

#define UAF0MOD (*(volatile unsigned int __near *)0xF7C6)

#define UAF0MODL (*(volatile unsigned char __near *)0xF7C6)
#define _B_UAF0MODL (*(volatile _BYTE_FIELD __near *)0xF7C6)

#define UAF0MODH (*(volatile unsigned char __near *)0xF7C7)
#define _B_UAF0MODH (*(volatile _BYTE_FIELD __near *)0xF7C7)

#define UAF0LSR (*(volatile unsigned int __near *)0xF7C8)

#define UAF0LSRL (*(volatile unsigned char __near *)0xF7C8)
#define _B_UAF0LSRL (*(volatile _BYTE_FIELD __near *)0xF7C8)

#define UAF0LSRH (*(volatile unsigned char __near *)0xF7C9)
#define _B_UAF0LSRH (*(volatile _BYTE_FIELD __near *)0xF7C9)

#define UAF0CAJ (*(volatile unsigned int __near *)0xF7CA)

#define UAF0CAJL (*(volatile unsigned char __near *)0xF7CA)
#define _B_UAF0CAJL (*(volatile _BYTE_FIELD __near *)0xF7CA)

#define UAF0IRQ (*(volatile unsigned int __near *)0xF7CC)

#define UAF0IRQL (*(volatile unsigned char __near *)0xF7CC)
#define _B_UAF0IRQL (*(volatile _BYTE_FIELD __near *)0xF7CC)

#define I2F1SAD (*(volatile unsigned int __near *)0xF7D0)

#define I2F1SADL (*(volatile unsigned char __near *)0xF7D0)
#define _B_I2F1SADL (*(volatile _BYTE_FIELD __near *)0xF7D0)

#define I2F1SADH (*(volatile unsigned char __near *)0xF7D1)
#define _B_I2F1SADH (*(volatile _BYTE_FIELD __near *)0xF7D1)

#define I2F1CTL (*(volatile unsigned int __near *)0xF7D2)

#define I2F1CTLL (*(volatile unsigned char __near *)0xF7D2)
#define _B_I2F1CTLL (*(volatile _BYTE_FIELD __near *)0xF7D2)

#define I2F1CTLH (*(volatile unsigned char __near *)0xF7D3)
#define _B_I2F1CTLH (*(volatile _BYTE_FIELD __near *)0xF7D3)

#define I2F1SR (*(volatile unsigned int __near *)0xF7D4)

#define I2F1SRL (*(volatile unsigned char __near *)0xF7D4)
#define _B_I2F1SRL (*(volatile _BYTE_FIELD __near *)0xF7D4)

#define I2F1SRH (*(volatile unsigned char __near *)0xF7D5)
#define _B_I2F1SRH (*(volatile _BYTE_FIELD __near *)0xF7D5)

#define I2F1DR (*(volatile unsigned int __near *)0xF7D6)

#define I2F1DRL (*(volatile unsigned char __near *)0xF7D6)
#define _B_I2F1DRL (*(volatile _BYTE_FIELD __near *)0xF7D6)

#define I2F1DRH (*(volatile unsigned char __near *)0xF7D7)

#define I2F1MON (*(volatile unsigned int __near *)0xF7D8)

#define I2F1MONL (*(volatile unsigned char __near *)0xF7D8)
#define _B_I2F1MONL (*(volatile _BYTE_FIELD __near *)0xF7D8)

#define I2F1MONH (*(volatile unsigned char __near *)0xF7D9)

#define I2F1BC (*(volatile unsigned int __near *)0xF7DA)

#define I2F1BCL (*(volatile unsigned char __near *)0xF7DA)
#define _B_I2F1BCL (*(volatile _BYTE_FIELD __near *)0xF7DA)

#define I2F1BCH (*(volatile unsigned char __near *)0xF7DB)

#define I2F1MOD (*(volatile unsigned int __near *)0xF7DC)

#define I2F1MODL (*(volatile unsigned char __near *)0xF7DC)
#define _B_I2F1MODL (*(volatile _BYTE_FIELD __near *)0xF7DC)

#define I2F1MODH (*(volatile unsigned char __near *)0xF7DD)

#define I2F1BSV (*(volatile unsigned int __near *)0xF7DE)

#define I2F1BSVL (*(volatile unsigned char __near *)0xF7DE)
#define _B_I2F1BSVL (*(volatile _BYTE_FIELD __near *)0xF7DE)

#define I2F1BSVH (*(volatile unsigned char __near *)0xF7DF)
#define _B_I2F1BSVH (*(volatile _BYTE_FIELD __near *)0xF7DF)

#define I2F1BSB (*(volatile unsigned int __near *)0xF7E0)

#define I2F1BSBL (*(volatile unsigned char __near *)0xF7E0)
#define _B_I2F1BSBL (*(volatile _BYTE_FIELD __near *)0xF7E0)

#define I2F1BSBH (*(volatile unsigned char __near *)0xF7E1)
#define _B_I2F1BSBH (*(volatile _BYTE_FIELD __near *)0xF7E1)

#define I2F1BFR (*(volatile unsigned int __near *)0xF7E2)

#define I2F1BFRL (*(volatile unsigned char __near *)0xF7E2)
#define _B_I2F1BFRL (*(volatile _BYTE_FIELD __near *)0xF7E2)

#define I2F1BFRH (*(volatile unsigned char __near *)0xF7E3)
#define _B_I2F1BFRH (*(volatile _BYTE_FIELD __near *)0xF7E3)

#define I2F1BCT (*(volatile unsigned int __near *)0xF7E4)

#define I2F1BCTL (*(volatile unsigned char __near *)0xF7E4)
#define _B_I2F1BCTL (*(volatile _BYTE_FIELD __near *)0xF7E4)

#define I2F1BCTH (*(volatile unsigned char __near *)0xF7E5)

#define I2F1BMK (*(volatile unsigned int __near *)0xF7E6)

#define I2F1BMKL (*(volatile unsigned char __near *)0xF7E6)
#define _B_I2F1BMKL (*(volatile _BYTE_FIELD __near *)0xF7E6)

#define I2F1BMKH (*(volatile unsigned char __near *)0xF7E7)

#define I2F1BSR (*(volatile unsigned int __near *)0xF7E8)

#define I2F1BSRL (*(volatile unsigned char __near *)0xF7E8)
#define _B_I2F1BSRL (*(volatile _BYTE_FIELD __near *)0xF7E8)

#define I2F1BSRH (*(volatile unsigned char __near *)0xF7E9)

#define I2F1BLV (*(volatile unsigned int __near *)0xF7EA)

#define I2F1BLVL (*(volatile unsigned char __near *)0xF7EA)
#define _B_I2F1BLVL (*(volatile _BYTE_FIELD __near *)0xF7EA)

#define I2F1BLVH (*(volatile unsigned char __near *)0xF7EB)

#define I2F1TMR (*(volatile unsigned int __near *)0xF7F4)

#define I2F1TMRL (*(volatile unsigned char __near *)0xF7F4)
#define _B_I2F1TMRL (*(volatile _BYTE_FIELD __near *)0xF7F4)

#define I2F1TMRH (*(volatile unsigned char __near *)0xF7F5)
#define _B_I2F1TMRH (*(volatile _BYTE_FIELD __near *)0xF7F5)

#define I2F1NF (*(volatile unsigned int __near *)0xF7F8)

#define I2F1NFL (*(volatile unsigned char __near *)0xF7F8)
#define _B_I2F1NFL (*(volatile _BYTE_FIELD __near *)0xF7F8)

#define I2F1NFH (*(volatile unsigned char __near *)0xF7F9)

#define I2F1IU (*(volatile unsigned int __near *)0xF7FE)

#define I2F1IUL (*(volatile unsigned char __near *)0xF7FE)
#define _B_I2F1IUL (*(volatile _BYTE_FIELD __near *)0xF7FE)

#define I2F1IUH (*(volatile unsigned char __near *)0xF7FF)

#define RADCA0 (*(volatile unsigned int __near *)0xF800)

#define RADCA0L (*(volatile unsigned char __near *)0xF800)
#define _B_RADCA0L (*(volatile _BYTE_FIELD __near *)0xF800)

#define RADCA0H (*(volatile unsigned char __near *)0xF801)
#define _B_RADCA0H (*(volatile _BYTE_FIELD __near *)0xF801)

#define RADCA1 (*(volatile unsigned int __near *)0xF802)

#define RADCA1L (*(volatile unsigned char __near *)0xF802)
#define _B_RADCA1L (*(volatile _BYTE_FIELD __near *)0xF802)

#define RADCA1H (*(volatile unsigned char __near *)0xF803)

#define RADCB0 (*(volatile unsigned int __near *)0xF804)

#define RADCB0L (*(volatile unsigned char __near *)0xF804)
#define _B_RADCB0L (*(volatile _BYTE_FIELD __near *)0xF804)

#define RADCB0H (*(volatile unsigned char __near *)0xF805)
#define _B_RADCB0H (*(volatile _BYTE_FIELD __near *)0xF805)

#define RADCB1 (*(volatile unsigned int __near *)0xF806)

#define RADCB1L (*(volatile unsigned char __near *)0xF806)
#define _B_RADCB1L (*(volatile _BYTE_FIELD __near *)0xF806)

#define RADCB1H (*(volatile unsigned char __near *)0xF807)

#define RADMOD (*(volatile unsigned int __near *)0xF808)

#define RADMODL (*(volatile unsigned char __near *)0xF808)
#define _B_RADMODL (*(volatile _BYTE_FIELD __near *)0xF808)

#define RADMODH (*(volatile unsigned char __near *)0xF809)

#define RADCONL (*(volatile unsigned char __near *)0xF80A)
#define _B_RADCONL (*(volatile _BYTE_FIELD __near *)0xF80A)

#define SADR0 (*(volatile unsigned int __near *)0xF820)

#define SADR0L (*(volatile unsigned char __near *)0xF820)
#define _B_SADR0L (*(volatile _BYTE_FIELD __near *)0xF820)

#define SADR0H (*(volatile unsigned char __near *)0xF821)
#define _B_SADR0H (*(volatile _BYTE_FIELD __near *)0xF821)

#define SADR1 (*(volatile unsigned int __near *)0xF822)

#define SADR1L (*(volatile unsigned char __near *)0xF822)
#define _B_SADR1L (*(volatile _BYTE_FIELD __near *)0xF822)

#define SADR1H (*(volatile unsigned char __near *)0xF823)
#define _B_SADR1H (*(volatile _BYTE_FIELD __near *)0xF823)

#define SADR2 (*(volatile unsigned int __near *)0xF824)

#define SADR2L (*(volatile unsigned char __near *)0xF824)
#define _B_SADR2L (*(volatile _BYTE_FIELD __near *)0xF824)

#define SADR2H (*(volatile unsigned char __near *)0xF825)
#define _B_SADR2H (*(volatile _BYTE_FIELD __near *)0xF825)

#define SADR3 (*(volatile unsigned int __near *)0xF826)

#define SADR3L (*(volatile unsigned char __near *)0xF826)
#define _B_SADR3L (*(volatile _BYTE_FIELD __near *)0xF826)

#define SADR3H (*(volatile unsigned char __near *)0xF827)
#define _B_SADR3H (*(volatile _BYTE_FIELD __near *)0xF827)

#define SADR4 (*(volatile unsigned int __near *)0xF828)

#define SADR4L (*(volatile unsigned char __near *)0xF828)
#define _B_SADR4L (*(volatile _BYTE_FIELD __near *)0xF828)

#define SADR4H (*(volatile unsigned char __near *)0xF829)
#define _B_SADR4H (*(volatile _BYTE_FIELD __near *)0xF829)

#define SADR5 (*(volatile unsigned int __near *)0xF82A)

#define SADR5L (*(volatile unsigned char __near *)0xF82A)
#define _B_SADR5L (*(volatile _BYTE_FIELD __near *)0xF82A)

#define SADR5H (*(volatile unsigned char __near *)0xF82B)
#define _B_SADR5H (*(volatile _BYTE_FIELD __near *)0xF82B)

#define SADR6 (*(volatile unsigned int __near *)0xF82C)

#define SADR6L (*(volatile unsigned char __near *)0xF82C)
#define _B_SADR6L (*(volatile _BYTE_FIELD __near *)0xF82C)

#define SADR6H (*(volatile unsigned char __near *)0xF82D)
#define _B_SADR6H (*(volatile _BYTE_FIELD __near *)0xF82D)

#define SADR7 (*(volatile unsigned int __near *)0xF82E)

#define SADR7L (*(volatile unsigned char __near *)0xF82E)
#define _B_SADR7L (*(volatile _BYTE_FIELD __near *)0xF82E)

#define SADR7H (*(volatile unsigned char __near *)0xF82F)
#define _B_SADR7H (*(volatile _BYTE_FIELD __near *)0xF82F)

#define SADR8 (*(volatile unsigned int __near *)0xF830)

#define SADR8L (*(volatile unsigned char __near *)0xF830)
#define _B_SADR8L (*(volatile _BYTE_FIELD __near *)0xF830)

#define SADR8H (*(volatile unsigned char __near *)0xF831)
#define _B_SADR8H (*(volatile _BYTE_FIELD __near *)0xF831)

#define SADR9 (*(volatile unsigned int __near *)0xF832)

#define SADR9L (*(volatile unsigned char __near *)0xF832)
#define _B_SADR9L (*(volatile _BYTE_FIELD __near *)0xF832)

#define SADR9H (*(volatile unsigned char __near *)0xF833)
#define _B_SADR9H (*(volatile _BYTE_FIELD __near *)0xF833)

#define SADRA (*(volatile unsigned int __near *)0xF834)

#define SADRAL (*(volatile unsigned char __near *)0xF834)
#define _B_SADRAL (*(volatile _BYTE_FIELD __near *)0xF834)

#define SADRAH (*(volatile unsigned char __near *)0xF835)
#define _B_SADRAH (*(volatile _BYTE_FIELD __near *)0xF835)

#define SADRB (*(volatile unsigned int __near *)0xF836)

#define SADRBL (*(volatile unsigned char __near *)0xF836)
#define _B_SADRBL (*(volatile _BYTE_FIELD __near *)0xF836)

#define SADRBH (*(volatile unsigned char __near *)0xF837)
#define _B_SADRBH (*(volatile _BYTE_FIELD __near *)0xF837)

#define SADCON0 (*(volatile unsigned char __near *)0xF840)
#define _B_SADCON0 (*(volatile _BYTE_FIELD __near *)0xF840)

#define SADCON1 (*(volatile unsigned char __near *)0xF841)
#define _B_SADCON1 (*(volatile _BYTE_FIELD __near *)0xF841)

#define SADEN (*(volatile unsigned int __near *)0xF842)

#define SADENL (*(volatile unsigned char __near *)0xF842)
#define _B_SADENL (*(volatile _BYTE_FIELD __near *)0xF842)

#define SADENH (*(volatile unsigned char __near *)0xF843)
#define _B_SADENH (*(volatile _BYTE_FIELD __near *)0xF843)

#define SADTCH (*(volatile unsigned int __near *)0xF844)

#define SADTCHL (*(volatile unsigned char __near *)0xF844)
#define _B_SADTCHL (*(volatile _BYTE_FIELD __near *)0xF844)

#define SADTCHH (*(volatile unsigned char __near *)0xF845)
#define _B_SADTCHH (*(volatile _BYTE_FIELD __near *)0xF845)

#define SADTRG (*(volatile unsigned int __near *)0xF846)

#define SADTRGL (*(volatile unsigned char __near *)0xF846)
#define _B_SADTRGL (*(volatile _BYTE_FIELD __near *)0xF846)

#define SADTRGH (*(volatile unsigned char __near *)0xF847)
#define _B_SADTRGH (*(volatile _BYTE_FIELD __near *)0xF847)

#define SADCVT (*(volatile unsigned int __near *)0xF848)

#define SADCVTL (*(volatile unsigned char __near *)0xF848)
#define _B_SADCVTL (*(volatile _BYTE_FIELD __near *)0xF848)

#define SADCVTH (*(volatile unsigned char __near *)0xF849)
#define _B_SADCVTH (*(volatile _BYTE_FIELD __near *)0xF849)

#define MD0CON (*(volatile unsigned char __near *)0xF8C0)
#define _B_MD0CON (*(volatile _BYTE_FIELD __near *)0xF8C0)

#define MD0TMP (*(volatile unsigned char __near *)0xF8C1)
#define _B_MD0TMP (*(volatile _BYTE_FIELD __near *)0xF8C1)

#define MD0TL (*(volatile unsigned int __near *)0xF8C2)

#define MD0TON (*(volatile unsigned char __near *)0xF8C2)
#define _B_MD0TON (*(volatile _BYTE_FIELD __near *)0xF8C2)

#define MD0LEN (*(volatile unsigned char __near *)0xF8C3)
#define _B_MD0LEN (*(volatile _BYTE_FIELD __near *)0xF8C3)

#define VLSCON (*(volatile unsigned int __near *)0xF900)

#define VLSCONL (*(volatile unsigned char __near *)0xF900)
#define _B_VLSCONL (*(volatile _BYTE_FIELD __near *)0xF900)

#define VLSCONH (*(volatile unsigned char __near *)0xF901)
#define _B_VLSCONH (*(volatile _BYTE_FIELD __near *)0xF901)

#define VLSMOD (*(volatile unsigned int __near *)0xF902)

#define VLSMODL (*(volatile unsigned char __near *)0xF902)
#define _B_VLSMODL (*(volatile _BYTE_FIELD __near *)0xF902)

#define VLSMODH (*(volatile unsigned char __near *)0xF903)
#define _B_VLSMODH (*(volatile _BYTE_FIELD __near *)0xF903)

#define CMP0CON (*(volatile unsigned char __near *)0xF920)
#define _B_CMP0CON (*(volatile _BYTE_FIELD __near *)0xF920)

#define CMP0MOD (*(volatile unsigned int __near *)0xF922)

#define CMP0MODL (*(volatile unsigned char __near *)0xF922)
#define _B_CMP0MODL (*(volatile _BYTE_FIELD __near *)0xF922)

#define CMP0MODH (*(volatile unsigned char __near *)0xF923)
#define _B_CMP0MODH (*(volatile _BYTE_FIELD __near *)0xF923)

#define CMP1CON (*(volatile unsigned char __near *)0xF928)
#define _B_CMP1CON (*(volatile _BYTE_FIELD __near *)0xF928)

#define CMP1MOD (*(volatile unsigned int __near *)0xF92A)

#define CMP1MODL (*(volatile unsigned char __near *)0xF92A)
#define _B_CMP1MODL (*(volatile _BYTE_FIELD __near *)0xF92A)

#define CMP1MODH (*(volatile unsigned char __near *)0xF92B)
#define _B_CMP1MODH (*(volatile _BYTE_FIELD __near *)0xF92B)

#define P0EXI01 (*(volatile unsigned int __near *)0xF980)

#define P0EXI0 (*(volatile unsigned char __near *)0xF980)
#define _B_P0EXI0 (*(volatile _BYTE_FIELD __near *)0xF980)

#define P0EXI1 (*(volatile unsigned char __near *)0xF981)
#define _B_P0EXI1 (*(volatile _BYTE_FIELD __near *)0xF981)

#define P0EXI23 (*(volatile unsigned int __near *)0xF982)

#define P0EXI2 (*(volatile unsigned char __near *)0xF982)
#define _B_P0EXI2 (*(volatile _BYTE_FIELD __near *)0xF982)

#define P0EXI3 (*(volatile unsigned char __near *)0xF983)

#define P0IE (*(volatile unsigned char __near *)0xF984)
#define _B_P0IE (*(volatile _BYTE_FIELD __near *)0xF984)

#define P0IS (*(volatile unsigned char __near *)0xF985)
#define _B_P0IS (*(volatile _BYTE_FIELD __near *)0xF985)

#define P0IC (*(volatile unsigned char __near *)0xF986)
#define _B_P0IC (*(volatile _BYTE_FIELD __near *)0xF986)

#define P0IU (*(volatile unsigned char __near *)0xF987)
#define _B_P0IU (*(volatile _BYTE_FIELD __near *)0xF987)

#define P2EXI01 (*(volatile unsigned int __near *)0xF990)

#define P2EXI0 (*(volatile unsigned char __near *)0xF990)
#define _B_P2EXI0 (*(volatile _BYTE_FIELD __near *)0xF990)

#define P2EXI1 (*(volatile unsigned char __near *)0xF991)
#define _B_P2EXI1 (*(volatile _BYTE_FIELD __near *)0xF991)

#define P2IE (*(volatile unsigned char __near *)0xF994)
#define _B_P2IE (*(volatile _BYTE_FIELD __near *)0xF994)

#define P2IS (*(volatile unsigned char __near *)0xF995)
#define _B_P2IS (*(volatile _BYTE_FIELD __near *)0xF995)

#define P2IC (*(volatile unsigned char __near *)0xF996)
#define _B_P2IC (*(volatile _BYTE_FIELD __near *)0xF996)

#define P2IU (*(volatile unsigned char __near *)0xF997)
#define _B_P2IU (*(volatile _BYTE_FIELD __near *)0xF997)

#define P3EXI01 (*(volatile unsigned int __near *)0xF998)

#define P3EXI0 (*(volatile unsigned char __near *)0xF998)
#define _B_P3EXI0 (*(volatile _BYTE_FIELD __near *)0xF998)

#define P3EXI1 (*(volatile unsigned char __near *)0xF999)
#define _B_P3EXI1 (*(volatile _BYTE_FIELD __near *)0xF999)

#define P3EXI23 (*(volatile unsigned int __near *)0xF99A)

#define P3EXI2 (*(volatile unsigned char __near *)0xF99A)
#define _B_P3EXI2 (*(volatile _BYTE_FIELD __near *)0xF99A)

#define P3EXI3 (*(volatile unsigned char __near *)0xF99B)
#define _B_P3EXI3 (*(volatile _BYTE_FIELD __near *)0xF99B)

#define P3IE (*(volatile unsigned char __near *)0xF99C)
#define _B_P3IE (*(volatile _BYTE_FIELD __near *)0xF99C)

#define P3IS (*(volatile unsigned char __near *)0xF99D)
#define _B_P3IS (*(volatile _BYTE_FIELD __near *)0xF99D)

#define P3IC (*(volatile unsigned char __near *)0xF99E)
#define _B_P3IC (*(volatile _BYTE_FIELD __near *)0xF99E)

#define P3IU (*(volatile unsigned char __near *)0xF99F)
#define _B_P3IU (*(volatile _BYTE_FIELD __near *)0xF99F)

#define P4EXI01 (*(volatile unsigned int __near *)0xF9A0)

#define P4EXI0 (*(volatile unsigned char __near *)0xF9A0)
#define _B_P4EXI0 (*(volatile _BYTE_FIELD __near *)0xF9A0)

#define P4EXI1 (*(volatile unsigned char __near *)0xF9A1)
#define _B_P4EXI1 (*(volatile _BYTE_FIELD __near *)0xF9A1)

#define P4EXI23 (*(volatile unsigned int __near *)0xF9A2)

#define P4EXI2 (*(volatile unsigned char __near *)0xF9A2)
#define _B_P4EXI2 (*(volatile _BYTE_FIELD __near *)0xF9A2)

#define P4EXI3 (*(volatile unsigned char __near *)0xF9A3)
#define _B_P4EXI3 (*(volatile _BYTE_FIELD __near *)0xF9A3)

#define P4IE (*(volatile unsigned char __near *)0xF9A4)
#define _B_P4IE (*(volatile _BYTE_FIELD __near *)0xF9A4)

#define P4IS (*(volatile unsigned char __near *)0xF9A5)
#define _B_P4IS (*(volatile _BYTE_FIELD __near *)0xF9A5)

#define P4IC (*(volatile unsigned char __near *)0xF9A6)
#define _B_P4IC (*(volatile _BYTE_FIELD __near *)0xF9A6)

#define P4IU (*(volatile unsigned char __near *)0xF9A7)
#define _B_P4IU (*(volatile _BYTE_FIELD __near *)0xF9A7)

#define P5EXI01 (*(volatile unsigned int __near *)0xF9A8)

#define P5EXI0 (*(volatile unsigned char __near *)0xF9A8)
#define _B_P5EXI0 (*(volatile _BYTE_FIELD __near *)0xF9A8)

#define P5EXI1 (*(volatile unsigned char __near *)0xF9A9)
#define _B_P5EXI1 (*(volatile _BYTE_FIELD __near *)0xF9A9)

#define P5EXI23 (*(volatile unsigned int __near *)0xF9AA)

#define P5EXI2 (*(volatile unsigned char __near *)0xF9AA)
#define _B_P5EXI2 (*(volatile _BYTE_FIELD __near *)0xF9AA)

#define P5EXI3 (*(volatile unsigned char __near *)0xF9AB)
#define _B_P5EXI3 (*(volatile _BYTE_FIELD __near *)0xF9AB)

#define P5IE (*(volatile unsigned char __near *)0xF9AC)
#define _B_P5IE (*(volatile _BYTE_FIELD __near *)0xF9AC)

#define P5IS (*(volatile unsigned char __near *)0xF9AD)
#define _B_P5IS (*(volatile _BYTE_FIELD __near *)0xF9AD)

#define P5IC (*(volatile unsigned char __near *)0xF9AE)
#define _B_P5IC (*(volatile _BYTE_FIELD __near *)0xF9AE)

#define P5IU (*(volatile unsigned char __near *)0xF9AF)
#define _B_P5IU (*(volatile _BYTE_FIELD __near *)0xF9AF)

#define P7EXI01 (*(volatile unsigned int __near *)0xF9B8)

#define P7EXI0 (*(volatile unsigned char __near *)0xF9B8)
#define _B_P7EXI0 (*(volatile _BYTE_FIELD __near *)0xF9B8)

#define P7EXI1 (*(volatile unsigned char __near *)0xF9B9)
#define _B_P7EXI1 (*(volatile _BYTE_FIELD __near *)0xF9B9)

#define P7EXI23 (*(volatile unsigned int __near *)0xF9BA)

#define P7EXI2 (*(volatile unsigned char __near *)0xF9BA)
#define _B_P7EXI2 (*(volatile _BYTE_FIELD __near *)0xF9BA)

#define P7EXI3 (*(volatile unsigned char __near *)0xF9BB)
#define _B_P7EXI3 (*(volatile _BYTE_FIELD __near *)0xF9BB)

#define P7IE (*(volatile unsigned char __near *)0xF9BC)
#define _B_P7IE (*(volatile _BYTE_FIELD __near *)0xF9BC)

#define P7IS (*(volatile unsigned char __near *)0xF9BD)
#define _B_P7IS (*(volatile _BYTE_FIELD __near *)0xF9BD)

#define P7IC (*(volatile unsigned char __near *)0xF9BE)
#define _B_P7IC (*(volatile _BYTE_FIELD __near *)0xF9BE)

#define P7IU (*(volatile unsigned char __near *)0xF9BF)
#define _B_P7IU (*(volatile _BYTE_FIELD __near *)0xF9BF)

#define P8EXI01 (*(volatile unsigned int __near *)0xF9C0)

#define P8EXI0 (*(volatile unsigned char __near *)0xF9C0)
#define _B_P8EXI0 (*(volatile _BYTE_FIELD __near *)0xF9C0)

#define P8EXI1 (*(volatile unsigned char __near *)0xF9C1)
#define _B_P8EXI1 (*(volatile _BYTE_FIELD __near *)0xF9C1)

#define P8EXI23 (*(volatile unsigned int __near *)0xF9C2)

#define P8EXI2 (*(volatile unsigned char __near *)0xF9C2)
#define _B_P8EXI2 (*(volatile _BYTE_FIELD __near *)0xF9C2)

#define P8EXI3 (*(volatile unsigned char __near *)0xF9C3)
#define _B_P8EXI3 (*(volatile _BYTE_FIELD __near *)0xF9C3)

#define P8IE (*(volatile unsigned char __near *)0xF9C4)
#define _B_P8IE (*(volatile _BYTE_FIELD __near *)0xF9C4)

#define P8IS (*(volatile unsigned char __near *)0xF9C5)
#define _B_P8IS (*(volatile _BYTE_FIELD __near *)0xF9C5)

#define P8IC (*(volatile unsigned char __near *)0xF9C6)
#define _B_P8IC (*(volatile _BYTE_FIELD __near *)0xF9C6)

#define P8IU (*(volatile unsigned char __near *)0xF9C7)
#define _B_P8IU (*(volatile _BYTE_FIELD __near *)0xF9C7)

#define COMMSK0 (*(volatile unsigned int __near *)0xF9F0)

#define COMMSK0L (*(volatile unsigned char __near *)0xF9F0)
#define _B_COMMSK0L (*(volatile _BYTE_FIELD __near *)0xF9F0)

#define COMMSK0H (*(volatile unsigned char __near *)0xF9F1)
#define _B_COMMSK0H (*(volatile _BYTE_FIELD __near *)0xF9F1)

#define COMMSK1 (*(volatile unsigned int __near *)0xF9F2)

#define COMMSK1L (*(volatile unsigned char __near *)0xF9F2)
#define _B_COMMSK1L (*(volatile _BYTE_FIELD __near *)0xF9F2)

#define COMMSK1H (*(volatile unsigned char __near *)0xF9F3)
#define _B_COMMSK1H (*(volatile _BYTE_FIELD __near *)0xF9F3)

#define DSPR100W (*(volatile unsigned int __near *)0xFA00)

#define DSPR100 (*(volatile unsigned char __near *)0xFA00)

#define DSPR101 (*(volatile unsigned char __near *)0xFA01)

#define DSPR102W (*(volatile unsigned int __near *)0xFA02)

#define DSPR102 (*(volatile unsigned char __near *)0xFA02)

#define DSPR103 (*(volatile unsigned char __near *)0xFA03)

#define DSPR104W (*(volatile unsigned int __near *)0xFA04)

#define DSPR104 (*(volatile unsigned char __near *)0xFA04)

#define DSPR105 (*(volatile unsigned char __near *)0xFA05)

#define DSPR106W (*(volatile unsigned int __near *)0xFA06)

#define DSPR106 (*(volatile unsigned char __near *)0xFA06)

#define DSPR107 (*(volatile unsigned char __near *)0xFA07)

#define DSPR108W (*(volatile unsigned int __near *)0xFA08)

#define DSPR108 (*(volatile unsigned char __near *)0xFA08)

#define DSPR109 (*(volatile unsigned char __near *)0xFA09)

#define DSPR10AW (*(volatile unsigned int __near *)0xFA0A)

#define DSPR10A (*(volatile unsigned char __near *)0xFA0A)

#define DSPR10B (*(volatile unsigned char __near *)0xFA0B)

#define DSPR10CW (*(volatile unsigned int __near *)0xFA0C)

#define DSPR10C (*(volatile unsigned char __near *)0xFA0C)

#define DSPR10D (*(volatile unsigned char __near *)0xFA0D)

#define DSPR10EW (*(volatile unsigned int __near *)0xFA0E)

#define DSPR10E (*(volatile unsigned char __near *)0xFA0E)

#define DSPR10F (*(volatile unsigned char __near *)0xFA0F)

#define DSPR110W (*(volatile unsigned int __near *)0xFA10)

#define DSPR110 (*(volatile unsigned char __near *)0xFA10)

#define DSPR111 (*(volatile unsigned char __near *)0xFA11)

#define DSPR112W (*(volatile unsigned int __near *)0xFA12)

#define DSPR112 (*(volatile unsigned char __near *)0xFA12)

#define DSPR113 (*(volatile unsigned char __near *)0xFA13)

#define DSPR114W (*(volatile unsigned int __near *)0xFA14)

#define DSPR114 (*(volatile unsigned char __near *)0xFA14)

#define DSPR115 (*(volatile unsigned char __near *)0xFA15)

#define DSPR116W (*(volatile unsigned int __near *)0xFA16)

#define DSPR116 (*(volatile unsigned char __near *)0xFA16)

#define DSPR117 (*(volatile unsigned char __near *)0xFA17)

#define DSPR118W (*(volatile unsigned int __near *)0xFA18)

#define DSPR118 (*(volatile unsigned char __near *)0xFA18)

#define DSPR119 (*(volatile unsigned char __near *)0xFA19)

#define DSPR11AW (*(volatile unsigned int __near *)0xFA1A)

#define DSPR11A (*(volatile unsigned char __near *)0xFA1A)

#define DSPR11B (*(volatile unsigned char __near *)0xFA1B)

#define DSPR11CW (*(volatile unsigned int __near *)0xFA1C)

#define DSPR11C (*(volatile unsigned char __near *)0xFA1C)

#define DSPR11D (*(volatile unsigned char __near *)0xFA1D)

#define DSPR11EW (*(volatile unsigned int __near *)0xFA1E)

#define DSPR11E (*(volatile unsigned char __near *)0xFA1E)

#define DSPR11F (*(volatile unsigned char __near *)0xFA1F)

#define DSPR120W (*(volatile unsigned int __near *)0xFA20)

#define DSPR120 (*(volatile unsigned char __near *)0xFA20)

#define DSPR121 (*(volatile unsigned char __near *)0xFA21)

#define DSPR122W (*(volatile unsigned int __near *)0xFA22)

#define DSPR122 (*(volatile unsigned char __near *)0xFA22)

#define DSPR123 (*(volatile unsigned char __near *)0xFA23)

#define DSPR124W (*(volatile unsigned int __near *)0xFA24)

#define DSPR124 (*(volatile unsigned char __near *)0xFA24)

#define DSPR125 (*(volatile unsigned char __near *)0xFA25)

#define DSPR126W (*(volatile unsigned int __near *)0xFA26)

#define DSPR126 (*(volatile unsigned char __near *)0xFA26)

#define DSPR127 (*(volatile unsigned char __near *)0xFA27)

#define DSPR128W (*(volatile unsigned int __near *)0xFA28)

#define DSPR128 (*(volatile unsigned char __near *)0xFA28)

#define DSPR129 (*(volatile unsigned char __near *)0xFA29)

#define DSPR12AW (*(volatile unsigned int __near *)0xFA2A)

#define DSPR12A (*(volatile unsigned char __near *)0xFA2A)

#define DSPR12B (*(volatile unsigned char __near *)0xFA2B)

#define DSPR12CW (*(volatile unsigned int __near *)0xFA2C)

#define DSPR12C (*(volatile unsigned char __near *)0xFA2C)

#define DSPR12D (*(volatile unsigned char __near *)0xFA2D)

#define DSPR12EW (*(volatile unsigned int __near *)0xFA2E)

#define DSPR12E (*(volatile unsigned char __near *)0xFA2E)

#define DSPR12F (*(volatile unsigned char __near *)0xFA2F)

#define DSPR130W (*(volatile unsigned int __near *)0xFA30)

#define DSPR130 (*(volatile unsigned char __near *)0xFA30)

#define DSPR131 (*(volatile unsigned char __near *)0xFA31)

#define DSPR132W (*(volatile unsigned int __near *)0xFA32)

#define DSPR132 (*(volatile unsigned char __near *)0xFA32)

#define DSPR133 (*(volatile unsigned char __near *)0xFA33)

#define DSPR134W (*(volatile unsigned int __near *)0xFA34)

#define DSPR134 (*(volatile unsigned char __near *)0xFA34)

#define DSPR135 (*(volatile unsigned char __near *)0xFA35)

#define DSPR136W (*(volatile unsigned int __near *)0xFA36)

#define DSPR136 (*(volatile unsigned char __near *)0xFA36)

#define DSPR137 (*(volatile unsigned char __near *)0xFA37)

#define DSPR138W (*(volatile unsigned int __near *)0xFA38)

#define DSPR138 (*(volatile unsigned char __near *)0xFA38)

#define DSPR139 (*(volatile unsigned char __near *)0xFA39)

#define DSPR13AW (*(volatile unsigned int __near *)0xFA3A)

#define DSPR13A (*(volatile unsigned char __near *)0xFA3A)

#define DSPR13B (*(volatile unsigned char __near *)0xFA3B)

#define DSPR13CW (*(volatile unsigned int __near *)0xFA3C)

#define DSPR13C (*(volatile unsigned char __near *)0xFA3C)

#define DSPR13D (*(volatile unsigned char __near *)0xFA3D)

#define DSPR13EW (*(volatile unsigned int __near *)0xFA3E)

#define DSPR13E (*(volatile unsigned char __near *)0xFA3E)

#define DSPR13F (*(volatile unsigned char __near *)0xFA3F)

#define DSPR140W (*(volatile unsigned int __near *)0xFA40)

#define DSPR140 (*(volatile unsigned char __near *)0xFA40)

#define DSPR141 (*(volatile unsigned char __near *)0xFA41)

#define DSPR142W (*(volatile unsigned int __near *)0xFA42)

#define DSPR142 (*(volatile unsigned char __near *)0xFA42)

#define DSPR143 (*(volatile unsigned char __near *)0xFA43)

#define DSPR144W (*(volatile unsigned int __near *)0xFA44)

#define DSPR144 (*(volatile unsigned char __near *)0xFA44)

#define DSPR145 (*(volatile unsigned char __near *)0xFA45)

#define DSPR146W (*(volatile unsigned int __near *)0xFA46)

#define DSPR146 (*(volatile unsigned char __near *)0xFA46)

#define DSPR147 (*(volatile unsigned char __near *)0xFA47)

#define DSPR148W (*(volatile unsigned int __near *)0xFA48)

#define DSPR148 (*(volatile unsigned char __near *)0xFA48)

#define DSPR149 (*(volatile unsigned char __near *)0xFA49)

#define DSPR14AW (*(volatile unsigned int __near *)0xFA4A)

#define DSPR14A (*(volatile unsigned char __near *)0xFA4A)

#define DSPR14B (*(volatile unsigned char __near *)0xFA4B)

#define DSPR14CW (*(volatile unsigned int __near *)0xFA4C)

#define DSPR14C (*(volatile unsigned char __near *)0xFA4C)

#define DSPR14D (*(volatile unsigned char __near *)0xFA4D)

#define DSPR14EW (*(volatile unsigned int __near *)0xFA4E)

#define DSPR14E (*(volatile unsigned char __near *)0xFA4E)

#define DSPR14F (*(volatile unsigned char __near *)0xFA4F)

#define DSPR150W (*(volatile unsigned int __near *)0xFA50)

#define DSPR150 (*(volatile unsigned char __near *)0xFA50)

#define DSPR151 (*(volatile unsigned char __near *)0xFA51)

#define DSPR152W (*(volatile unsigned int __near *)0xFA52)

#define DSPR152 (*(volatile unsigned char __near *)0xFA52)

#define DSPR153 (*(volatile unsigned char __near *)0xFA53)

#define DSPR154W (*(volatile unsigned int __near *)0xFA54)

#define DSPR154 (*(volatile unsigned char __near *)0xFA54)

#define DSPR155 (*(volatile unsigned char __near *)0xFA55)

#define DSPR156W (*(volatile unsigned int __near *)0xFA56)

#define DSPR156 (*(volatile unsigned char __near *)0xFA56)

#define DSPR157 (*(volatile unsigned char __near *)0xFA57)

#define DSPR158W (*(volatile unsigned int __near *)0xFA58)

#define DSPR158 (*(volatile unsigned char __near *)0xFA58)

#define DSPR159 (*(volatile unsigned char __near *)0xFA59)

#define DSPR15AW (*(volatile unsigned int __near *)0xFA5A)

#define DSPR15A (*(volatile unsigned char __near *)0xFA5A)

#define DSPR15B (*(volatile unsigned char __near *)0xFA5B)

#define DSPR15CW (*(volatile unsigned int __near *)0xFA5C)

#define DSPR15C (*(volatile unsigned char __near *)0xFA5C)

#define DSPR15D (*(volatile unsigned char __near *)0xFA5D)

#define DSPR15EW (*(volatile unsigned int __near *)0xFA5E)

#define DSPR15E (*(volatile unsigned char __near *)0xFA5E)

#define DSPR15F (*(volatile unsigned char __near *)0xFA5F)

#define DSPR160W (*(volatile unsigned int __near *)0xFA60)

#define DSPR160 (*(volatile unsigned char __near *)0xFA60)

#define DSPR161 (*(volatile unsigned char __near *)0xFA61)

#define DSPR162W (*(volatile unsigned int __near *)0xFA62)

#define DSPR162 (*(volatile unsigned char __near *)0xFA62)

#define DSPR163 (*(volatile unsigned char __near *)0xFA63)

#define DSPR164W (*(volatile unsigned int __near *)0xFA64)

#define DSPR164 (*(volatile unsigned char __near *)0xFA64)

#define DSPR165 (*(volatile unsigned char __near *)0xFA65)

#define DSPR166W (*(volatile unsigned int __near *)0xFA66)

#define DSPR166 (*(volatile unsigned char __near *)0xFA66)

#define DSPR167 (*(volatile unsigned char __near *)0xFA67)

#define DSPR168W (*(volatile unsigned int __near *)0xFA68)

#define DSPR168 (*(volatile unsigned char __near *)0xFA68)

#define DSPR169 (*(volatile unsigned char __near *)0xFA69)

#define DSPR16AW (*(volatile unsigned int __near *)0xFA6A)

#define DSPR16A (*(volatile unsigned char __near *)0xFA6A)

#define DSPR16B (*(volatile unsigned char __near *)0xFA6B)

#define DSPR16CW (*(volatile unsigned int __near *)0xFA6C)

#define DSPR16C (*(volatile unsigned char __near *)0xFA6C)

#define DSPR16D (*(volatile unsigned char __near *)0xFA6D)

#define DSPR16EW (*(volatile unsigned int __near *)0xFA6E)

#define DSPR16E (*(volatile unsigned char __near *)0xFA6E)

#define DSPR16F (*(volatile unsigned char __near *)0xFA6F)

#define DSPR170W (*(volatile unsigned int __near *)0xFA70)

#define DSPR170 (*(volatile unsigned char __near *)0xFA70)

#define DSPR171 (*(volatile unsigned char __near *)0xFA71)

#define DSPR172W (*(volatile unsigned int __near *)0xFA72)

#define DSPR172 (*(volatile unsigned char __near *)0xFA72)

#define DSPR173 (*(volatile unsigned char __near *)0xFA73)

#define DSPR174W (*(volatile unsigned int __near *)0xFA74)

#define DSPR174 (*(volatile unsigned char __near *)0xFA74)

#define DSPR175 (*(volatile unsigned char __near *)0xFA75)

#define DSPR176W (*(volatile unsigned int __near *)0xFA76)

#define DSPR176 (*(volatile unsigned char __near *)0xFA76)

#define DSPR177 (*(volatile unsigned char __near *)0xFA77)

#define DSPR178W (*(volatile unsigned int __near *)0xFA78)

#define DSPR178 (*(volatile unsigned char __near *)0xFA78)

#define DSPR179 (*(volatile unsigned char __near *)0xFA79)

#define DSPR17AW (*(volatile unsigned int __near *)0xFA7A)

#define DSPR17A (*(volatile unsigned char __near *)0xFA7A)

#define DSPR17B (*(volatile unsigned char __near *)0xFA7B)

#define DSPR17CW (*(volatile unsigned int __near *)0xFA7C)

#define DSPR17C (*(volatile unsigned char __near *)0xFA7C)

#define DSPR17D (*(volatile unsigned char __near *)0xFA7D)

#define DSPR17EW (*(volatile unsigned int __near *)0xFA7E)

#define DSPR17E (*(volatile unsigned char __near *)0xFA7E)

#define DSPR17F (*(volatile unsigned char __near *)0xFA7F)

#define DSPR180W (*(volatile unsigned int __near *)0xFA80)

#define DSPR180 (*(volatile unsigned char __near *)0xFA80)

#define DSPR181 (*(volatile unsigned char __near *)0xFA81)

#define DSPR182W (*(volatile unsigned int __near *)0xFA82)

#define DSPR182 (*(volatile unsigned char __near *)0xFA82)

#define DSPR183 (*(volatile unsigned char __near *)0xFA83)

#define DSPR184W (*(volatile unsigned int __near *)0xFA84)

#define DSPR184 (*(volatile unsigned char __near *)0xFA84)

#define DSPR185 (*(volatile unsigned char __near *)0xFA85)

#define DSPR186W (*(volatile unsigned int __near *)0xFA86)

#define DSPR186 (*(volatile unsigned char __near *)0xFA86)

#define DSPR187 (*(volatile unsigned char __near *)0xFA87)

#define DSPR188W (*(volatile unsigned int __near *)0xFA88)

#define DSPR188 (*(volatile unsigned char __near *)0xFA88)

#define DSPR189 (*(volatile unsigned char __near *)0xFA89)

#define DSPR18AW (*(volatile unsigned int __near *)0xFA8A)

#define DSPR18A (*(volatile unsigned char __near *)0xFA8A)

#define DSPR18B (*(volatile unsigned char __near *)0xFA8B)

#define DSPR18CW (*(volatile unsigned int __near *)0xFA8C)

#define DSPR18C (*(volatile unsigned char __near *)0xFA8C)

#define DSPR18D (*(volatile unsigned char __near *)0xFA8D)

#define DSPR18EW (*(volatile unsigned int __near *)0xFA8E)

#define DSPR18E (*(volatile unsigned char __near *)0xFA8E)

#define DSPR18F (*(volatile unsigned char __near *)0xFA8F)

#define DSPR190W (*(volatile unsigned int __near *)0xFA90)

#define DSPR190 (*(volatile unsigned char __near *)0xFA90)

#define DSPR191 (*(volatile unsigned char __near *)0xFA91)

#define DSPR192W (*(volatile unsigned int __near *)0xFA92)

#define DSPR192 (*(volatile unsigned char __near *)0xFA92)

#define DSPR193 (*(volatile unsigned char __near *)0xFA93)

#define DSPR194W (*(volatile unsigned int __near *)0xFA94)

#define DSPR194 (*(volatile unsigned char __near *)0xFA94)

#define DSPR195 (*(volatile unsigned char __near *)0xFA95)

#define DSPR196W (*(volatile unsigned int __near *)0xFA96)

#define DSPR196 (*(volatile unsigned char __near *)0xFA96)

#define DSPR197 (*(volatile unsigned char __near *)0xFA97)

#define DSPR198W (*(volatile unsigned int __near *)0xFA98)

#define DSPR198 (*(volatile unsigned char __near *)0xFA98)

#define DSPR199 (*(volatile unsigned char __near *)0xFA99)

#define DSPR19AW (*(volatile unsigned int __near *)0xFA9A)

#define DSPR19A (*(volatile unsigned char __near *)0xFA9A)

#define DSPR19B (*(volatile unsigned char __near *)0xFA9B)

#define DSPR19CW (*(volatile unsigned int __near *)0xFA9C)

#define DSPR19C (*(volatile unsigned char __near *)0xFA9C)

#define DSPR19D (*(volatile unsigned char __near *)0xFA9D)

#define DSPR19EW (*(volatile unsigned int __near *)0xFA9E)

#define DSPR19E (*(volatile unsigned char __near *)0xFA9E)

#define DSPR19F (*(volatile unsigned char __near *)0xFA9F)

#define DSPR1A0W (*(volatile unsigned int __near *)0xFAA0)

#define DSPR1A0 (*(volatile unsigned char __near *)0xFAA0)

#define DSPR1A1 (*(volatile unsigned char __near *)0xFAA1)

#define DSPR1A2W (*(volatile unsigned int __near *)0xFAA2)

#define DSPR1A2 (*(volatile unsigned char __near *)0xFAA2)

#define DSPR1A3 (*(volatile unsigned char __near *)0xFAA3)

#define DSPR1A4W (*(volatile unsigned int __near *)0xFAA4)

#define DSPR1A4 (*(volatile unsigned char __near *)0xFAA4)

#define DSPR1A5 (*(volatile unsigned char __near *)0xFAA5)

#define DSPR1A6W (*(volatile unsigned int __near *)0xFAA6)

#define DSPR1A6 (*(volatile unsigned char __near *)0xFAA6)

#define DSPR1A7 (*(volatile unsigned char __near *)0xFAA7)

#define DSPR1A8W (*(volatile unsigned int __near *)0xFAA8)

#define DSPR1A8 (*(volatile unsigned char __near *)0xFAA8)

#define DSPR1A9 (*(volatile unsigned char __near *)0xFAA9)

#define DSPR1AAW (*(volatile unsigned int __near *)0xFAAA)

#define DSPR1AA (*(volatile unsigned char __near *)0xFAAA)

#define DSPR1AB (*(volatile unsigned char __near *)0xFAAB)

#define DSPR1ACW (*(volatile unsigned int __near *)0xFAAC)

#define DSPR1AC (*(volatile unsigned char __near *)0xFAAC)

#define DSPR1AD (*(volatile unsigned char __near *)0xFAAD)

#define DSPR1AEW (*(volatile unsigned int __near *)0xFAAE)

#define DSPR1AE (*(volatile unsigned char __near *)0xFAAE)

#define DSPR1AF (*(volatile unsigned char __near *)0xFAAF)

#define DSPR1B0W (*(volatile unsigned int __near *)0xFAB0)

#define DSPR1B0 (*(volatile unsigned char __near *)0xFAB0)

#define DSPR1B1 (*(volatile unsigned char __near *)0xFAB1)

#define DSPR1B2W (*(volatile unsigned int __near *)0xFAB2)

#define DSPR1B2 (*(volatile unsigned char __near *)0xFAB2)

#define DSPR1B3 (*(volatile unsigned char __near *)0xFAB3)

#define DSPR1B4W (*(volatile unsigned int __near *)0xFAB4)

#define DSPR1B4 (*(volatile unsigned char __near *)0xFAB4)

#define DSPR1B5 (*(volatile unsigned char __near *)0xFAB5)

#define DSPR1B6W (*(volatile unsigned int __near *)0xFAB6)

#define DSPR1B6 (*(volatile unsigned char __near *)0xFAB6)

#define DSPR1B7 (*(volatile unsigned char __near *)0xFAB7)

#define DSPR1B8W (*(volatile unsigned int __near *)0xFAB8)

#define DSPR1B8 (*(volatile unsigned char __near *)0xFAB8)

#define DSPR1B9 (*(volatile unsigned char __near *)0xFAB9)

#define DSPR1BAW (*(volatile unsigned int __near *)0xFABA)

#define DSPR1BA (*(volatile unsigned char __near *)0xFABA)

#define DSPR1BB (*(volatile unsigned char __near *)0xFABB)

#define DSPR1BCW (*(volatile unsigned int __near *)0xFABC)

#define DSPR1BC (*(volatile unsigned char __near *)0xFABC)

#define DSPR1BD (*(volatile unsigned char __near *)0xFABD)

#define DSPR1BEW (*(volatile unsigned int __near *)0xFABE)

#define DSPR1BE (*(volatile unsigned char __near *)0xFABE)

#define DSPR1BF (*(volatile unsigned char __near *)0xFABF)

#define DSPR1C0W (*(volatile unsigned int __near *)0xFAC0)

#define DSPR1C0 (*(volatile unsigned char __near *)0xFAC0)

#define DSPR1C1 (*(volatile unsigned char __near *)0xFAC1)

#define DSPR1C2W (*(volatile unsigned int __near *)0xFAC2)

#define DSPR1C2 (*(volatile unsigned char __near *)0xFAC2)

#define DSPR1C3 (*(volatile unsigned char __near *)0xFAC3)

#define DSPR1C4W (*(volatile unsigned int __near *)0xFAC4)

#define DSPR1C4 (*(volatile unsigned char __near *)0xFAC4)

#define DSPR1C5 (*(volatile unsigned char __near *)0xFAC5)

#define DSPR1C6W (*(volatile unsigned int __near *)0xFAC6)

#define DSPR1C6 (*(volatile unsigned char __near *)0xFAC6)

#define DSPR1C7 (*(volatile unsigned char __near *)0xFAC7)

#define DSPR1C8W (*(volatile unsigned int __near *)0xFAC8)

#define DSPR1C8 (*(volatile unsigned char __near *)0xFAC8)

#define DSPR1C9 (*(volatile unsigned char __near *)0xFAC9)

#define DSPR1CAW (*(volatile unsigned int __near *)0xFACA)

#define DSPR1CA (*(volatile unsigned char __near *)0xFACA)

#define DSPR1CB (*(volatile unsigned char __near *)0xFACB)

#define DSPR1CCW (*(volatile unsigned int __near *)0xFACC)

#define DSPR1CC (*(volatile unsigned char __near *)0xFACC)

#define DSPR1CD (*(volatile unsigned char __near *)0xFACD)

#define DSPR1CEW (*(volatile unsigned int __near *)0xFACE)

#define DSPR1CE (*(volatile unsigned char __near *)0xFACE)

#define DSPR1CF (*(volatile unsigned char __near *)0xFACF)

#define DSPR1D0W (*(volatile unsigned int __near *)0xFAD0)

#define DSPR1D0 (*(volatile unsigned char __near *)0xFAD0)

#define DSPR1D1 (*(volatile unsigned char __near *)0xFAD1)

#define DSPR1D2W (*(volatile unsigned int __near *)0xFAD2)

#define DSPR1D2 (*(volatile unsigned char __near *)0xFAD2)

#define DSPR1D3 (*(volatile unsigned char __near *)0xFAD3)

#define DSPR1D4W (*(volatile unsigned int __near *)0xFAD4)

#define DSPR1D4 (*(volatile unsigned char __near *)0xFAD4)

#define DSPR1D5 (*(volatile unsigned char __near *)0xFAD5)

#define DSPR1D6W (*(volatile unsigned int __near *)0xFAD6)

#define DSPR1D6 (*(volatile unsigned char __near *)0xFAD6)

#define DSPR1D7 (*(volatile unsigned char __near *)0xFAD7)

#define DSPR1D8W (*(volatile unsigned int __near *)0xFAD8)

#define DSPR1D8 (*(volatile unsigned char __near *)0xFAD8)

#define DSPR1D9 (*(volatile unsigned char __near *)0xFAD9)

#define DSPR1DAW (*(volatile unsigned int __near *)0xFADA)

#define DSPR1DA (*(volatile unsigned char __near *)0xFADA)

#define DSPR1DB (*(volatile unsigned char __near *)0xFADB)

#define DSPR1DCW (*(volatile unsigned int __near *)0xFADC)

#define DSPR1DC (*(volatile unsigned char __near *)0xFADC)

#define DSPR1DD (*(volatile unsigned char __near *)0xFADD)

#define DSPR1DEW (*(volatile unsigned int __near *)0xFADE)

#define DSPR1DE (*(volatile unsigned char __near *)0xFADE)

#define DSPR1DF (*(volatile unsigned char __near *)0xFADF)

#define DSPR1E0W (*(volatile unsigned int __near *)0xFAE0)

#define DSPR1E0 (*(volatile unsigned char __near *)0xFAE0)

#define DSPR1E1 (*(volatile unsigned char __near *)0xFAE1)

#define DSPR1E2W (*(volatile unsigned int __near *)0xFAE2)

#define DSPR1E2 (*(volatile unsigned char __near *)0xFAE2)

#define DSPR1E3 (*(volatile unsigned char __near *)0xFAE3)

#define DSPR1E4W (*(volatile unsigned int __near *)0xFAE4)

#define DSPR1E4 (*(volatile unsigned char __near *)0xFAE4)

#define DSPR1E5 (*(volatile unsigned char __near *)0xFAE5)

#define DSPR1E6W (*(volatile unsigned int __near *)0xFAE6)

#define DSPR1E6 (*(volatile unsigned char __near *)0xFAE6)

#define DSPR1E7 (*(volatile unsigned char __near *)0xFAE7)

#define DSPR1E8W (*(volatile unsigned int __near *)0xFAE8)

#define DSPR1E8 (*(volatile unsigned char __near *)0xFAE8)

#define DSPR1E9 (*(volatile unsigned char __near *)0xFAE9)

#define DSPR1EAW (*(volatile unsigned int __near *)0xFAEA)

#define DSPR1EA (*(volatile unsigned char __near *)0xFAEA)

#define DSPR1EB (*(volatile unsigned char __near *)0xFAEB)

#define DSPR1ECW (*(volatile unsigned int __near *)0xFAEC)

#define DSPR1EC (*(volatile unsigned char __near *)0xFAEC)

#define DSPR1ED (*(volatile unsigned char __near *)0xFAED)

#define DSPR1EEW (*(volatile unsigned int __near *)0xFAEE)

#define DSPR1EE (*(volatile unsigned char __near *)0xFAEE)

#define DSPR1EF (*(volatile unsigned char __near *)0xFAEF)

#define DSPR1F0W (*(volatile unsigned int __near *)0xFAF0)

#define DSPR1F0 (*(volatile unsigned char __near *)0xFAF0)

#define DSPR1F1 (*(volatile unsigned char __near *)0xFAF1)

#define DSPR1F2W (*(volatile unsigned int __near *)0xFAF2)

#define DSPR1F2 (*(volatile unsigned char __near *)0xFAF2)

#define DSPR1F3 (*(volatile unsigned char __near *)0xFAF3)

#define DSPR1F4W (*(volatile unsigned int __near *)0xFAF4)

#define DSPR1F4 (*(volatile unsigned char __near *)0xFAF4)

#define DSPR1F5 (*(volatile unsigned char __near *)0xFAF5)

#define DSPR1F6W (*(volatile unsigned int __near *)0xFAF6)

#define DSPR1F6 (*(volatile unsigned char __near *)0xFAF6)

#define DSPR1F7 (*(volatile unsigned char __near *)0xFAF7)

#define DSPR1F8W (*(volatile unsigned int __near *)0xFAF8)

#define DSPR1F8 (*(volatile unsigned char __near *)0xFAF8)

#define DSPR1F9 (*(volatile unsigned char __near *)0xFAF9)

#define DSPR1FAW (*(volatile unsigned int __near *)0xFAFA)

#define DSPR1FA (*(volatile unsigned char __near *)0xFAFA)

#define DSPR1FB (*(volatile unsigned char __near *)0xFAFB)

#define DSPR1FCW (*(volatile unsigned int __near *)0xFAFC)

#define DSPR1FC (*(volatile unsigned char __near *)0xFAFC)

#define DSPR1FD (*(volatile unsigned char __near *)0xFAFD)

#define DSPR1FEW (*(volatile unsigned int __near *)0xFAFE)

#define DSPR1FE (*(volatile unsigned char __near *)0xFAFE)

#define DSPR1FF (*(volatile unsigned char __near *)0xFAFF)

/*---------------------------------------------------
	END OF DATA ADDRESS SYMBOLS
---------------------------------------------------*/

/*---------------------------------------------------
	BIT ADDRESS SYMBOLS
---------------------------------------------------*/

#define DSR0		(_B_DSR.b0)
#define DSR1		(_B_DSR.b1)
#define DSR2		(_B_DSR.b2)
#define DSR3		(_B_DSR.b3)

#define SYSC0		(_B_FCON0.b0)
#define SYSC1		(_B_FCON0.b1)
#define SYSC2		(_B_FCON0.b2)
#define OSCM0		(_B_FCON0.b3)
#define OSCM1		(_B_FCON0.b4)

#define SYSCLK		(_B_FCON1.b0)
#define ENOSC		(_B_FCON1.b1)
#define ENPLL		(_B_FCON1.b2)
#define XSPEN		(_B_FCON1.b4)
#define LOSST		(_B_FCON1.b6)
#define LPLL		(_B_FCON1.b7)

#define XTM0		(_B_FCON2.b0)
#define XTM1		(_B_FCON2.b1)
#define OUTLC		(_B_FCON2.b3)
#define LFLTSEL		(_B_FCON2.b4)

#define CR16DC		(_B_FCON3.b0)
#define CR16ENC		(_B_FCON3.b1)

#define TRPLL0		(_B_FCON4.b0)
#define TRPLL1		(_B_FCON4.b1)
#define TRPLL2		(_B_FCON4.b2)
#define TRPLL3		(_B_FCON4.b3)
#define TRPLL4		(_B_FCON4.b4)
#define TRPLL5		(_B_FCON4.b5)
#define TRPLL6		(_B_FCON4.b6)
#define TRPLL7		(_B_FCON4.b7)

#define TRPLL8		(_B_FCON5.b0)

#define HLT		(_B_SBYCON.b0)
#define STP		(_B_SBYCON.b1)
#define DHLT		(_B_SBYCON.b2)
#define HLTH		(_B_SBYCON.b3)

#define LOSCS		(_B_FSTAT.b2)
#define C16MCDO		(_B_FSTAT.b6)
#define C16MBS		(_B_FSTAT.b7)

#define POR		(_B_RSTAT.b0)
#define XSTR		(_B_RSTAT.b1)
#define WDTR		(_B_RSTAT.b2)
#define VLSR		(_B_RSTAT.b3)
#define LLDR		(_B_RSTAT.b4)

#define WDP		(_B_WDTCON.b0)

#define WDT0		(_B_WDTMOD.b0)
#define WDT1		(_B_WDTMOD.b1)
#define HLTEN		(_B_WDTMOD.b7)

#define EEXI0		(_B_IE1.b0)
#define EEXI1		(_B_IE1.b1)
#define EEXI2		(_B_IE1.b2)
#define EEXI3		(_B_IE1.b3)
#define EEXI4		(_B_IE1.b4)
#define EEXI5		(_B_IE1.b5)
#define EEXI6		(_B_IE1.b6)
#define EEXI7		(_B_IE1.b7)

#define ESIO0		(_B_IE2.b0)
#define ESIOF0		(_B_IE2.b1)
#define EI2C1		(_B_IE2.b3)
#define EUA0		(_B_IE2.b4)
#define EUA1		(_B_IE2.b5)
#define EUAF0		(_B_IE2.b6)
#define EUAF1		(_B_IE2.b7)

#define EI2CF0		(_B_IE3.b0)
#define EI2CF1		(_B_IE3.b1)
#define ELOSC		(_B_IE3.b5)
#define EVLS		(_B_IE3.b6)
#define EMD0		(_B_IE3.b7)

#define ESAD		(_B_IE4.b0)
#define ERAD		(_B_IE4.b1)
#define ECMP0		(_B_IE4.b4)
#define ECMP1		(_B_IE4.b5)

#define ETM0		(_B_IE5.b0)
#define ETM1		(_B_IE5.b1)
#define ETM2		(_B_IE5.b2)
#define ETM3		(_B_IE5.b3)
#define ETM4		(_B_IE5.b4)
#define ETM5		(_B_IE5.b5)
#define ETM6		(_B_IE5.b6)
#define ETM7		(_B_IE5.b7)

#define EFTM0		(_B_IE6.b0)
#define EFTM1		(_B_IE6.b1)
#define EFTM2		(_B_IE6.b2)
#define EFTM3		(_B_IE6.b3)
#define ERTC1		(_B_IE6.b4)
#define EAL11		(_B_IE6.b5)
#define ETM1K		(_B_IE6.b7)

#define ELTBC0		(_B_IE7.b0)
#define ELTBC1		(_B_IE7.b1)
#define ELTBC2		(_B_IE7.b2)
#define ELCD		(_B_IE7.b3)
#define ERTC2		(_B_IE7.b4)
#define EAL12		(_B_IE7.b5)
#define ERTC0		(_B_IE7.b6)
#define EAL10		(_B_IE7.b7)

#define QWDT		(_B_IRQ0.b0)

#define QEXI0		(_B_IRQ1.b0)
#define QEXI1		(_B_IRQ1.b1)
#define QEXI2		(_B_IRQ1.b2)
#define QEXI3		(_B_IRQ1.b3)
#define QEXI4		(_B_IRQ1.b4)
#define QEXI5		(_B_IRQ1.b5)
#define QEXI6		(_B_IRQ1.b6)
#define QEXI7		(_B_IRQ1.b7)

#define QSIO0		(_B_IRQ2.b0)
#define QSIOF0		(_B_IRQ2.b1)
#define QI2C1		(_B_IRQ2.b3)
#define QUA0		(_B_IRQ2.b4)
#define QUA1		(_B_IRQ2.b5)
#define QUAF0		(_B_IRQ2.b6)
#define QUAF1		(_B_IRQ2.b7)

#define QI2CF0		(_B_IRQ3.b0)
#define QI2CF1		(_B_IRQ3.b1)
#define QLOSC		(_B_IRQ3.b5)
#define QVLS		(_B_IRQ3.b6)
#define QMD0		(_B_IRQ3.b7)

#define QSAD		(_B_IRQ4.b0)
#define QRAD		(_B_IRQ4.b1)
#define QCMP0		(_B_IRQ4.b4)
#define QCMP1		(_B_IRQ4.b5)

#define QTM0		(_B_IRQ5.b0)
#define QTM1		(_B_IRQ5.b1)
#define QTM2		(_B_IRQ5.b2)
#define QTM3		(_B_IRQ5.b3)
#define QTM4		(_B_IRQ5.b4)
#define QTM5		(_B_IRQ5.b5)
#define QTM6		(_B_IRQ5.b6)
#define QTM7		(_B_IRQ5.b7)

#define QFTM0		(_B_IRQ6.b0)
#define QFTM1		(_B_IRQ6.b1)
#define QFTM2		(_B_IRQ6.b2)
#define QFTM3		(_B_IRQ6.b3)
#define QRTC1		(_B_IRQ6.b4)
#define QAL11		(_B_IRQ6.b5)
#define QTM1K		(_B_IRQ6.b7)

#define QLTBC0		(_B_IRQ7.b0)
#define QLTBC1		(_B_IRQ7.b1)
#define QLTBC2		(_B_IRQ7.b2)
#define QLCD		(_B_IRQ7.b3)
#define QRTC2		(_B_IRQ7.b4)
#define QAL12		(_B_IRQ7.b5)
#define QRTC0		(_B_IRQ7.b6)
#define QAL10		(_B_IRQ7.b7)

#define ILE		(_B_ILENL.b0)

#define CILM0		(_B_CILL.b0)
#define CILM1		(_B_CILL.b1)
#define CILM2		(_B_CILL.b2)
#define CILM3		(_B_CILL.b3)
#define CILN		(_B_CILL.b7)

#define L0EXI0		(_B_ILC1L.b0)
#define L1EXI0		(_B_ILC1L.b1)
#define L0EXI1		(_B_ILC1L.b2)
#define L1EXI1		(_B_ILC1L.b3)
#define L0EXI2		(_B_ILC1L.b4)
#define L1EXI2		(_B_ILC1L.b5)
#define L0EXI3		(_B_ILC1L.b6)
#define L1EXI3		(_B_ILC1L.b7)

#define L0EXI4		(_B_ILC1H.b0)
#define L1EXI4		(_B_ILC1H.b1)
#define L0EXI5		(_B_ILC1H.b2)
#define L1EXI5		(_B_ILC1H.b3)
#define L0EXI6		(_B_ILC1H.b4)
#define L1EXI6		(_B_ILC1H.b5)
#define L0EXI7		(_B_ILC1H.b6)
#define L1EXI7		(_B_ILC1H.b7)

#define L0SIO0		(_B_ILC2L.b0)
#define L1SIO0		(_B_ILC2L.b1)
#define L0SIOF0		(_B_ILC2L.b2)
#define L1SIOF0		(_B_ILC2L.b3)
#define L0I2C1		(_B_ILC2L.b6)
#define L1I2C1		(_B_ILC2L.b7)

#define L0UA0		(_B_ILC2H.b0)
#define L1UA0		(_B_ILC2H.b1)
#define L0UA1		(_B_ILC2H.b2)
#define L1UA1		(_B_ILC2H.b3)
#define L0UAF0		(_B_ILC2H.b4)
#define L1UAF0		(_B_ILC2H.b5)
#define L0UAF1		(_B_ILC2H.b6)
#define L1UAF1		(_B_ILC2H.b7)

#define L0I2CF0		(_B_ILC3L.b0)
#define L1I2CF0		(_B_ILC3L.b1)
#define L0I2CF1		(_B_ILC3L.b2)
#define L1I2CF1		(_B_ILC3L.b3)

#define L0LOSC		(_B_ILC3H.b2)
#define L1LOSC		(_B_ILC3H.b3)
#define L0VLS		(_B_ILC3H.b4)
#define L1VLS		(_B_ILC3H.b5)
#define L0MD0		(_B_ILC3H.b6)
#define L1MD0		(_B_ILC3H.b7)

#define L0SAD		(_B_ILC4L.b0)
#define L1SAD		(_B_ILC4L.b1)
#define L0RAD		(_B_ILC4L.b2)
#define L1RAD		(_B_ILC4L.b3)

#define L0CMP0		(_B_ILC4H.b0)
#define L1CMP0		(_B_ILC4H.b1)
#define L0CMP1		(_B_ILC4H.b2)
#define L1CMP1		(_B_ILC4H.b3)

#define L0TM0		(_B_ILC5L.b0)
#define L1TM0		(_B_ILC5L.b1)
#define L0TM1		(_B_ILC5L.b2)
#define L1TM1		(_B_ILC5L.b3)
#define L0TM2		(_B_ILC5L.b4)
#define L1TM2		(_B_ILC5L.b5)
#define L0TM3		(_B_ILC5L.b6)
#define L1TM3		(_B_ILC5L.b7)

#define L0TM4		(_B_ILC5H.b0)
#define L1TM4		(_B_ILC5H.b1)
#define L0TM5		(_B_ILC5H.b2)
#define L1TM5		(_B_ILC5H.b3)
#define L0TM6		(_B_ILC5H.b4)
#define L1TM6		(_B_ILC5H.b5)
#define L0TM7		(_B_ILC5H.b6)
#define L1TM7		(_B_ILC5H.b7)

#define L0FTM0		(_B_ILC6L.b0)
#define L1FTM0		(_B_ILC6L.b1)
#define L0FTM1		(_B_ILC6L.b2)
#define L1FTM1		(_B_ILC6L.b3)
#define L0FTM2		(_B_ILC6L.b4)
#define L1FTM2		(_B_ILC6L.b5)
#define L0FTM3		(_B_ILC6L.b6)
#define L1FTM3		(_B_ILC6L.b7)

#define L0RTC1		(_B_ILC6H.b0)
#define L1RTC1		(_B_ILC6H.b1)
#define L0AL11		(_B_ILC6H.b2)
#define L1AL11		(_B_ILC6H.b3)
#define L0TM1K		(_B_ILC6H.b6)
#define L1TM1K		(_B_ILC6H.b7)

#define L0LTBC0		(_B_ILC7L.b0)
#define L1LTBC0		(_B_ILC7L.b1)
#define L0LTBC1		(_B_ILC7L.b2)
#define L1LTBC1		(_B_ILC7L.b3)
#define L0LTBC2		(_B_ILC7L.b4)
#define L1LTBC2		(_B_ILC7L.b5)
#define L0LCD		(_B_ILC7L.b6)
#define L1LCD		(_B_ILC7L.b7)

#define L0RTC2		(_B_ILC7H.b0)
#define L1RTC2		(_B_ILC7H.b1)
#define L0AL12		(_B_ILC7H.b2)
#define L1AL12		(_B_ILC7H.b3)
#define L0RTC0		(_B_ILC7H.b4)
#define L1RTC0		(_B_ILC7H.b5)
#define L0AL10		(_B_ILC7H.b6)
#define L1AL10		(_B_ILC7H.b7)

#define EXI0E0		(_B_EXICON0.b0)
#define EXI1E0		(_B_EXICON0.b1)
#define EXI2E0		(_B_EXICON0.b2)
#define EXI3E0		(_B_EXICON0.b3)
#define EXI4E0		(_B_EXICON0.b4)
#define EXI5E0		(_B_EXICON0.b5)
#define EXI6E0		(_B_EXICON0.b6)
#define EXI7E0		(_B_EXICON0.b7)

#define EXI0E1		(_B_EXICON1.b0)
#define EXI1E1		(_B_EXICON1.b1)
#define EXI2E1		(_B_EXICON1.b2)
#define EXI3E1		(_B_EXICON1.b3)
#define EXI4E1		(_B_EXICON1.b4)
#define EXI5E1		(_B_EXICON1.b5)
#define EXI6E1		(_B_EXICON1.b6)
#define EXI7E1		(_B_EXICON1.b7)

#define EXI0SM		(_B_EXICON2.b0)
#define EXI1SM		(_B_EXICON2.b1)
#define EXI2SM		(_B_EXICON2.b2)
#define EXI3SM		(_B_EXICON2.b3)
#define EXI4SM		(_B_EXICON2.b4)
#define EXI5SM		(_B_EXICON2.b5)
#define EXI6SM		(_B_EXICON2.b6)
#define EXI7SM		(_B_EXICON2.b7)

#define EXI0FL		(_B_EXICON3.b0)
#define EXI1FL		(_B_EXICON3.b1)
#define EXI2FL		(_B_EXICON3.b2)
#define EXI3FL		(_B_EXICON3.b3)
#define EXI4FL		(_B_EXICON3.b4)
#define EXI5FL		(_B_EXICON3.b5)
#define EXI6FL		(_B_EXICON3.b6)
#define EXI7FL		(_B_EXICON3.b7)

#define EXI0S0		(_B_EXI0SEL.b0)
#define EXI0S1		(_B_EXI0SEL.b1)
#define EXI0S2		(_B_EXI0SEL.b2)
#define EXI0S3		(_B_EXI0SEL.b3)
#define EXI0S4		(_B_EXI0SEL.b4)
#define EXI0S5		(_B_EXI0SEL.b5)
#define EXI0S6		(_B_EXI0SEL.b6)
#define EXI0S7		(_B_EXI0SEL.b7)

#define EXI1S0		(_B_EXI1SEL.b0)
#define EXI1S1		(_B_EXI1SEL.b1)
#define EXI1S2		(_B_EXI1SEL.b2)
#define EXI1S3		(_B_EXI1SEL.b3)
#define EXI1S4		(_B_EXI1SEL.b4)
#define EXI1S5		(_B_EXI1SEL.b5)
#define EXI1S6		(_B_EXI1SEL.b6)
#define EXI1S7		(_B_EXI1SEL.b7)

#define EXI2S0		(_B_EXI2SEL.b0)
#define EXI2S1		(_B_EXI2SEL.b1)
#define EXI2S2		(_B_EXI2SEL.b2)
#define EXI2S3		(_B_EXI2SEL.b3)
#define EXI2S4		(_B_EXI2SEL.b4)
#define EXI2S5		(_B_EXI2SEL.b5)
#define EXI2S6		(_B_EXI2SEL.b6)
#define EXI2S7		(_B_EXI2SEL.b7)

#define EXI3S0		(_B_EXI3SEL.b0)
#define EXI3S1		(_B_EXI3SEL.b1)
#define EXI3S2		(_B_EXI3SEL.b2)
#define EXI3S3		(_B_EXI3SEL.b3)
#define EXI3S4		(_B_EXI3SEL.b4)
#define EXI3S5		(_B_EXI3SEL.b5)
#define EXI3S6		(_B_EXI3SEL.b6)
#define EXI3S7		(_B_EXI3SEL.b7)

#define EXI4S0		(_B_EXI4SEL.b0)
#define EXI4S1		(_B_EXI4SEL.b1)
#define EXI4S2		(_B_EXI4SEL.b2)
#define EXI4S3		(_B_EXI4SEL.b3)
#define EXI4S4		(_B_EXI4SEL.b4)
#define EXI4S5		(_B_EXI4SEL.b5)
#define EXI4S6		(_B_EXI4SEL.b6)
#define EXI4S7		(_B_EXI4SEL.b7)

#define EXI5S0		(_B_EXI5SEL.b0)
#define EXI5S1		(_B_EXI5SEL.b1)
#define EXI5S2		(_B_EXI5SEL.b2)
#define EXI5S3		(_B_EXI5SEL.b3)
#define EXI5S4		(_B_EXI5SEL.b4)
#define EXI5S5		(_B_EXI5SEL.b5)
#define EXI5S6		(_B_EXI5SEL.b6)
#define EXI5S7		(_B_EXI5SEL.b7)

#define EXI6S0		(_B_EXI6SEL.b0)
#define EXI6S1		(_B_EXI6SEL.b1)
#define EXI6S2		(_B_EXI6SEL.b2)
#define EXI6S3		(_B_EXI6SEL.b3)
#define EXI6S4		(_B_EXI6SEL.b4)
#define EXI6S5		(_B_EXI6SEL.b5)
#define EXI6S6		(_B_EXI6SEL.b6)
#define EXI6S7		(_B_EXI6SEL.b7)

#define EXI7S0		(_B_EXI7SEL.b0)
#define EXI7S1		(_B_EXI7SEL.b1)
#define EXI7S2		(_B_EXI7SEL.b2)
#define EXI7S3		(_B_EXI7SEL.b3)
#define EXI7S4		(_B_EXI7SEL.b4)
#define EXI7S5		(_B_EXI7SEL.b5)
#define EXI7S6		(_B_EXI7SEL.b6)
#define EXI7S7		(_B_EXI7SEL.b7)

#define T128HZ		(_B_LTBR.b0)
#define T64HZ		(_B_LTBR.b1)
#define T32HZ		(_B_LTBR.b2)
#define T16HZ		(_B_LTBR.b3)
#define T8HZ		(_B_LTBR.b4)
#define T4HZ		(_B_LTBR.b5)
#define T2HZ		(_B_LTBR.b6)
#define T1HZ		(_B_LTBR.b7)

#define LADJ0		(_B_LTBADJL.b0)
#define LADJ1		(_B_LTBADJL.b1)
#define LADJ2		(_B_LTBADJL.b2)
#define LADJ3		(_B_LTBADJL.b3)
#define LADJ4		(_B_LTBADJL.b4)
#define LADJ5		(_B_LTBADJL.b5)
#define LADJ6		(_B_LTBADJL.b6)
#define LADJ7		(_B_LTBADJL.b7)

#define LADJ8		(_B_LTBADJH.b0)
#define LADJ9		(_B_LTBADJH.b1)
#define LADJ10		(_B_LTBADJH.b2)

#define LTI0S0		(_B_LTBINTL.b0)
#define LTI0S1		(_B_LTBINTL.b1)
#define LTI0S2		(_B_LTBINTL.b2)
#define LTI1S0		(_B_LTBINTL.b4)
#define LTI1S1		(_B_LTBINTL.b5)
#define LTI1S2		(_B_LTBINTL.b6)

#define LTI2S0		(_B_LTBINTH.b0)
#define LTI2S1		(_B_LTBINTH.b1)
#define LTI2S2		(_B_LTBINTH.b2)

#define UDHEN		(_B_PMCON.b0)
#define UDHON		(_B_PMCON.b1)
#define LXTHVN		(_B_PMCON.b2)

#define DTM0		(_B_BLKCON0.b0)
#define DTM1		(_B_BLKCON0.b1)
#define DTM2		(_B_BLKCON0.b2)
#define DTM3		(_B_BLKCON0.b3)
#define DTM4		(_B_BLKCON0.b4)
#define DTM5		(_B_BLKCON0.b5)
#define DTM6		(_B_BLKCON0.b6)
#define DTM7		(_B_BLKCON0.b7)

#define DFTM0		(_B_BLKCON1.b0)
#define DFTM1		(_B_BLKCON1.b1)
#define DFTM2		(_B_BLKCON1.b2)
#define DFTM3		(_B_BLKCON1.b3)
#define DTM1K		(_B_BLKCON1.b7)

#define DSIO0		(_B_BLKCON2.b0)
#define DSIOF0		(_B_BLKCON2.b1)
#define DUA0		(_B_BLKCON2.b2)
#define DUA1		(_B_BLKCON2.b3)
#define DUAF0		(_B_BLKCON2.b4)
#define DUAF1		(_B_BLKCON2.b5)
#define DI2CF0		(_B_BLKCON2.b6)
#define DI2CF1		(_B_BLKCON2.b7)

#define DMD0		(_B_BLKCON3.b0)
#define DI2C1		(_B_BLKCON3.b5)
#define DCMP0		(_B_BLKCON3.b6)
#define DCMP1		(_B_BLKCON3.b7)

#define DSAD		(_B_BLKCON4.b0)
#define DRAD		(_B_BLKCON4.b1)
#define DLCD		(_B_BLKCON4.b6)

#define DRTC0		(_B_BLKCON5.b0)
#define DVLS		(_B_BLKCON5.b1)
#define DLLD		(_B_BLKCON5.b2)
#define DRTC1		(_B_BLKCON5.b6)
#define DRTC2		(_B_BLKCON5.b7)

#define T1KC0		(_B_T1KCRL.b0)
#define T1KC1		(_B_T1KCRL.b1)
#define T1KC2		(_B_T1KCRL.b2)
#define T1KC3		(_B_T1KCRL.b3)
#define T1KC4		(_B_T1KCRL.b4)
#define T1KC5		(_B_T1KCRL.b5)
#define T1KC6		(_B_T1KCRL.b6)
#define T1KC7		(_B_T1KCRL.b7)

#define T1KC8		(_B_T1KCRH.b0)
#define T1KC9		(_B_T1KCRH.b1)
#define T1KC10		(_B_T1KCRH.b2)
#define T1KC11		(_B_T1KCRH.b3)
#define T1KC12		(_B_T1KCRH.b4)

#define T1KRUN		(_B_T1KCON.b0)
#define T1KSEL0		(_B_T1KCON.b1)
#define T1KSEL1		(_B_T1KCON.b2)
#define T1KSEL2		(_B_T1KCON.b3)

#define FA0		(_B_FLASHAL.b0)
#define FA1		(_B_FLASHAL.b1)
#define FA2		(_B_FLASHAL.b2)
#define FA3		(_B_FLASHAL.b3)
#define FA4		(_B_FLASHAL.b4)
#define FA5		(_B_FLASHAL.b5)
#define FA6		(_B_FLASHAL.b6)
#define FA7		(_B_FLASHAL.b7)

#define FA8		(_B_FLASHAH.b0)
#define FA9		(_B_FLASHAH.b1)
#define FA10		(_B_FLASHAH.b2)
#define FA11		(_B_FLASHAH.b3)
#define FA12		(_B_FLASHAH.b4)
#define FA13		(_B_FLASHAH.b5)
#define FA14		(_B_FLASHAH.b6)
#define FA15		(_B_FLASHAH.b7)

#define FD0		(_B_FLASHDL.b0)
#define FD1		(_B_FLASHDL.b1)
#define FD2		(_B_FLASHDL.b2)
#define FD3		(_B_FLASHDL.b3)
#define FD4		(_B_FLASHDL.b4)
#define FD5		(_B_FLASHDL.b5)
#define FD6		(_B_FLASHDL.b6)
#define FD7		(_B_FLASHDL.b7)

#define FD8		(_B_FLASHDH.b0)
#define FD9		(_B_FLASHDH.b1)
#define FD10		(_B_FLASHDH.b2)
#define FD11		(_B_FLASHDH.b3)
#define FD12		(_B_FLASHDH.b4)
#define FD13		(_B_FLASHDH.b5)
#define FD14		(_B_FLASHDH.b6)
#define FD15		(_B_FLASHDH.b7)

#define FERS		(_B_FLASHCON.b0)
#define FSERS		(_B_FLASHCON.b1)

#define FSEG0		(_B_FLASHSEG.b0)
#define FSEG1		(_B_FLASHSEG.b1)
#define FSEG2		(_B_FLASHSEG.b2)

#define FSELF		(_B_FLASHSLF.b0)

#define REA12		(_B_REMAPADD.b0)
#define REA13		(_B_REMAPADD.b1)
#define REA14		(_B_REMAPADD.b2)
#define REA15		(_B_REMAPADD.b3)
#define RES0		(_B_REMAPADD.b4)
#define RES1		(_B_REMAPADD.b5)
#define RES2		(_B_REMAPADD.b6)
#define RBTA		(_B_REMAPADD.b7)

#define TST0PD		(_B_TST0PDCT.b0)

#define BSON		(_B_BIASCON.b0)
#define BSN0		(_B_BIASCON.b1)
#define BSN1		(_B_BIASCON.b2)
#define BSN2		(_B_BIASCON.b3)
#define BSEL0		(_B_BIASCON.b4)
#define BSEL1		(_B_BIASCON.b5)
#define VLCD		(_B_BIASCON.b6)
#define SELX2		(_B_BIASCON.b7)

#define LCN0		(_B_DSPCNT.b0)
#define LCN1		(_B_DSPCNT.b1)
#define LCN2		(_B_DSPCNT.b2)
#define LCN3		(_B_DSPCNT.b3)
#define LCN4		(_B_DSPCNT.b4)

#define DUTY0		(_B_DSPMOD0.b0)
#define DUTY1		(_B_DSPMOD0.b1)
#define DUTY2		(_B_DSPMOD0.b2)
#define DUTY3		(_B_DSPMOD0.b3)
#define DUTY4		(_B_DSPMOD0.b4)

#define LMD0		(_B_DSPCON0.b0)
#define LMD1		(_B_DSPCON0.b1)

#define SDR		(_B_DSPCON1.b0)
#define CDR		(_B_DSPCON1.b2)
#define REV		(_B_DSPCON1.b4)

#define LCL0		(_B_DSPCON2.b0)
#define LCL1		(_B_DSPCON2.b1)
#define LCL2		(_B_DSPCON2.b2)
#define LCL3		(_B_DSPCON2.b3)
#define LCL4		(_B_DSPCON2.b4)

#define INV		(_B_DSPCON3.b0)

#define ZAD0		(_B_DSPOFST.b0)
#define ZAD1		(_B_DSPOFST.b1)
#define ZAD2		(_B_DSPOFST.b2)
#define ZAD3		(_B_DSPOFST.b3)
#define ZAD4		(_B_DSPOFST.b4)

#define DSPSLA		(_B_DSPBUF.b0)

#define DCL0		(_B_DSPCLK.b0)
#define DCL1		(_B_DSPCLK.b1)
#define DCL2		(_B_DSPCLK.b2)
#define DCL3		(_B_DSPCLK.b3)
#define DCL4		(_B_DSPCLK.b4)
#define DCL5		(_B_DSPCLK.b5)
#define DCL6		(_B_DSPCLK.b6)

#define FRMIEN		(_B_LCDISET.b0)

#define FRMIST		(_B_LCDISTAT.b0)

#define P00D		(_B_P0D.b0)
#define P01D		(_B_P0D.b1)
#define P02D		(_B_P0D.b2)
#define P03D		(_B_P0D.b3)
#define P04D		(_B_P0D.b4)
#define P05D		(_B_P0D.b5)

#define P00DIR		(_B_P0DIR.b0)
#define P01DIR		(_B_P0DIR.b1)
#define P02DIR		(_B_P0DIR.b2)
#define P03DIR		(_B_P0DIR.b3)
#define P04DIR		(_B_P0DIR.b4)
#define P05DIR		(_B_P0DIR.b5)

#define P00C0		(_B_P0CON0.b0)
#define P01C0		(_B_P0CON0.b1)
#define P02C0		(_B_P0CON0.b2)
#define P03C0		(_B_P0CON0.b3)
#define P04C0		(_B_P0CON0.b4)
#define P05C0		(_B_P0CON0.b5)

#define P00C1		(_B_P0CON1.b0)
#define P01C1		(_B_P0CON1.b1)
#define P02C1		(_B_P0CON1.b2)
#define P03C1		(_B_P0CON1.b3)
#define P04C1		(_B_P0CON1.b4)
#define P05C1		(_B_P0CON1.b5)

#define P00MD0		(_B_P0MOD0.b0)
#define P01MD0		(_B_P0MOD0.b1)
#define P02MD0		(_B_P0MOD0.b2)
#define P03MD0		(_B_P0MOD0.b3)
#define P04MD0		(_B_P0MOD0.b4)
#define P05MD0		(_B_P0MOD0.b5)

#define P00MD1		(_B_P0MOD1.b0)
#define P01MD1		(_B_P0MOD1.b1)
#define P02MD1		(_B_P0MOD1.b2)
#define P03MD1		(_B_P0MOD1.b3)
#define P04MD1		(_B_P0MOD1.b4)
#define P05MD1		(_B_P0MOD1.b5)

#define P20D		(_B_P2D.b0)
#define P21D		(_B_P2D.b1)
#define P22D		(_B_P2D.b2)
#define P23D		(_B_P2D.b3)

#define P20DIR		(_B_P2DIR.b0)
#define P21DIR		(_B_P2DIR.b1)
#define P22DIR		(_B_P2DIR.b2)
#define P23DIR		(_B_P2DIR.b3)

#define P20C0		(_B_P2CON0.b0)
#define P21C0		(_B_P2CON0.b1)
#define P22C0		(_B_P2CON0.b2)
#define P23C0		(_B_P2CON0.b3)

#define P20C1		(_B_P2CON1.b0)
#define P21C1		(_B_P2CON1.b1)
#define P22C1		(_B_P2CON1.b2)
#define P23C1		(_B_P2CON1.b3)

#define P20MD0		(_B_P2MOD0.b0)
#define P21MD0		(_B_P2MOD0.b1)
#define P22MD0		(_B_P2MOD0.b2)
#define P23MD0		(_B_P2MOD0.b3)

#define P20MD1		(_B_P2MOD1.b0)
#define P21MD1		(_B_P2MOD1.b1)
#define P22MD1		(_B_P2MOD1.b2)
#define P23MD1		(_B_P2MOD1.b3)

#define P30D		(_B_P3D.b0)
#define P31D		(_B_P3D.b1)
#define P32D		(_B_P3D.b2)
#define P33D		(_B_P3D.b3)
#define P34D		(_B_P3D.b4)
#define P35D		(_B_P3D.b5)
#define P36D		(_B_P3D.b6)
#define P37D		(_B_P3D.b7)

#define P30DIR		(_B_P3DIR.b0)
#define P31DIR		(_B_P3DIR.b1)
#define P32DIR		(_B_P3DIR.b2)
#define P33DIR		(_B_P3DIR.b3)
#define P34DIR		(_B_P3DIR.b4)
#define P35DIR		(_B_P3DIR.b5)
#define P36DIR		(_B_P3DIR.b6)
#define P37DIR		(_B_P3DIR.b7)

#define P30C0		(_B_P3CON0.b0)
#define P31C0		(_B_P3CON0.b1)
#define P32C0		(_B_P3CON0.b2)
#define P33C0		(_B_P3CON0.b3)
#define P34C0		(_B_P3CON0.b4)
#define P35C0		(_B_P3CON0.b5)
#define P36C0		(_B_P3CON0.b6)
#define P37C0		(_B_P3CON0.b7)

#define P30C1		(_B_P3CON1.b0)
#define P31C1		(_B_P3CON1.b1)
#define P32C1		(_B_P3CON1.b2)
#define P33C1		(_B_P3CON1.b3)
#define P34C1		(_B_P3CON1.b4)
#define P35C1		(_B_P3CON1.b5)
#define P36C1		(_B_P3CON1.b6)
#define P37C1		(_B_P3CON1.b7)

#define P30MD0		(_B_P3MOD0.b0)
#define P31MD0		(_B_P3MOD0.b1)
#define P32MD0		(_B_P3MOD0.b2)
#define P33MD0		(_B_P3MOD0.b3)
#define P34MD0		(_B_P3MOD0.b4)
#define P35MD0		(_B_P3MOD0.b5)
#define P36MD0		(_B_P3MOD0.b6)
#define P37MD0		(_B_P3MOD0.b7)

#define P30MD1		(_B_P3MOD1.b0)
#define P31MD1		(_B_P3MOD1.b1)
#define P32MD1		(_B_P3MOD1.b2)
#define P33MD1		(_B_P3MOD1.b3)
#define P34MD1		(_B_P3MOD1.b4)
#define P35MD1		(_B_P3MOD1.b5)
#define P36MD1		(_B_P3MOD1.b6)
#define P37MD1		(_B_P3MOD1.b7)

#define P30MD2		(_B_P3MOD2.b0)
#define P31MD2		(_B_P3MOD2.b1)
#define P32MD2		(_B_P3MOD2.b2)
#define P33MD2		(_B_P3MOD2.b3)
#define P34MD2		(_B_P3MOD2.b4)
#define P35MD2		(_B_P3MOD2.b5)
#define P36MD2		(_B_P3MOD2.b6)
#define P37MD2		(_B_P3MOD2.b7)

#define P40D		(_B_P4D.b0)
#define P41D		(_B_P4D.b1)
#define P42D		(_B_P4D.b2)
#define P43D		(_B_P4D.b3)
#define P44D		(_B_P4D.b4)
#define P45D		(_B_P4D.b5)
#define P46D		(_B_P4D.b6)
#define P47D		(_B_P4D.b7)

#define P40DIR		(_B_P4DIR.b0)
#define P41DIR		(_B_P4DIR.b1)
#define P42DIR		(_B_P4DIR.b2)
#define P43DIR		(_B_P4DIR.b3)
#define P44DIR		(_B_P4DIR.b4)
#define P45DIR		(_B_P4DIR.b5)
#define P46DIR		(_B_P4DIR.b6)
#define P47DIR		(_B_P4DIR.b7)

#define P40C0		(_B_P4CON0.b0)
#define P41C0		(_B_P4CON0.b1)
#define P42C0		(_B_P4CON0.b2)
#define P43C0		(_B_P4CON0.b3)
#define P44C0		(_B_P4CON0.b4)
#define P45C0		(_B_P4CON0.b5)
#define P46C0		(_B_P4CON0.b6)
#define P47C0		(_B_P4CON0.b7)

#define P40C1		(_B_P4CON1.b0)
#define P41C1		(_B_P4CON1.b1)
#define P42C1		(_B_P4CON1.b2)
#define P43C1		(_B_P4CON1.b3)
#define P44C1		(_B_P4CON1.b4)
#define P45C1		(_B_P4CON1.b5)
#define P46C1		(_B_P4CON1.b6)
#define P47C1		(_B_P4CON1.b7)

#define P40MD0		(_B_P4MOD0.b0)
#define P41MD0		(_B_P4MOD0.b1)
#define P42MD0		(_B_P4MOD0.b2)
#define P43MD0		(_B_P4MOD0.b3)
#define P44MD0		(_B_P4MOD0.b4)
#define P45MD0		(_B_P4MOD0.b5)
#define P46MD0		(_B_P4MOD0.b6)
#define P47MD0		(_B_P4MOD0.b7)

#define P40MD1		(_B_P4MOD1.b0)
#define P41MD1		(_B_P4MOD1.b1)
#define P42MD1		(_B_P4MOD1.b2)
#define P43MD1		(_B_P4MOD1.b3)
#define P44MD1		(_B_P4MOD1.b4)
#define P45MD1		(_B_P4MOD1.b5)
#define P46MD1		(_B_P4MOD1.b6)
#define P47MD1		(_B_P4MOD1.b7)

#define P50D		(_B_P5D.b0)
#define P51D		(_B_P5D.b1)
#define P52D		(_B_P5D.b2)
#define P53D		(_B_P5D.b3)
#define P54D		(_B_P5D.b4)
#define P55D		(_B_P5D.b5)
#define P56D		(_B_P5D.b6)
#define P57D		(_B_P5D.b7)

#define P50DIR		(_B_P5DIR.b0)
#define P51DIR		(_B_P5DIR.b1)
#define P52DIR		(_B_P5DIR.b2)
#define P53DIR		(_B_P5DIR.b3)
#define P54DIR		(_B_P5DIR.b4)
#define P55DIR		(_B_P5DIR.b5)
#define P56DIR		(_B_P5DIR.b6)
#define P57DIR		(_B_P5DIR.b7)

#define P50C0		(_B_P5CON0.b0)
#define P51C0		(_B_P5CON0.b1)
#define P52C0		(_B_P5CON0.b2)
#define P53C0		(_B_P5CON0.b3)
#define P54C0		(_B_P5CON0.b4)
#define P55C0		(_B_P5CON0.b5)
#define P56C0		(_B_P5CON0.b6)
#define P57C0		(_B_P5CON0.b7)

#define P50C1		(_B_P5CON1.b0)
#define P51C1		(_B_P5CON1.b1)
#define P52C1		(_B_P5CON1.b2)
#define P53C1		(_B_P5CON1.b3)
#define P54C1		(_B_P5CON1.b4)
#define P55C1		(_B_P5CON1.b5)
#define P56C1		(_B_P5CON1.b6)
#define P57C1		(_B_P5CON1.b7)

#define P50MD0		(_B_P5MOD0.b0)
#define P51MD0		(_B_P5MOD0.b1)
#define P52MD0		(_B_P5MOD0.b2)
#define P53MD0		(_B_P5MOD0.b3)
#define P54MD0		(_B_P5MOD0.b4)
#define P55MD0		(_B_P5MOD0.b5)
#define P56MD0		(_B_P5MOD0.b6)
#define P57MD0		(_B_P5MOD0.b7)

#define P50MD1		(_B_P5MOD1.b0)
#define P51MD1		(_B_P5MOD1.b1)
#define P52MD1		(_B_P5MOD1.b2)
#define P53MD1		(_B_P5MOD1.b3)
#define P54MD1		(_B_P5MOD1.b4)
#define P55MD1		(_B_P5MOD1.b5)
#define P56MD1		(_B_P5MOD1.b6)
#define P57MD1		(_B_P5MOD1.b7)

#define P50MD2		(_B_P5MOD2.b0)
#define P51MD2		(_B_P5MOD2.b1)
#define P52MD2		(_B_P5MOD2.b2)
#define P53MD2		(_B_P5MOD2.b3)
#define P54MD2		(_B_P5MOD2.b4)
#define P55MD2		(_B_P5MOD2.b5)
#define P56MD2		(_B_P5MOD2.b6)
#define P57MD2		(_B_P5MOD2.b7)

#define P60D		(_B_P6D.b0)
#define P61D		(_B_P6D.b1)

#define P60DIR		(_B_P6DIR.b0)
#define P61DIR		(_B_P6DIR.b1)

#define P60C0		(_B_P6CON0.b0)
#define P61C0		(_B_P6CON0.b1)

#define P60C1		(_B_P6CON1.b0)
#define P61C1		(_B_P6CON1.b1)

#define P60MD0		(_B_P6MOD0.b0)
#define P61MD0		(_B_P6MOD0.b1)

#define P60MD1		(_B_P6MOD1.b0)
#define P61MD1		(_B_P6MOD1.b1)

#define P70D		(_B_P7D.b0)
#define P71D		(_B_P7D.b1)
#define P72D		(_B_P7D.b2)
#define P73D		(_B_P7D.b3)
#define P74D		(_B_P7D.b4)
#define P75D		(_B_P7D.b5)
#define P76D		(_B_P7D.b6)
#define P77D		(_B_P7D.b7)

#define P70DIR		(_B_P7DIR.b0)
#define P71DIR		(_B_P7DIR.b1)
#define P72DIR		(_B_P7DIR.b2)
#define P73DIR		(_B_P7DIR.b3)
#define P74DIR		(_B_P7DIR.b4)
#define P75DIR		(_B_P7DIR.b5)
#define P76DIR		(_B_P7DIR.b6)
#define P77DIR		(_B_P7DIR.b7)

#define P70C0		(_B_P7CON0.b0)
#define P71C0		(_B_P7CON0.b1)
#define P72C0		(_B_P7CON0.b2)
#define P73C0		(_B_P7CON0.b3)
#define P74C0		(_B_P7CON0.b4)
#define P75C0		(_B_P7CON0.b5)
#define P76C0		(_B_P7CON0.b6)
#define P77C0		(_B_P7CON0.b7)

#define P70C1		(_B_P7CON1.b0)
#define P71C1		(_B_P7CON1.b1)
#define P72C1		(_B_P7CON1.b2)
#define P73C1		(_B_P7CON1.b3)
#define P74C1		(_B_P7CON1.b4)
#define P75C1		(_B_P7CON1.b5)
#define P76C1		(_B_P7CON1.b6)
#define P77C1		(_B_P7CON1.b7)

#define P70MD0		(_B_P7MOD0.b0)
#define P71MD0		(_B_P7MOD0.b1)
#define P72MD0		(_B_P7MOD0.b2)
#define P73MD0		(_B_P7MOD0.b3)
#define P74MD0		(_B_P7MOD0.b4)
#define P75MD0		(_B_P7MOD0.b5)
#define P76MD0		(_B_P7MOD0.b6)
#define P77MD0		(_B_P7MOD0.b7)

#define P80D		(_B_P8D.b0)
#define P81D		(_B_P8D.b1)
#define P82D		(_B_P8D.b2)
#define P83D		(_B_P8D.b3)
#define P84D		(_B_P8D.b4)
#define P85D		(_B_P8D.b5)
#define P86D		(_B_P8D.b6)
#define P87D		(_B_P8D.b7)

#define P80DIR		(_B_P8DIR.b0)
#define P81DIR		(_B_P8DIR.b1)
#define P82DIR		(_B_P8DIR.b2)
#define P83DIR		(_B_P8DIR.b3)
#define P84DIR		(_B_P8DIR.b4)
#define P85DIR		(_B_P8DIR.b5)
#define P86DIR		(_B_P8DIR.b6)
#define P87DIR		(_B_P8DIR.b7)

#define P80C0		(_B_P8CON0.b0)
#define P81C0		(_B_P8CON0.b1)
#define P82C0		(_B_P8CON0.b2)
#define P83C0		(_B_P8CON0.b3)
#define P84C0		(_B_P8CON0.b4)
#define P85C0		(_B_P8CON0.b5)
#define P86C0		(_B_P8CON0.b6)
#define P87C0		(_B_P8CON0.b7)

#define P80C1		(_B_P8CON1.b0)
#define P81C1		(_B_P8CON1.b1)
#define P82C1		(_B_P8CON1.b2)
#define P83C1		(_B_P8CON1.b3)
#define P84C1		(_B_P8CON1.b4)
#define P85C1		(_B_P8CON1.b5)
#define P86C1		(_B_P8CON1.b6)
#define P87C1		(_B_P8CON1.b7)

#define P80MD0		(_B_P8MOD0.b0)
#define P81MD0		(_B_P8MOD0.b1)
#define P82MD0		(_B_P8MOD0.b2)
#define P83MD0		(_B_P8MOD0.b3)
#define P84MD0		(_B_P8MOD0.b4)
#define P85MD0		(_B_P8MOD0.b5)
#define P86MD0		(_B_P8MOD0.b6)
#define P87MD0		(_B_P8MOD0.b7)

#define T0D0		(_B_TM0D.b0)
#define T0D1		(_B_TM0D.b1)
#define T0D2		(_B_TM0D.b2)
#define T0D3		(_B_TM0D.b3)
#define T0D4		(_B_TM0D.b4)
#define T0D5		(_B_TM0D.b5)
#define T0D6		(_B_TM0D.b6)
#define T0D7		(_B_TM0D.b7)

#define T1D0		(_B_TM1D.b0)
#define T1D1		(_B_TM1D.b1)
#define T1D2		(_B_TM1D.b2)
#define T1D3		(_B_TM1D.b3)
#define T1D4		(_B_TM1D.b4)
#define T1D5		(_B_TM1D.b5)
#define T1D6		(_B_TM1D.b6)
#define T1D7		(_B_TM1D.b7)

#define T2D0		(_B_TM2D.b0)
#define T2D1		(_B_TM2D.b1)
#define T2D2		(_B_TM2D.b2)
#define T2D3		(_B_TM2D.b3)
#define T2D4		(_B_TM2D.b4)
#define T2D5		(_B_TM2D.b5)
#define T2D6		(_B_TM2D.b6)
#define T2D7		(_B_TM2D.b7)

#define T3D0		(_B_TM3D.b0)
#define T3D1		(_B_TM3D.b1)
#define T3D2		(_B_TM3D.b2)
#define T3D3		(_B_TM3D.b3)
#define T3D4		(_B_TM3D.b4)
#define T3D5		(_B_TM3D.b5)
#define T3D6		(_B_TM3D.b6)
#define T3D7		(_B_TM3D.b7)

#define T4D0		(_B_TM4D.b0)
#define T4D1		(_B_TM4D.b1)
#define T4D2		(_B_TM4D.b2)
#define T4D3		(_B_TM4D.b3)
#define T4D4		(_B_TM4D.b4)
#define T4D5		(_B_TM4D.b5)
#define T4D6		(_B_TM4D.b6)
#define T4D7		(_B_TM4D.b7)

#define T5D0		(_B_TM5D.b0)
#define T5D1		(_B_TM5D.b1)
#define T5D2		(_B_TM5D.b2)
#define T5D3		(_B_TM5D.b3)
#define T5D4		(_B_TM5D.b4)
#define T5D5		(_B_TM5D.b5)
#define T5D6		(_B_TM5D.b6)
#define T5D7		(_B_TM5D.b7)

#define T6D0		(_B_TM6D.b0)
#define T6D1		(_B_TM6D.b1)
#define T6D2		(_B_TM6D.b2)
#define T6D3		(_B_TM6D.b3)
#define T6D4		(_B_TM6D.b4)
#define T6D5		(_B_TM6D.b5)
#define T6D6		(_B_TM6D.b6)
#define T6D7		(_B_TM6D.b7)

#define T7D0		(_B_TM7D.b0)
#define T7D1		(_B_TM7D.b1)
#define T7D2		(_B_TM7D.b2)
#define T7D3		(_B_TM7D.b3)
#define T7D4		(_B_TM7D.b4)
#define T7D5		(_B_TM7D.b5)
#define T7D6		(_B_TM7D.b6)
#define T7D7		(_B_TM7D.b7)

#define T0C0		(_B_TM0C.b0)
#define T0C1		(_B_TM0C.b1)
#define T0C2		(_B_TM0C.b2)
#define T0C3		(_B_TM0C.b3)
#define T0C4		(_B_TM0C.b4)
#define T0C5		(_B_TM0C.b5)
#define T0C6		(_B_TM0C.b6)
#define T0C7		(_B_TM0C.b7)

#define T1C0		(_B_TM1C.b0)
#define T1C1		(_B_TM1C.b1)
#define T1C2		(_B_TM1C.b2)
#define T1C3		(_B_TM1C.b3)
#define T1C4		(_B_TM1C.b4)
#define T1C5		(_B_TM1C.b5)
#define T1C6		(_B_TM1C.b6)
#define T1C7		(_B_TM1C.b7)

#define T2C0		(_B_TM2C.b0)
#define T2C1		(_B_TM2C.b1)
#define T2C2		(_B_TM2C.b2)
#define T2C3		(_B_TM2C.b3)
#define T2C4		(_B_TM2C.b4)
#define T2C5		(_B_TM2C.b5)
#define T2C6		(_B_TM2C.b6)
#define T2C7		(_B_TM2C.b7)

#define T3C0		(_B_TM3C.b0)
#define T3C1		(_B_TM3C.b1)
#define T3C2		(_B_TM3C.b2)
#define T3C3		(_B_TM3C.b3)
#define T3C4		(_B_TM3C.b4)
#define T3C5		(_B_TM3C.b5)
#define T3C6		(_B_TM3C.b6)
#define T3C7		(_B_TM3C.b7)

#define T4C0		(_B_TM4C.b0)
#define T4C1		(_B_TM4C.b1)
#define T4C2		(_B_TM4C.b2)
#define T4C3		(_B_TM4C.b3)
#define T4C4		(_B_TM4C.b4)
#define T4C5		(_B_TM4C.b5)
#define T4C6		(_B_TM4C.b6)
#define T4C7		(_B_TM4C.b7)

#define T5C0		(_B_TM5C.b0)
#define T5C1		(_B_TM5C.b1)
#define T5C2		(_B_TM5C.b2)
#define T5C3		(_B_TM5C.b3)
#define T5C4		(_B_TM5C.b4)
#define T5C5		(_B_TM5C.b5)
#define T5C6		(_B_TM5C.b6)
#define T5C7		(_B_TM5C.b7)

#define T6C0		(_B_TM6C.b0)
#define T6C1		(_B_TM6C.b1)
#define T6C2		(_B_TM6C.b2)
#define T6C3		(_B_TM6C.b3)
#define T6C4		(_B_TM6C.b4)
#define T6C5		(_B_TM6C.b5)
#define T6C6		(_B_TM6C.b6)
#define T6C7		(_B_TM6C.b7)

#define T7C0		(_B_TM7C.b0)
#define T7C1		(_B_TM7C.b1)
#define T7C2		(_B_TM7C.b2)
#define T7C3		(_B_TM7C.b3)
#define T7C4		(_B_TM7C.b4)
#define T7C5		(_B_TM7C.b5)
#define T7C6		(_B_TM7C.b6)
#define T7C7		(_B_TM7C.b7)

#define T0CS0		(_B_TM0CON.b0)
#define T0DIV0		(_B_TM0CON.b3)
#define T0DIV1		(_B_TM0CON.b4)
#define T0DIV2		(_B_TM0CON.b5)
#define T01M16		(_B_TM0CON.b6)
#define T0OST		(_B_TM0CON.b7)

#define T1CS0		(_B_TM1CON.b0)
#define T1DIV0		(_B_TM1CON.b3)
#define T1DIV1		(_B_TM1CON.b4)
#define T1DIV2		(_B_TM1CON.b5)
#define T1OST		(_B_TM1CON.b7)

#define T2CS0		(_B_TM2CON.b0)
#define T2CS1		(_B_TM2CON.b1)
#define T2DIV0		(_B_TM2CON.b3)
#define T2DIV1		(_B_TM2CON.b4)
#define T2DIV2		(_B_TM2CON.b5)
#define T23M16		(_B_TM2CON.b6)
#define T2OST		(_B_TM2CON.b7)

#define T3CS0		(_B_TM3CON.b0)
#define T3CS1		(_B_TM3CON.b1)
#define T3DIV0		(_B_TM3CON.b3)
#define T3DIV1		(_B_TM3CON.b4)
#define T3DIV2		(_B_TM3CON.b5)
#define T3OST		(_B_TM3CON.b7)

#define T4CS0		(_B_TM4CON.b0)
#define T4CS1		(_B_TM4CON.b1)
#define T4DIV0		(_B_TM4CON.b3)
#define T4DIV1		(_B_TM4CON.b4)
#define T4DIV2		(_B_TM4CON.b5)
#define T45M16		(_B_TM4CON.b6)
#define T4OST		(_B_TM4CON.b7)

#define T5CS0		(_B_TM5CON.b0)
#define T5CS1		(_B_TM5CON.b1)
#define T5DIV0		(_B_TM5CON.b3)
#define T5DIV1		(_B_TM5CON.b4)
#define T5DIV2		(_B_TM5CON.b5)
#define T5OST		(_B_TM5CON.b7)

#define T6CS0		(_B_TM6CON.b0)
#define T6CS1		(_B_TM6CON.b1)
#define T6DIV0		(_B_TM6CON.b3)
#define T6DIV1		(_B_TM6CON.b4)
#define T6DIV2		(_B_TM6CON.b5)
#define T67M16		(_B_TM6CON.b6)
#define T6OST		(_B_TM6CON.b7)

#define T7CS0		(_B_TM7CON.b0)
#define T7CS1		(_B_TM7CON.b1)
#define T7DIV0		(_B_TM7CON.b3)
#define T7DIV1		(_B_TM7CON.b4)
#define T7DIV2		(_B_TM7CON.b5)
#define T7OST		(_B_TM7CON.b7)

#define T0RUN		(_B_TMSTR0.b0)
#define T1RUN		(_B_TMSTR0.b1)
#define T2RUN		(_B_TMSTR0.b2)
#define T3RUN		(_B_TMSTR0.b3)
#define T4RUN		(_B_TMSTR0.b4)
#define T5RUN		(_B_TMSTR0.b5)
#define T6RUN		(_B_TMSTR0.b6)
#define T7RUN		(_B_TMSTR0.b7)

#define T0STP		(_B_TMSTP0.b0)
#define T1STP		(_B_TMSTP0.b1)
#define T2STP		(_B_TMSTP0.b2)
#define T3STP		(_B_TMSTP0.b3)
#define T4STP		(_B_TMSTP0.b4)
#define T5STP		(_B_TMSTP0.b5)
#define T6STP		(_B_TMSTP0.b6)
#define T7STP		(_B_TMSTP0.b7)

#define T0STAT		(_B_TMSTAT0.b0)
#define T1STAT		(_B_TMSTAT0.b1)
#define T2STAT		(_B_TMSTAT0.b2)
#define T3STAT		(_B_TMSTAT0.b3)
#define T4STAT		(_B_TMSTAT0.b4)
#define T5STAT		(_B_TMSTAT0.b5)
#define T6STAT		(_B_TMSTAT0.b6)
#define T7STAT		(_B_TMSTAT0.b7)

#define R0S0		(_B_RTC0SEC.b0)
#define R0S1		(_B_RTC0SEC.b1)
#define R0S2		(_B_RTC0SEC.b2)
#define R0S3		(_B_RTC0SEC.b3)
#define R0S4		(_B_RTC0SEC.b4)
#define R0S5		(_B_RTC0SEC.b5)
#define R0R6		(_B_RTC0SEC.b6)

#define R0M0		(_B_RTC0MIN.b0)
#define R0M1		(_B_RTC0MIN.b1)
#define R0M2		(_B_RTC0MIN.b2)
#define R0M3		(_B_RTC0MIN.b3)
#define R0M4		(_B_RTC0MIN.b4)
#define R0M5		(_B_RTC0MIN.b5)
#define R0M6		(_B_RTC0MIN.b6)

#define R0H0		(_B_RTC0HOUR.b0)
#define R0H1		(_B_RTC0HOUR.b1)
#define R0H2		(_B_RTC0HOUR.b2)
#define R0H3		(_B_RTC0HOUR.b3)
#define R0H4		(_B_RTC0HOUR.b4)
#define R0H5		(_B_RTC0HOUR.b5)

#define R0W0		(_B_RTC0WEEK.b0)
#define R0W1		(_B_RTC0WEEK.b1)
#define R0W2		(_B_RTC0WEEK.b2)

#define R0D0		(_B_RTC0DAY.b0)
#define R0D1		(_B_RTC0DAY.b1)
#define R0D2		(_B_RTC0DAY.b2)
#define R0D3		(_B_RTC0DAY.b3)
#define R0D4		(_B_RTC0DAY.b4)
#define R0D5		(_B_RTC0DAY.b5)

#define R0MO0		(_B_RTC0MON.b0)
#define R0MO1		(_B_RTC0MON.b1)
#define R0MO2		(_B_RTC0MON.b2)
#define R0MO3		(_B_RTC0MON.b3)
#define R0MO4		(_B_RTC0MON.b4)

#define R0Y0		(_B_RTC0YEAR.b0)
#define R0Y1		(_B_RTC0YEAR.b1)
#define R0Y2		(_B_RTC0YEAR.b2)
#define R0Y3		(_B_RTC0YEAR.b3)
#define R0Y4		(_B_RTC0YEAR.b4)
#define R0Y5		(_B_RTC0YEAR.b5)
#define R0Y6		(_B_RTC0YEAR.b6)
#define R0Y7		(_B_RTC0YEAR.b7)

#define RTC0EN		(_B_RTC0CON.b0)
#define R0IN0		(_B_RTC0CON.b1)
#define R0IN1		(_B_RTC0CON.b2)

#define AL10M0		(_B_AL10MIN.b0)
#define AL10M1		(_B_AL10MIN.b1)
#define AL10M2		(_B_AL10MIN.b2)
#define AL10M3		(_B_AL10MIN.b3)
#define AL10M4		(_B_AL10MIN.b4)
#define AL10M5		(_B_AL10MIN.b5)
#define AL10M6		(_B_AL10MIN.b6)

#define AL10H0		(_B_AL10HOUR.b0)
#define AL10H1		(_B_AL10HOUR.b1)
#define AL10H2		(_B_AL10HOUR.b2)
#define AL10H3		(_B_AL10HOUR.b3)
#define AL10H4		(_B_AL10HOUR.b4)
#define AL10H5		(_B_AL10HOUR.b5)

#define AL10D0		(_B_AL10DAY.b0)
#define AL10D1		(_B_AL10DAY.b1)
#define AL10D2		(_B_AL10DAY.b2)
#define AL10D3		(_B_AL10DAY.b3)
#define AL10D4		(_B_AL10DAY.b4)
#define AL10D5		(_B_AL10DAY.b5)

#define AL10MO0		(_B_AL10MON.b0)
#define AL10MO1		(_B_AL10MON.b1)
#define AL10MO2		(_B_AL10MON.b2)
#define AL10MO3		(_B_AL10MON.b3)
#define AL10MO4		(_B_AL10MON.b4)

#define R1S0		(_B_RTC1SEC.b0)
#define R1S1		(_B_RTC1SEC.b1)
#define R1S2		(_B_RTC1SEC.b2)
#define R1S3		(_B_RTC1SEC.b3)
#define R1S4		(_B_RTC1SEC.b4)
#define R1S5		(_B_RTC1SEC.b5)
#define R1R6		(_B_RTC1SEC.b6)

#define R1M0		(_B_RTC1MIN.b0)
#define R1M1		(_B_RTC1MIN.b1)
#define R1M2		(_B_RTC1MIN.b2)
#define R1M3		(_B_RTC1MIN.b3)
#define R1M4		(_B_RTC1MIN.b4)
#define R1M5		(_B_RTC1MIN.b5)
#define R1M6		(_B_RTC1MIN.b6)

#define R1H0		(_B_RTC1HOUR.b0)
#define R1H1		(_B_RTC1HOUR.b1)
#define R1H2		(_B_RTC1HOUR.b2)
#define R1H3		(_B_RTC1HOUR.b3)
#define R1H4		(_B_RTC1HOUR.b4)
#define R1H5		(_B_RTC1HOUR.b5)

#define R1W0		(_B_RTC1WEEK.b0)
#define R1W1		(_B_RTC1WEEK.b1)
#define R1W2		(_B_RTC1WEEK.b2)

#define R1D0		(_B_RTC1DAY.b0)
#define R1D1		(_B_RTC1DAY.b1)
#define R1D2		(_B_RTC1DAY.b2)
#define R1D3		(_B_RTC1DAY.b3)
#define R1D4		(_B_RTC1DAY.b4)
#define R1D5		(_B_RTC1DAY.b5)

#define R1MO0		(_B_RTC1MON.b0)
#define R1MO1		(_B_RTC1MON.b1)
#define R1MO2		(_B_RTC1MON.b2)
#define R1MO3		(_B_RTC1MON.b3)
#define R1MO4		(_B_RTC1MON.b4)

#define R1Y0		(_B_RTC1YEAR.b0)
#define R1Y1		(_B_RTC1YEAR.b1)
#define R1Y2		(_B_RTC1YEAR.b2)
#define R1Y3		(_B_RTC1YEAR.b3)
#define R1Y4		(_B_RTC1YEAR.b4)
#define R1Y5		(_B_RTC1YEAR.b5)
#define R1Y6		(_B_RTC1YEAR.b6)
#define R1Y7		(_B_RTC1YEAR.b7)

#define RTC1EN		(_B_RTC1CON.b0)
#define R1IN0		(_B_RTC1CON.b1)
#define R1IN1		(_B_RTC1CON.b2)

#define AL11M0		(_B_AL11MIN.b0)
#define AL11M1		(_B_AL11MIN.b1)
#define AL11M2		(_B_AL11MIN.b2)
#define AL11M3		(_B_AL11MIN.b3)
#define AL11M4		(_B_AL11MIN.b4)
#define AL11M5		(_B_AL11MIN.b5)
#define AL11M6		(_B_AL11MIN.b6)

#define AL11H0		(_B_AL11HOUR.b0)
#define AL11H1		(_B_AL11HOUR.b1)
#define AL11H2		(_B_AL11HOUR.b2)
#define AL11H3		(_B_AL11HOUR.b3)
#define AL11H4		(_B_AL11HOUR.b4)
#define AL11H5		(_B_AL11HOUR.b5)

#define AL11D0		(_B_AL11DAY.b0)
#define AL11D1		(_B_AL11DAY.b1)
#define AL11D2		(_B_AL11DAY.b2)
#define AL11D3		(_B_AL11DAY.b3)
#define AL11D4		(_B_AL11DAY.b4)
#define AL11D5		(_B_AL11DAY.b5)

#define AL11MO0		(_B_AL11MON.b0)
#define AL11MO1		(_B_AL11MON.b1)
#define AL11MO2		(_B_AL11MON.b2)
#define AL11MO3		(_B_AL11MON.b3)
#define AL11MO4		(_B_AL11MON.b4)

#define R2S0		(_B_RTC2SEC.b0)
#define R2S1		(_B_RTC2SEC.b1)
#define R2S2		(_B_RTC2SEC.b2)
#define R2S3		(_B_RTC2SEC.b3)
#define R2S4		(_B_RTC2SEC.b4)
#define R2S5		(_B_RTC2SEC.b5)
#define R2R6		(_B_RTC2SEC.b6)

#define R2M0		(_B_RTC2MIN.b0)
#define R2M1		(_B_RTC2MIN.b1)
#define R2M2		(_B_RTC2MIN.b2)
#define R2M3		(_B_RTC2MIN.b3)
#define R2M4		(_B_RTC2MIN.b4)
#define R2M5		(_B_RTC2MIN.b5)
#define R2M6		(_B_RTC2MIN.b6)

#define R2H0		(_B_RTC2HOUR.b0)
#define R2H1		(_B_RTC2HOUR.b1)
#define R2H2		(_B_RTC2HOUR.b2)
#define R2H3		(_B_RTC2HOUR.b3)
#define R2H4		(_B_RTC2HOUR.b4)
#define R2H5		(_B_RTC2HOUR.b5)

#define R2W0		(_B_RTC2WEEK.b0)
#define R2W1		(_B_RTC2WEEK.b1)
#define R2W2		(_B_RTC2WEEK.b2)

#define R2D0		(_B_RTC2DAY.b0)
#define R2D1		(_B_RTC2DAY.b1)
#define R2D2		(_B_RTC2DAY.b2)
#define R2D3		(_B_RTC2DAY.b3)
#define R2D4		(_B_RTC2DAY.b4)
#define R2D5		(_B_RTC2DAY.b5)

#define R2MO0		(_B_RTC2MON.b0)
#define R2MO1		(_B_RTC2MON.b1)
#define R2MO2		(_B_RTC2MON.b2)
#define R2MO3		(_B_RTC2MON.b3)
#define R2MO4		(_B_RTC2MON.b4)

#define R2Y0		(_B_RTC2YEAR.b0)
#define R2Y1		(_B_RTC2YEAR.b1)
#define R2Y2		(_B_RTC2YEAR.b2)
#define R2Y3		(_B_RTC2YEAR.b3)
#define R2Y4		(_B_RTC2YEAR.b4)
#define R2Y5		(_B_RTC2YEAR.b5)
#define R2Y6		(_B_RTC2YEAR.b6)
#define R2Y7		(_B_RTC2YEAR.b7)

#define RTC2EN		(_B_RTC2CON.b0)
#define R2IN1		(_B_RTC2CON.b1)
#define R2IN2		(_B_RTC2CON.b2)

#define AL12M0		(_B_AL12MIN.b0)
#define AL12M1		(_B_AL12MIN.b1)
#define AL12M2		(_B_AL12MIN.b2)
#define AL12M3		(_B_AL12MIN.b3)
#define AL12M4		(_B_AL12MIN.b4)
#define AL12M5		(_B_AL12MIN.b5)
#define AL12M6		(_B_AL12MIN.b6)

#define AL12H0		(_B_AL12HOUR.b0)
#define AL12H1		(_B_AL12HOUR.b1)
#define AL12H2		(_B_AL12HOUR.b2)
#define AL12H3		(_B_AL12HOUR.b3)
#define AL12H4		(_B_AL12HOUR.b4)
#define AL12H5		(_B_AL12HOUR.b5)

#define AL12D0		(_B_AL12DAY.b0)
#define AL12D1		(_B_AL12DAY.b1)
#define AL12D2		(_B_AL12DAY.b2)
#define AL12D3		(_B_AL12DAY.b3)
#define AL12D4		(_B_AL12DAY.b4)
#define AL12D5		(_B_AL12DAY.b5)

#define AL12MO0		(_B_AL12MON.b0)
#define AL12MO1		(_B_AL12MON.b1)
#define AL12MO2		(_B_AL12MON.b2)
#define AL12MO3		(_B_AL12MON.b3)
#define AL12MO4		(_B_AL12MON.b4)

#define FT0RUN		(_B_FT0CON0.b0)
#define FT0TGEN		(_B_FT0CON0.b1)
#define FT0EMGEN		(_B_FT0CON0.b3)
#define FT0SDN		(_B_FT0CON0.b5)

#define FT0UD		(_B_FT0CON1.b0)
#define FT0FLGA		(_B_FT0CON1.b4)
#define FT0FLGB		(_B_FT0CON1.b5)
#define FT0FLGC		(_B_FT0CON1.b6)
#define FT0STAT		(_B_FT0CON1.b7)

#define FT0MD0		(_B_FT0MODL.b0)
#define FT0MD1		(_B_FT0MODL.b1)
#define FT0DTEN		(_B_FT0MODL.b6)
#define FT0OST		(_B_FT0MODL.b7)

#define FT0STPO		(_B_FT0MODH.b0)

#define FT0CK0		(_B_FT0CLKL.b0)
#define FT0CK1		(_B_FT0CLKL.b1)
#define FT0CKD0		(_B_FT0CLKL.b4)
#define FT0CKD1		(_B_FT0CLKL.b5)
#define FT0CKD2		(_B_FT0CLKL.b6)

#define FT0XCK0		(_B_FT0CLKH.b0)
#define FT0XCK1		(_B_FT0CLKH.b1)
#define FT0XCK2		(_B_FT0CLKH.b2)

#define FT0ST0		(_B_FT0TRG0L.b0)
#define FT0ST1		(_B_FT0TRG0L.b1)
#define FT0EXCL		(_B_FT0TRG0L.b2)
#define FT0CST		(_B_FT0TRG0L.b3)

#define FT0STS0		(_B_FT0TRG0H.b0)
#define FT0STS1		(_B_FT0TRG0H.b1)
#define FT0STS2		(_B_FT0TRG0H.b2)
#define FT0STS3		(_B_FT0TRG0H.b3)
#define FT0STSS		(_B_FT0TRG0H.b7)

#define FT0TRM0		(_B_FT0TRG1L.b0)
#define FT0TRM1		(_B_FT0TRG1L.b1)
#define FT0EST0		(_B_FT0TRG1L.b4)
#define FT0EST1		(_B_FT0TRG1L.b5)

#define FT0IEP		(_B_FT0INTEL.b0)
#define FT0IEA		(_B_FT0INTEL.b1)
#define FT0IEB		(_B_FT0INTEL.b2)
#define FT0IETS		(_B_FT0INTEL.b3)
#define FT0IETR		(_B_FT0INTEL.b4)

#define FT0IOP		(_B_FT0INTEH.b0)
#define FT0IOA		(_B_FT0INTEH.b1)
#define FT0IOB		(_B_FT0INTEH.b2)

#define FT0ISP		(_B_FT0INTSL.b0)
#define FT0ISA		(_B_FT0INTSL.b1)
#define FT0ISB		(_B_FT0INTSL.b2)
#define FT0ISTS		(_B_FT0INTSL.b3)
#define FT0ISTR		(_B_FT0INTSL.b4)
#define FT0ISES		(_B_FT0INTSL.b5)

#define FT0ICP		(_B_FT0INTCL.b0)
#define FT0ICA		(_B_FT0INTCL.b1)
#define FT0ICB		(_B_FT0INTCL.b2)
#define FT0ICTS		(_B_FT0INTCL.b3)
#define FT0ICTR		(_B_FT0INTCL.b4)
#define FT0ICES		(_B_FT0INTCL.b5)

#define FT0IR		(_B_FT0INTCH.b7)

#define FT1RUN		(_B_FT1CON0.b0)
#define FT1TGEN		(_B_FT1CON0.b1)
#define FT1EMGEN		(_B_FT1CON0.b3)
#define FT1SDN		(_B_FT1CON0.b5)

#define FT1UD		(_B_FT1CON1.b0)
#define FT1FLGA		(_B_FT1CON1.b4)
#define FT1FLGB		(_B_FT1CON1.b5)
#define FT1FLGC		(_B_FT1CON1.b6)
#define FT1STAT		(_B_FT1CON1.b7)

#define FT1MD0		(_B_FT1MODL.b0)
#define FT1MD1		(_B_FT1MODL.b1)
#define FT1DTEN		(_B_FT1MODL.b6)
#define FT1OST		(_B_FT1MODL.b7)

#define FT1STPO		(_B_FT1MODH.b0)

#define FT1CK0		(_B_FT1CLKL.b0)
#define FT1CK1		(_B_FT1CLKL.b1)
#define FT1CKD0		(_B_FT1CLKL.b4)
#define FT1CKD1		(_B_FT1CLKL.b5)
#define FT1CKD2		(_B_FT1CLKL.b6)

#define FT1XCK0		(_B_FT1CLKH.b0)
#define FT1XCK1		(_B_FT1CLKH.b1)
#define FT1XCK2		(_B_FT1CLKH.b2)

#define FT1ST0		(_B_FT1TRG0L.b0)
#define FT1ST1		(_B_FT1TRG0L.b1)
#define FT1EXCL		(_B_FT1TRG0L.b2)
#define FT1CST		(_B_FT1TRG0L.b3)

#define FT1STS0		(_B_FT1TRG0H.b0)
#define FT1STS1		(_B_FT1TRG0H.b1)
#define FT1STS2		(_B_FT1TRG0H.b2)
#define FT1STS3		(_B_FT1TRG0H.b3)
#define FT1STSS		(_B_FT1TRG0H.b7)

#define FT1TRM0		(_B_FT1TRG1L.b0)
#define FT1TRM1		(_B_FT1TRG1L.b1)
#define FT1EST0		(_B_FT1TRG1L.b4)
#define FT1EST1		(_B_FT1TRG1L.b5)

#define FT1IEP		(_B_FT1INTEL.b0)
#define FT1IEA		(_B_FT1INTEL.b1)
#define FT1IEB		(_B_FT1INTEL.b2)
#define FT1IETS		(_B_FT1INTEL.b3)
#define FT1IETR		(_B_FT1INTEL.b4)

#define FT1IOP		(_B_FT1INTEH.b0)
#define FT1IOA		(_B_FT1INTEH.b1)
#define FT1IOB		(_B_FT1INTEH.b2)

#define FT1ISP		(_B_FT1INTSL.b0)
#define FT1ISA		(_B_FT1INTSL.b1)
#define FT1ISB		(_B_FT1INTSL.b2)
#define FT1ISTS		(_B_FT1INTSL.b3)
#define FT1ISTR		(_B_FT1INTSL.b4)
#define FT1ISES		(_B_FT1INTSL.b5)

#define FT1ICP		(_B_FT1INTCL.b0)
#define FT1ICA		(_B_FT1INTCL.b1)
#define FT1ICB		(_B_FT1INTCL.b2)
#define FT1ICTS		(_B_FT1INTCL.b3)
#define FT1ICTR		(_B_FT1INTCL.b4)
#define FT1ICES		(_B_FT1INTCL.b5)

#define FT1IR		(_B_FT1INTCH.b7)

#define FT2RUN		(_B_FT2CON0.b0)
#define FT2TGEN		(_B_FT2CON0.b1)
#define FT2EMGEN		(_B_FT2CON0.b3)
#define FT2SDN		(_B_FT2CON0.b5)

#define FT2UD		(_B_FT2CON1.b0)
#define FT2FLGA		(_B_FT2CON1.b4)
#define FT2FLGB		(_B_FT2CON1.b5)
#define FT2FLGC		(_B_FT2CON1.b6)
#define FT2STAT		(_B_FT2CON1.b7)

#define FT2MD0		(_B_FT2MODL.b0)
#define FT2MD1		(_B_FT2MODL.b1)
#define FT2DTEN		(_B_FT2MODL.b6)
#define FT2OST		(_B_FT2MODL.b7)

#define FT2STPO		(_B_FT2MODH.b0)

#define FT2CK0		(_B_FT2CLKL.b0)
#define FT2CK1		(_B_FT2CLKL.b1)
#define FT2CKD0		(_B_FT2CLKL.b4)
#define FT2CKD1		(_B_FT2CLKL.b5)
#define FT2CKD2		(_B_FT2CLKL.b6)

#define FT2XCK0		(_B_FT2CLKH.b0)
#define FT2XCK1		(_B_FT2CLKH.b1)
#define FT2XCK2		(_B_FT2CLKH.b2)

#define FT2ST0		(_B_FT2TRG0L.b0)
#define FT2ST1		(_B_FT2TRG0L.b1)
#define FT2EXCL		(_B_FT2TRG0L.b2)
#define FT2CST		(_B_FT2TRG0L.b3)

#define FT2STS0		(_B_FT2TRG0H.b0)
#define FT2STS1		(_B_FT2TRG0H.b1)
#define FT2STS2		(_B_FT2TRG0H.b2)
#define FT2STS3		(_B_FT2TRG0H.b3)
#define FT2STSS		(_B_FT2TRG0H.b7)

#define FT2TRM0		(_B_FT2TRG1L.b0)
#define FT2TRM1		(_B_FT2TRG1L.b1)
#define FT2EST0		(_B_FT2TRG1L.b4)
#define FT2EST1		(_B_FT2TRG1L.b5)

#define FT2IEP		(_B_FT2INTEL.b0)
#define FT2IEA		(_B_FT2INTEL.b1)
#define FT2IEB		(_B_FT2INTEL.b2)
#define FT2IETS		(_B_FT2INTEL.b3)
#define FT2IETR		(_B_FT2INTEL.b4)

#define FT2IOP		(_B_FT2INTEH.b0)
#define FT2IOA		(_B_FT2INTEH.b1)
#define FT2IOB		(_B_FT2INTEH.b2)

#define FT2ISP		(_B_FT2INTSL.b0)
#define FT2ISA		(_B_FT2INTSL.b1)
#define FT2ISB		(_B_FT2INTSL.b2)
#define FT2ISTS		(_B_FT2INTSL.b3)
#define FT2ISTR		(_B_FT2INTSL.b4)
#define FT2ISES		(_B_FT2INTSL.b5)

#define FT2ICP		(_B_FT2INTCL.b0)
#define FT2ICA		(_B_FT2INTCL.b1)
#define FT2ICB		(_B_FT2INTCL.b2)
#define FT2ICTS		(_B_FT2INTCL.b3)
#define FT2ICTR		(_B_FT2INTCL.b4)
#define FT2ICES		(_B_FT2INTCL.b5)

#define FT2IR		(_B_FT2INTCH.b7)

#define FT3RUN		(_B_FT3CON0.b0)
#define FT3TGEN		(_B_FT3CON0.b1)
#define FT3EMGEN		(_B_FT3CON0.b3)
#define FT3SDN		(_B_FT3CON0.b5)

#define FT3UD		(_B_FT3CON1.b0)
#define FT3FLGA		(_B_FT3CON1.b4)
#define FT3FLGB		(_B_FT3CON1.b5)
#define FT3FLGC		(_B_FT3CON1.b6)
#define FT3STAT		(_B_FT3CON1.b7)

#define FT3MD0		(_B_FT3MODL.b0)
#define FT3MD1		(_B_FT3MODL.b1)
#define FT3DTEN		(_B_FT3MODL.b6)
#define FT3OST		(_B_FT3MODL.b7)

#define FT3STPO		(_B_FT3MODH.b0)

#define FT3CK0		(_B_FT3CLKL.b0)
#define FT3CK1		(_B_FT3CLKL.b1)
#define FT3CKD0		(_B_FT3CLKL.b4)
#define FT3CKD1		(_B_FT3CLKL.b5)
#define FT3CKD2		(_B_FT3CLKL.b6)

#define FT3XCK0		(_B_FT3CLKH.b0)
#define FT3XCK1		(_B_FT3CLKH.b1)
#define FT3XCK2		(_B_FT3CLKH.b2)

#define FT3ST0		(_B_FT3TRG0L.b0)
#define FT3ST1		(_B_FT3TRG0L.b1)
#define FT3EXCL		(_B_FT3TRG0L.b2)
#define FT3CST		(_B_FT3TRG0L.b3)

#define FT3STS0		(_B_FT3TRG0H.b0)
#define FT3STS1		(_B_FT3TRG0H.b1)
#define FT3STS2		(_B_FT3TRG0H.b2)
#define FT3STS3		(_B_FT3TRG0H.b3)
#define FT3STSS		(_B_FT3TRG0H.b7)

#define FT3TRM0		(_B_FT3TRG1L.b0)
#define FT3TRM1		(_B_FT3TRG1L.b1)
#define FT3EST0		(_B_FT3TRG1L.b4)
#define FT3EST1		(_B_FT3TRG1L.b5)

#define FT3IEP		(_B_FT3INTEL.b0)
#define FT3IEA		(_B_FT3INTEL.b1)
#define FT3IEB		(_B_FT3INTEL.b2)
#define FT3IETS		(_B_FT3INTEL.b3)
#define FT3IETR		(_B_FT3INTEL.b4)

#define FT3IOP		(_B_FT3INTEH.b0)
#define FT3IOA		(_B_FT3INTEH.b1)
#define FT3IOB		(_B_FT3INTEH.b2)

#define FT3ISP		(_B_FT3INTSL.b0)
#define FT3ISA		(_B_FT3INTSL.b1)
#define FT3ISB		(_B_FT3INTSL.b2)
#define FT3ISTS		(_B_FT3INTSL.b3)
#define FT3ISTR		(_B_FT3INTSL.b4)
#define FT3ISES		(_B_FT3INTSL.b5)

#define FT3ICP		(_B_FT3INTCL.b0)
#define FT3ICA		(_B_FT3INTCL.b1)
#define FT3ICB		(_B_FT3INTCL.b2)
#define FT3ICTS		(_B_FT3INTCL.b3)
#define FT3ICTR		(_B_FT3INTCL.b4)
#define FT3ICES		(_B_FT3INTCL.b5)

#define FT3IR		(_B_FT3INTCH.b7)

#define FTO0S0		(_B_FTO0SL.b0)
#define FTO0S1		(_B_FTO0SL.b1)
#define FTO0S2		(_B_FTO0SL.b2)
#define FTO0SN		(_B_FTO0SL.b7)

#define FTO1S0		(_B_FTO1SL.b0)
#define FTO1S1		(_B_FTO1SL.b1)
#define FTO1S2		(_B_FTO1SL.b2)
#define FTO1SN		(_B_FTO1SL.b7)

#define FTO2S0		(_B_FTO2SL.b0)
#define FTO2S1		(_B_FTO2SL.b1)
#define FTO2S2		(_B_FTO2SL.b2)
#define FTO2SN		(_B_FTO2SL.b7)

#define FTO3S0		(_B_FTO3SL.b0)
#define FTO3S1		(_B_FTO3SL.b1)
#define FTO3S2		(_B_FTO3SL.b2)
#define FTO3SN		(_B_FTO3SL.b7)

#define FTO4S0		(_B_FTO4SL.b0)
#define FTO4S1		(_B_FTO4SL.b1)
#define FTO4S2		(_B_FTO4SL.b2)
#define FTO4SN		(_B_FTO4SL.b7)

#define FTO5S0		(_B_FTO5SL.b0)
#define FTO5S1		(_B_FTO5SL.b1)
#define FTO5S2		(_B_FTO5SL.b2)
#define FTO5SN		(_B_FTO5SL.b7)

#define FTO6S0		(_B_FTO6SL.b0)
#define FTO6S1		(_B_FTO6SL.b1)
#define FTO6S2		(_B_FTO6SL.b2)
#define FTO6SN		(_B_FTO6SL.b7)

#define FTO7S0		(_B_FTO7SL.b0)
#define FTO7S1		(_B_FTO7SL.b1)
#define FTO7S2		(_B_FTO7SL.b2)
#define FTO7SN		(_B_FTO7SL.b7)

#define FTO8S0		(_B_FTO8SL.b0)
#define FTO8S1		(_B_FTO8SL.b1)
#define FTO8S2		(_B_FTO8SL.b2)
#define FTO8SN		(_B_FTO8SL.b7)

#define FTO9S0		(_B_FTO9SL.b0)
#define FTO9S1		(_B_FTO9SL.b1)
#define FTO9S2		(_B_FTO9SL.b2)
#define FTO9SN		(_B_FTO9SL.b7)

#define FTOAS0		(_B_FTOASL.b0)
#define FTOAS1		(_B_FTOASL.b1)
#define FTOAS2		(_B_FTOASL.b2)
#define FTOASN		(_B_FTOASL.b7)

#define FTOBS0		(_B_FTOBSL.b0)
#define FTOBS1		(_B_FTOBSL.b1)
#define FTOBS2		(_B_FTOBSL.b2)
#define FTOBSN		(_B_FTOBSL.b7)

#define FTOCS0		(_B_FTOCSL.b0)
#define FTOCS1		(_B_FTOCSL.b1)
#define FTOCS2		(_B_FTOCSL.b2)
#define FTOCSN		(_B_FTOCSL.b7)

#define FTODS0		(_B_FTODSL.b0)
#define FTODS1		(_B_FTODSL.b1)
#define FTODS2		(_B_FTODSL.b2)
#define FTODSN		(_B_FTODSL.b7)

#define FTOES0		(_B_FTOESL.b0)
#define FTOES1		(_B_FTOESL.b1)
#define FTOES2		(_B_FTOESL.b2)
#define FTOESN		(_B_FTOESL.b7)

#define FTOFS0		(_B_FTOFSL.b0)
#define FTOFS1		(_B_FTOFSL.b1)
#define FTOFS2		(_B_FTOFSL.b2)
#define FTOFSN		(_B_FTOFSL.b7)

#define S0B0		(_B_SIO0BUFL.b0)
#define S0B1		(_B_SIO0BUFL.b1)
#define S0B2		(_B_SIO0BUFL.b2)
#define S0B3		(_B_SIO0BUFL.b3)
#define S0B4		(_B_SIO0BUFL.b4)
#define S0B5		(_B_SIO0BUFL.b5)
#define S0B6		(_B_SIO0BUFL.b6)
#define S0B7		(_B_SIO0BUFL.b7)

#define S0B8		(_B_SIO0BUFH.b0)
#define S0B9		(_B_SIO0BUFH.b1)
#define S0B10		(_B_SIO0BUFH.b2)
#define S0B11		(_B_SIO0BUFH.b3)
#define S0B12		(_B_SIO0BUFH.b4)
#define S0B13		(_B_SIO0BUFH.b5)
#define S0B14		(_B_SIO0BUFH.b6)
#define S0B15		(_B_SIO0BUFH.b7)

#define S0EN		(_B_SIO0CON.b0)

#define S0DIR		(_B_SIO0MOD0.b0)
#define S0MD0		(_B_SIO0MOD0.b1)
#define S0MD1		(_B_SIO0MOD0.b2)
#define S0LG		(_B_SIO0MOD0.b3)

#define S0CK0		(_B_SIO0MOD1.b0)
#define S0CK1		(_B_SIO0MOD1.b1)
#define S0CK2		(_B_SIO0MOD1.b2)
#define S0CKT		(_B_SIO0MOD1.b4)
#define S0NEG		(_B_SIO0MOD1.b5)

#define U0B0		(_B_UA0BUF.b0)
#define U0B1		(_B_UA0BUF.b1)
#define U0B2		(_B_UA0BUF.b2)
#define U0B3		(_B_UA0BUF.b3)
#define U0B4		(_B_UA0BUF.b4)
#define U0B5		(_B_UA0BUF.b5)
#define U0B6		(_B_UA0BUF.b6)
#define U0B7		(_B_UA0BUF.b7)

#define U0EN		(_B_UA0CON.b0)

#define U0CK0		(_B_UA0MOD0.b1)
#define U0CK1		(_B_UA0MOD0.b2)
#define U0RSS		(_B_UA0MOD0.b6)

#define U0LG0		(_B_UA0MOD1.b0)
#define U0LG1		(_B_UA0MOD1.b1)
#define U0PT0		(_B_UA0MOD1.b2)
#define U0PT1		(_B_UA0MOD1.b3)
#define U0STP		(_B_UA0MOD1.b4)
#define U0NEG		(_B_UA0MOD1.b5)
#define U0DIR		(_B_UA0MOD1.b6)

#define U0BR0		(_B_UA0BRTL.b0)
#define U0BR1		(_B_UA0BRTL.b1)
#define U0BR2		(_B_UA0BRTL.b2)
#define U0BR3		(_B_UA0BRTL.b3)
#define U0BR4		(_B_UA0BRTL.b4)
#define U0BR5		(_B_UA0BRTL.b5)
#define U0BR6		(_B_UA0BRTL.b6)
#define U0BR7		(_B_UA0BRTL.b7)

#define U0BR8		(_B_UA0BRTH.b0)
#define U0BR9		(_B_UA0BRTH.b1)
#define U0BR10		(_B_UA0BRTH.b2)
#define U0BR11		(_B_UA0BRTH.b3)

#define U0FER		(_B_UA0STAT.b0)
#define U0OER		(_B_UA0STAT.b1)
#define U0PER		(_B_UA0STAT.b2)

#define U1B0		(_B_UA1BUF.b0)
#define U1B1		(_B_UA1BUF.b1)
#define U1B2		(_B_UA1BUF.b2)
#define U1B3		(_B_UA1BUF.b3)
#define U1B4		(_B_UA1BUF.b4)
#define U1B5		(_B_UA1BUF.b5)
#define U1B6		(_B_UA1BUF.b6)
#define U1B7		(_B_UA1BUF.b7)

#define U1EN		(_B_UA1CON.b0)

#define U1FUL		(_B_UA1STAT.b3)

#define I2F0SA1		(_B_I2F0SADL.b1)
#define I2F0SA2		(_B_I2F0SADL.b2)
#define I2F0SA3		(_B_I2F0SADL.b3)
#define I2F0SA4		(_B_I2F0SADL.b4)
#define I2F0SA5		(_B_I2F0SADL.b5)
#define I2F0SA6		(_B_I2F0SADL.b6)
#define I2F0SA7		(_B_I2F0SADL.b7)

#define I2F0SA8		(_B_I2F0SADH.b0)
#define I2F0SA9		(_B_I2F0SADH.b1)
#define I2F0SA10		(_B_I2F0SADH.b2)

#define I2F0MD0		(_B_I2F0CTLL.b0)
#define I2F0MD1		(_B_I2F0CTLL.b1)
#define I2F0RSTA		(_B_I2F0CTLL.b2)
#define I2F0TXAK		(_B_I2F0CTLL.b3)
#define I2F0MTX		(_B_I2F0CTLL.b4)
#define I2F0MSTA		(_B_I2F0CTLL.b5)
#define I2F0ASIE		(_B_I2F0CTLL.b6)
#define I2F0MEN		(_B_I2F0CTLL.b7)

#define I2F0CFIE		(_B_I2F0CTLH.b1)
#define I2F0STPI		(_B_I2F0CTLH.b3)
#define I2F0DLEN		(_B_I2F0CTLH.b4)
#define I2F0CS		(_B_I2F0CTLH.b5)

#define I2F0RXAK		(_B_I2F0SRL.b0)
#define I2F0MIF		(_B_I2F0SRL.b1)
#define I2F0SRW		(_B_I2F0SRL.b2)
#define I2F0DRLD		(_B_I2F0SRL.b3)
#define I2F0MBB		(_B_I2F0SRL.b5)
#define I2F0MAAS		(_B_I2F0SRL.b6)
#define I2F0MCF		(_B_I2F0SRL.b7)

#define I2F0STP		(_B_I2F0SRH.b1)

#define I2F0DA0		(_B_I2F0DRL.b0)
#define I2F0DA1		(_B_I2F0DRL.b1)
#define I2F0DA2		(_B_I2F0DRL.b2)
#define I2F0DA3		(_B_I2F0DRL.b3)
#define I2F0DA4		(_B_I2F0DRL.b4)
#define I2F0DA5		(_B_I2F0DRL.b5)
#define I2F0DA6		(_B_I2F0DRL.b6)
#define I2F0DA7		(_B_I2F0DRL.b7)

#define I2F0SCL		(_B_I2F0MONL.b0)
#define I2F0SDA		(_B_I2F0MONL.b1)

#define I2F0BC0		(_B_I2F0BCL.b0)
#define I2F0BC1		(_B_I2F0BCL.b1)
#define I2F0BC2		(_B_I2F0BCL.b2)
#define I2F0BC3		(_B_I2F0BCL.b3)
#define I2F0BC4		(_B_I2F0BCL.b4)
#define I2F0BC5		(_B_I2F0BCL.b5)
#define I2F0BC6		(_B_I2F0BCL.b6)

#define I2F0BMEN		(_B_I2F0MODL.b0)

#define I2F0BA0		(_B_I2F0BSVL.b0)
#define I2F0BA1		(_B_I2F0BSVL.b1)
#define I2F0BA2		(_B_I2F0BSVL.b2)
#define I2F0BA3		(_B_I2F0BSVL.b3)
#define I2F0BA4		(_B_I2F0BSVL.b4)
#define I2F0BA5		(_B_I2F0BSVL.b5)
#define I2F0BA6		(_B_I2F0BSVL.b6)
#define I2F0BA7		(_B_I2F0BSVL.b7)

#define I2F0BA8		(_B_I2F0BSVH.b0)
#define I2F0BA9		(_B_I2F0BSVH.b1)
#define I2F0BA10		(_B_I2F0BSVH.b2)
#define I2F0BA11		(_B_I2F0BSVH.b3)
#define I2F0BA12		(_B_I2F0BSVH.b4)
#define I2F0BA13		(_B_I2F0BSVH.b5)
#define I2F0BA14		(_B_I2F0BSVH.b6)
#define I2F0BA15		(_B_I2F0BSVH.b7)

#define I2F0BS00		(_B_I2F0BSBL.b0)
#define I2F0BS01		(_B_I2F0BSBL.b1)
#define I2F0BS02		(_B_I2F0BSBL.b2)
#define I2F0BS03		(_B_I2F0BSBL.b3)
#define I2F0BS04		(_B_I2F0BSBL.b4)
#define I2F0BS05		(_B_I2F0BSBL.b5)
#define I2F0BS06		(_B_I2F0BSBL.b6)
#define I2F0BS07		(_B_I2F0BSBL.b7)

#define I2F0BS10		(_B_I2F0BSBH.b0)
#define I2F0BS11		(_B_I2F0BSBH.b1)
#define I2F0BS12		(_B_I2F0BSBH.b2)
#define I2F0BS13		(_B_I2F0BSBH.b3)
#define I2F0BS14		(_B_I2F0BSBH.b4)
#define I2F0BS15		(_B_I2F0BSBH.b5)
#define I2F0BS16		(_B_I2F0BSBH.b6)
#define I2F0BS17		(_B_I2F0BSBH.b7)

#define I2F0BSL0		(_B_I2F0BFRL.b0)
#define I2F0BSL1		(_B_I2F0BFRL.b1)
#define I2F0BMRW		(_B_I2F0BFRL.b3)

#define I2F0BDL0		(_B_I2F0BFRH.b0)
#define I2F0BDL1		(_B_I2F0BFRH.b1)
#define I2F0BDL2		(_B_I2F0BFRH.b2)
#define I2F0BDL3		(_B_I2F0BFRH.b3)
#define I2F0BDL4		(_B_I2F0BFRH.b4)

#define I2F0BMST		(_B_I2F0BCTL.b0)

#define I2F0BFIE		(_B_I2F0BMKL.b0)
#define I2F0BNIE		(_B_I2F0BMKL.b2)
#define I2F0BTIE		(_B_I2F0BMKL.b3)
#define I2F0BSIE		(_B_I2F0BMKL.b4)
#define I2F0BAIE		(_B_I2F0BMKL.b5)
#define I2F0BDIE		(_B_I2F0BMKL.b6)

#define I2F0BMFI		(_B_I2F0BSRL.b0)
#define I2F0BMNA		(_B_I2F0BSRL.b2)
#define I2F0BMTO		(_B_I2F0BSRL.b3)
#define I2F0BMIS		(_B_I2F0BSRL.b4)
#define I2F0BMAG		(_B_I2F0BSRL.b5)
#define I2F0BMDZ		(_B_I2F0BSRL.b6)

#define I2F0BML0		(_B_I2F0BLVL.b0)
#define I2F0BML1		(_B_I2F0BLVL.b1)
#define I2F0BML2		(_B_I2F0BLVL.b2)
#define I2F0BML3		(_B_I2F0BLVL.b3)
#define I2F0BML4		(_B_I2F0BLVL.b4)

#define I2F0T0		(_B_I2F0TMRL.b0)
#define I2F0T1		(_B_I2F0TMRL.b1)
#define I2F0T2		(_B_I2F0TMRL.b2)
#define I2F0T3		(_B_I2F0TMRL.b3)
#define I2F0T4		(_B_I2F0TMRL.b4)
#define I2F0T5		(_B_I2F0TMRL.b5)
#define I2F0T6		(_B_I2F0TMRL.b6)
#define I2F0T7		(_B_I2F0TMRL.b7)

#define I2F0T8		(_B_I2F0TMRH.b0)
#define I2F0T9		(_B_I2F0TMRH.b1)
#define I2F0T10		(_B_I2F0TMRH.b2)
#define I2F0T11		(_B_I2F0TMRH.b3)
#define I2F0T12		(_B_I2F0TMRH.b4)
#define I2F0T13		(_B_I2F0TMRH.b5)
#define I2F0T14		(_B_I2F0TMRH.b6)
#define I2F0T15		(_B_I2F0TMRH.b7)

#define I2F0NFON		(_B_I2F0NFL.b0)

#define I2F0INTU		(_B_I2F0IUL.b0)

#define I21R0		(_B_I2C1RD.b0)
#define I21R1		(_B_I2C1RD.b1)
#define I21R2		(_B_I2C1RD.b2)
#define I21R3		(_B_I2C1RD.b3)
#define I21R4		(_B_I2C1RD.b4)
#define I21R5		(_B_I2C1RD.b5)
#define I21R6		(_B_I2C1RD.b6)
#define I21R7		(_B_I2C1RD.b7)

#define I21RW		(_B_I2C1SA.b0)
#define I21A0		(_B_I2C1SA.b1)
#define I21A1		(_B_I2C1SA.b2)
#define I21A2		(_B_I2C1SA.b3)
#define I21A3		(_B_I2C1SA.b4)
#define I21A4		(_B_I2C1SA.b5)
#define I21A5		(_B_I2C1SA.b6)
#define I21A6		(_B_I2C1SA.b7)

#define I21T0		(_B_I2C1TD.b0)
#define I21T1		(_B_I2C1TD.b1)
#define I21T2		(_B_I2C1TD.b2)
#define I21T3		(_B_I2C1TD.b3)
#define I21T4		(_B_I2C1TD.b4)
#define I21T5		(_B_I2C1TD.b5)
#define I21T6		(_B_I2C1TD.b6)
#define I21T7		(_B_I2C1TD.b7)

#define I21ST		(_B_I2C1CON0.b0)
#define I21SP		(_B_I2C1CON0.b1)
#define I21RS		(_B_I2C1CON0.b2)
#define I21ACT		(_B_I2C1CON0.b7)

#define I21EN		(_B_I2C1MODL.b0)
#define I21MD		(_B_I2C1MODL.b1)
#define I21DW0		(_B_I2C1MODL.b2)
#define I21DW1		(_B_I2C1MODL.b3)

#define I21CD0		(_B_I2C1MODH.b0)
#define I21CD1		(_B_I2C1MODH.b1)

#define I21ACR		(_B_I2C1STAL.b1)
#define I21ER		(_B_I2C1STAL.b2)

#define SF0SPE		(_B_SF0CTRLL.b0)
#define SF0MST		(_B_SF0CTRLL.b1)
#define SF0SIZ		(_B_SF0CTRLL.b2)
#define SF0MDFE		(_B_SF0CTRLL.b3)
#define SF0LSB		(_B_SF0CTRLL.b4)
#define SF0CPHA		(_B_SF0CTRLL.b5)
#define SF0CPOL		(_B_SF0CTRLL.b6)

#define SF0FICL		(_B_SF0CTRLH.b0)
#define SF0SSZ		(_B_SF0CTRLH.b1)
#define SF0SOZ		(_B_SF0CTRLH.b2)
#define SF0MOZ		(_B_SF0CTRLH.b3)

#define SF0TFIE		(_B_SF0INTCL.b0)
#define SF0RFIE		(_B_SF0INTCL.b1)
#define SF0FIE		(_B_SF0INTCL.b2)
#define SF0ORIE		(_B_SF0INTCL.b3)
#define SF0MFIE		(_B_SF0INTCL.b4)

#define SF0TFIC0		(_B_SF0INTCH.b0)
#define SF0TFIC1		(_B_SF0INTCH.b1)
#define SF0TFIC2		(_B_SF0INTCH.b2)
#define SF0TFIC3		(_B_SF0INTCH.b3)
#define SF0RFIC0		(_B_SF0INTCH.b4)
#define SF0RFIC1		(_B_SF0INTCH.b5)
#define SF0RFIC2		(_B_SF0INTCH.b6)
#define SF0RFIC3		(_B_SF0INTCH.b7)

#define SF0DTL0		(_B_SF0TRACL.b0)
#define SF0DTL1		(_B_SF0TRACL.b1)
#define SF0DTL2		(_B_SF0TRACL.b2)
#define SF0DTL3		(_B_SF0TRACL.b3)
#define SF0DTL4		(_B_SF0TRACL.b4)
#define SF0DTL5		(_B_SF0TRACL.b5)
#define SF0DTL6		(_B_SF0TRACL.b6)
#define SF0DTL7		(_B_SF0TRACL.b7)

#define SF0DTL8		(_B_SF0TRACH.b0)

#define SF0BR0		(_B_SF0BRRL.b0)
#define SF0BR1		(_B_SF0BRRL.b1)
#define SF0BR2		(_B_SF0BRRL.b2)
#define SF0BR3		(_B_SF0BRRL.b3)
#define SF0BR4		(_B_SF0BRRL.b4)
#define SF0BR5		(_B_SF0BRRL.b5)
#define SF0BR6		(_B_SF0BRRL.b6)
#define SF0BR7		(_B_SF0BRRL.b7)

#define SF0BR8		(_B_SF0BRRH.b0)
#define SF0BR9		(_B_SF0BRRH.b1)
#define SF0LEAD0		(_B_SF0BRRH.b4)
#define SF0LEAD1		(_B_SF0BRRH.b5)
#define SF0LAG0		(_B_SF0BRRH.b6)
#define SF0LAG1		(_B_SF0BRRH.b7)

#define SF0TFI		(_B_SF0SRRL.b0)
#define SF0RFI		(_B_SF0SRRL.b1)
#define SF0FI		(_B_SF0SRRL.b2)
#define SF0ORF		(_B_SF0SRRL.b3)
#define SF0MDF		(_B_SF0SRRL.b4)
#define SF0SPIF		(_B_SF0SRRL.b5)

#define SF0WOF		(_B_SF0SRRH.b0)
#define SF0TFF		(_B_SF0SRRH.b1)
#define SF0TFE		(_B_SF0SRRH.b2)
#define SF0RFF		(_B_SF0SRRH.b3)
#define SF0RFE		(_B_SF0SRRH.b4)

#define SF0TFC		(_B_SF0SRCL.b0)
#define SF0RFC		(_B_SF0SRCL.b1)
#define SF0FC		(_B_SF0SRCL.b2)
#define SF0ORFC		(_B_SF0SRCL.b3)
#define SF0MDFC		(_B_SF0SRCL.b4)
#define SF0SPIFC		(_B_SF0SRCL.b5)

#define SF0WOFC		(_B_SF0SRCH.b0)
#define SF0IRQ		(_B_SF0SRCH.b7)

#define SF0TFD0		(_B_SF0FSRL.b0)
#define SF0TFD1		(_B_SF0FSRL.b1)
#define SF0TFD2		(_B_SF0FSRL.b2)
#define SF0TFD3		(_B_SF0FSRL.b3)
#define SF0TFD4		(_B_SF0FSRL.b4)

#define SF0RFD0		(_B_SF0FSRH.b0)
#define SF0RFD1		(_B_SF0FSRH.b1)
#define SF0RFD2		(_B_SF0FSRH.b2)
#define SF0RFD3		(_B_SF0FSRH.b3)
#define SF0RFD4		(_B_SF0FSRH.b4)

#define SF0WD0		(_B_SF0DWRL.b0)
#define SF0WD1		(_B_SF0DWRL.b1)
#define SF0WD2		(_B_SF0DWRL.b2)
#define SF0WD3		(_B_SF0DWRL.b3)
#define SF0WD4		(_B_SF0DWRL.b4)
#define SF0WD5		(_B_SF0DWRL.b5)
#define SF0WD6		(_B_SF0DWRL.b6)
#define SF0WD7		(_B_SF0DWRL.b7)

#define SF0WD8		(_B_SF0DWRH.b0)
#define SF0WD9		(_B_SF0DWRH.b1)
#define SF0WD10		(_B_SF0DWRH.b2)
#define SF0WD11		(_B_SF0DWRH.b3)
#define SF0WD12		(_B_SF0DWRH.b4)
#define SF0WD13		(_B_SF0DWRH.b5)
#define SF0WD14		(_B_SF0DWRH.b6)
#define SF0WD15		(_B_SF0DWRH.b7)

#define SF0RD0		(_B_SF0DRRL.b0)
#define SF0RD1		(_B_SF0DRRL.b1)
#define SF0RD2		(_B_SF0DRRL.b2)
#define SF0RD3		(_B_SF0DRRL.b3)
#define SF0RD4		(_B_SF0DRRL.b4)
#define SF0RD5		(_B_SF0DRRL.b5)
#define SF0RD6		(_B_SF0DRRL.b6)
#define SF0RD7		(_B_SF0DRRL.b7)

#define SF0RD8		(_B_SF0DRRH.b0)
#define SF0RD9		(_B_SF0DRRH.b1)
#define SF0RD10		(_B_SF0DRRH.b2)
#define SF0RD11		(_B_SF0DRRH.b3)
#define SF0RD12		(_B_SF0DRRH.b4)
#define SF0RD13		(_B_SF0DRRH.b5)
#define SF0RD14		(_B_SF0DRRH.b6)
#define SF0RD15		(_B_SF0DRRH.b7)

#define UF1B0		(_B_UAF1BUFL.b0)
#define UF1B1		(_B_UAF1BUFL.b1)
#define UF1B2		(_B_UAF1BUFL.b2)
#define UF1B3		(_B_UAF1BUFL.b3)
#define UF1B4		(_B_UAF1BUFL.b4)
#define UF1B5		(_B_UAF1BUFL.b5)
#define UF1B6		(_B_UAF1BUFL.b6)
#define UF1B7		(_B_UAF1BUFL.b7)

#define UF1B8		(_B_UAF1BUFH.b0)
#define UF1B9		(_B_UAF1BUFH.b1)
#define UF1B10		(_B_UAF1BUFH.b2)
#define UF1B11		(_B_UAF1BUFH.b3)
#define UF1B12		(_B_UAF1BUFH.b4)
#define UF1B13		(_B_UAF1BUFH.b5)
#define UF1B14		(_B_UAF1BUFH.b6)
#define UF1B15		(_B_UAF1BUFH.b7)

#define UF1ERBFI		(_B_UAF1IERL.b0)
#define UF1ETBEI		(_B_UAF1IERL.b1)
#define UF1ELSI		(_B_UAF1IERL.b2)
#define UF1TEMTI		(_B_UAF1IERL.b6)

#define UF1IRP		(_B_UAF1IIRL.b0)
#define UF1IRID0		(_B_UAF1IIRL.b1)
#define UF1IRID1		(_B_UAF1IIRL.b2)
#define UF1IRID2		(_B_UAF1IIRL.b3)
#define UF1FMD0		(_B_UAF1IIRL.b6)
#define UF1FMD1		(_B_UAF1IIRL.b7)

#define UF1LG0		(_B_UAF1MODL.b0)
#define UF1LG1		(_B_UAF1MODL.b1)
#define UF1STP		(_B_UAF1MODL.b2)
#define UF1PT0		(_B_UAF1MODL.b3)
#define UF1PT1		(_B_UAF1MODL.b4)
#define UF1PT2		(_B_UAF1MODL.b5)
#define UF1BC		(_B_UAF1MODL.b6)
#define UF1DLAB		(_B_UAF1MODL.b7)

#define UF1FEN		(_B_UAF1MODH.b0)
#define UF1RFR		(_B_UAF1MODH.b1)
#define UF1TFR		(_B_UAF1MODH.b2)
#define UF1FTL0		(_B_UAF1MODH.b4)
#define UF1FTL1		(_B_UAF1MODH.b5)
#define UF1FTL2		(_B_UAF1MODH.b6)
#define UF1FTL3		(_B_UAF1MODH.b7)

#define UF1DR		(_B_UAF1LSRL.b0)
#define UF1OER		(_B_UAF1LSRL.b1)
#define UF1PER		(_B_UAF1LSRL.b2)
#define UF1FER		(_B_UAF1LSRL.b3)
#define UF1BI		(_B_UAF1LSRL.b4)
#define UF1THRE		(_B_UAF1LSRL.b5)
#define UF1TEMT		(_B_UAF1LSRL.b6)
#define UF1RFE		(_B_UAF1LSRL.b7)

#define UF1TIDL		(_B_UAF1LSRH.b0)

#define UF1CAJ0		(_B_UAF1CAJL.b0)
#define UF1CAJ1		(_B_UAF1CAJL.b1)
#define UF1CAJ2		(_B_UAF1CAJL.b2)
#define UF1CAJ3		(_B_UAF1CAJL.b3)
#define UF1CAJ4		(_B_UAF1CAJL.b4)
#define UF1RMV		(_B_UAF1CAJL.b6)

#define UF1IRQ		(_B_UAF1IRQL.b0)

#define UF0B0		(_B_UAF0BUFL.b0)
#define UF0B1		(_B_UAF0BUFL.b1)
#define UF0B2		(_B_UAF0BUFL.b2)
#define UF0B3		(_B_UAF0BUFL.b3)
#define UF0B4		(_B_UAF0BUFL.b4)
#define UF0B5		(_B_UAF0BUFL.b5)
#define UF0B6		(_B_UAF0BUFL.b6)
#define UF0B7		(_B_UAF0BUFL.b7)

#define UF0B8		(_B_UAF0BUFH.b0)
#define UF0B9		(_B_UAF0BUFH.b1)
#define UF0B10		(_B_UAF0BUFH.b2)
#define UF0B11		(_B_UAF0BUFH.b3)
#define UF0B12		(_B_UAF0BUFH.b4)
#define UF0B13		(_B_UAF0BUFH.b5)
#define UF0B14		(_B_UAF0BUFH.b6)
#define UF0B15		(_B_UAF0BUFH.b7)

#define UF0ERBFI		(_B_UAF0IERL.b0)
#define UF0ETBEI		(_B_UAF0IERL.b1)
#define UF0ELSI		(_B_UAF0IERL.b2)
#define UF0TEMTI		(_B_UAF0IERL.b6)

#define UF0IRP		(_B_UAF0IIRL.b0)
#define UF0IRID0		(_B_UAF0IIRL.b1)
#define UF0IRID1		(_B_UAF0IIRL.b2)
#define UF0IRID2		(_B_UAF0IIRL.b3)
#define UF0FMD0		(_B_UAF0IIRL.b6)
#define UF0FMD1		(_B_UAF0IIRL.b7)

#define UF0LG0		(_B_UAF0MODL.b0)
#define UF0LG1		(_B_UAF0MODL.b1)
#define UF0STP		(_B_UAF0MODL.b2)
#define UF0PT0		(_B_UAF0MODL.b3)
#define UF0PT1		(_B_UAF0MODL.b4)
#define UF0PT2		(_B_UAF0MODL.b5)
#define UF0BC		(_B_UAF0MODL.b6)
#define UF0DLAB		(_B_UAF0MODL.b7)

#define UF0FEN		(_B_UAF0MODH.b0)
#define UF0RFR		(_B_UAF0MODH.b1)
#define UF0TFR		(_B_UAF0MODH.b2)
#define UF0FTL0		(_B_UAF0MODH.b4)
#define UF0FTL1		(_B_UAF0MODH.b5)
#define UF0FTL2		(_B_UAF0MODH.b6)
#define UF0FTL3		(_B_UAF0MODH.b7)

#define UF0DR		(_B_UAF0LSRL.b0)
#define UF0OER		(_B_UAF0LSRL.b1)
#define UF0PER		(_B_UAF0LSRL.b2)
#define UF0FER		(_B_UAF0LSRL.b3)
#define UF0BI		(_B_UAF0LSRL.b4)
#define UF0THRE		(_B_UAF0LSRL.b5)
#define UF0TEMT		(_B_UAF0LSRL.b6)
#define UF0RFE		(_B_UAF0LSRL.b7)

#define UF0TIDL		(_B_UAF0LSRH.b0)

#define UF0CAJ0		(_B_UAF0CAJL.b0)
#define UF0CAJ1		(_B_UAF0CAJL.b1)
#define UF0CAJ2		(_B_UAF0CAJL.b2)
#define UF0CAJ3		(_B_UAF0CAJL.b3)
#define UF0CAJ4		(_B_UAF0CAJL.b4)
#define UF0RMV		(_B_UAF0CAJL.b6)

#define UF0IRQ		(_B_UAF0IRQL.b0)

#define I2F1SA1		(_B_I2F1SADL.b1)
#define I2F1SA2		(_B_I2F1SADL.b2)
#define I2F1SA3		(_B_I2F1SADL.b3)
#define I2F1SA4		(_B_I2F1SADL.b4)
#define I2F1SA5		(_B_I2F1SADL.b5)
#define I2F1SA6		(_B_I2F1SADL.b6)
#define I2F1SA7		(_B_I2F1SADL.b7)

#define I2F1SA8		(_B_I2F1SADH.b0)
#define I2F1SA9		(_B_I2F1SADH.b1)
#define I2F1SA10		(_B_I2F1SADH.b2)

#define I2F1MD0		(_B_I2F1CTLL.b0)
#define I2F1MD1		(_B_I2F1CTLL.b1)
#define I2F1RSTA		(_B_I2F1CTLL.b2)
#define I2F1TXAK		(_B_I2F1CTLL.b3)
#define I2F1MTX		(_B_I2F1CTLL.b4)
#define I2F1MSTA		(_B_I2F1CTLL.b5)
#define I2F1ASIE		(_B_I2F1CTLL.b6)
#define I2F1MEN		(_B_I2F1CTLL.b7)

#define I2F1CFIE		(_B_I2F1CTLH.b1)
#define I2F1STPI		(_B_I2F1CTLH.b3)
#define I2F1DLEN		(_B_I2F1CTLH.b4)
#define I2F1CS		(_B_I2F1CTLH.b5)

#define I2F1RXAK		(_B_I2F1SRL.b0)
#define I2F1MIF		(_B_I2F1SRL.b1)
#define I2F1SRW		(_B_I2F1SRL.b2)
#define I2F1DRLD		(_B_I2F1SRL.b3)
#define I2F1MBB		(_B_I2F1SRL.b5)
#define I2F1MAAS		(_B_I2F1SRL.b6)
#define I2F1MCF		(_B_I2F1SRL.b7)

#define I2F1STP		(_B_I2F1SRH.b1)

#define I2F1DA0		(_B_I2F1DRL.b0)
#define I2F1DA1		(_B_I2F1DRL.b1)
#define I2F1DA2		(_B_I2F1DRL.b2)
#define I2F1DA3		(_B_I2F1DRL.b3)
#define I2F1DA4		(_B_I2F1DRL.b4)
#define I2F1DA5		(_B_I2F1DRL.b5)
#define I2F1DA6		(_B_I2F1DRL.b6)
#define I2F1DA7		(_B_I2F1DRL.b7)

#define I2F1SCL		(_B_I2F1MONL.b0)
#define I2F1SDA		(_B_I2F1MONL.b1)

#define I2F1BC0		(_B_I2F1BCL.b0)
#define I2F1BC1		(_B_I2F1BCL.b1)
#define I2F1BC2		(_B_I2F1BCL.b2)
#define I2F1BC3		(_B_I2F1BCL.b3)
#define I2F1BC4		(_B_I2F1BCL.b4)
#define I2F1BC5		(_B_I2F1BCL.b5)
#define I2F1BC6		(_B_I2F1BCL.b6)

#define I2F1BMEN		(_B_I2F1MODL.b0)

#define I2F1BA0		(_B_I2F1BSVL.b0)
#define I2F1BA1		(_B_I2F1BSVL.b1)
#define I2F1BA2		(_B_I2F1BSVL.b2)
#define I2F1BA3		(_B_I2F1BSVL.b3)
#define I2F1BA4		(_B_I2F1BSVL.b4)
#define I2F1BA5		(_B_I2F1BSVL.b5)
#define I2F1BA6		(_B_I2F1BSVL.b6)
#define I2F1BA7		(_B_I2F1BSVL.b7)

#define I2F1BA8		(_B_I2F1BSVH.b0)
#define I2F1BA9		(_B_I2F1BSVH.b1)
#define I2F1BA10		(_B_I2F1BSVH.b2)
#define I2F1BA11		(_B_I2F1BSVH.b3)
#define I2F1BA12		(_B_I2F1BSVH.b4)
#define I2F1BA13		(_B_I2F1BSVH.b5)
#define I2F1BA14		(_B_I2F1BSVH.b6)
#define I2F1BA15		(_B_I2F1BSVH.b7)

#define I2F1BS00		(_B_I2F1BSBL.b0)
#define I2F1BS01		(_B_I2F1BSBL.b1)
#define I2F1BS02		(_B_I2F1BSBL.b2)
#define I2F1BS03		(_B_I2F1BSBL.b3)
#define I2F1BS04		(_B_I2F1BSBL.b4)
#define I2F1BS05		(_B_I2F1BSBL.b5)
#define I2F1BS06		(_B_I2F1BSBL.b6)
#define I2F1BS07		(_B_I2F1BSBL.b7)

#define I2F1BS10		(_B_I2F1BSBH.b0)
#define I2F1BS11		(_B_I2F1BSBH.b1)
#define I2F1BS12		(_B_I2F1BSBH.b2)
#define I2F1BS13		(_B_I2F1BSBH.b3)
#define I2F1BS14		(_B_I2F1BSBH.b4)
#define I2F1BS15		(_B_I2F1BSBH.b5)
#define I2F1BS16		(_B_I2F1BSBH.b6)
#define I2F1BS17		(_B_I2F1BSBH.b7)

#define I2F1BSL0		(_B_I2F1BFRL.b0)
#define I2F1BSL1		(_B_I2F1BFRL.b1)
#define I2F1BMRW		(_B_I2F1BFRL.b3)

#define I2F1BDL0		(_B_I2F1BFRH.b0)
#define I2F1BDL1		(_B_I2F1BFRH.b1)
#define I2F1BDL2		(_B_I2F1BFRH.b2)
#define I2F1BDL3		(_B_I2F1BFRH.b3)
#define I2F1BDL4		(_B_I2F1BFRH.b4)

#define I2F1BMST		(_B_I2F1BCTL.b0)

#define I2F1BFIE		(_B_I2F1BMKL.b0)
#define I2F1BNIE		(_B_I2F1BMKL.b2)
#define I2F1BTIE		(_B_I2F1BMKL.b3)
#define I2F1BSIE		(_B_I2F1BMKL.b4)
#define I2F1BAIE		(_B_I2F1BMKL.b5)
#define I2F1BDIE		(_B_I2F1BMKL.b6)

#define I2F1BMFI		(_B_I2F1BSRL.b0)
#define I2F1BMNA		(_B_I2F1BSRL.b2)
#define I2F1BMTO		(_B_I2F1BSRL.b3)
#define I2F1BMIS		(_B_I2F1BSRL.b4)
#define I2F1BMAG		(_B_I2F1BSRL.b5)
#define I2F1BMDZ		(_B_I2F1BSRL.b6)

#define I2F1BML0		(_B_I2F1BLVL.b0)
#define I2F1BML1		(_B_I2F1BLVL.b1)
#define I2F1BML2		(_B_I2F1BLVL.b2)
#define I2F1BML3		(_B_I2F1BLVL.b3)
#define I2F1BML4		(_B_I2F1BLVL.b4)

#define I2F1T0		(_B_I2F1TMRL.b0)
#define I2F1T1		(_B_I2F1TMRL.b1)
#define I2F1T2		(_B_I2F1TMRL.b2)
#define I2F1T3		(_B_I2F1TMRL.b3)
#define I2F1T4		(_B_I2F1TMRL.b4)
#define I2F1T5		(_B_I2F1TMRL.b5)
#define I2F1T6		(_B_I2F1TMRL.b6)
#define I2F1T7		(_B_I2F1TMRL.b7)

#define I2F1T8		(_B_I2F1TMRH.b0)
#define I2F1T9		(_B_I2F1TMRH.b1)
#define I2F1T10		(_B_I2F1TMRH.b2)
#define I2F1T11		(_B_I2F1TMRH.b3)
#define I2F1T12		(_B_I2F1TMRH.b4)
#define I2F1T13		(_B_I2F1TMRH.b5)
#define I2F1T14		(_B_I2F1TMRH.b6)
#define I2F1T15		(_B_I2F1TMRH.b7)

#define I2F1NFON		(_B_I2F1NFL.b0)

#define I2F1INTU		(_B_I2F1IUL.b0)

#define RAA0		(_B_RADCA0L.b0)
#define RAA1		(_B_RADCA0L.b1)
#define RAA2		(_B_RADCA0L.b2)
#define RAA3		(_B_RADCA0L.b3)
#define RAA4		(_B_RADCA0L.b4)
#define RAA5		(_B_RADCA0L.b5)
#define RAA6		(_B_RADCA0L.b6)
#define RAA7		(_B_RADCA0L.b7)

#define RAA8		(_B_RADCA0H.b0)
#define RAA9		(_B_RADCA0H.b1)
#define RAA10		(_B_RADCA0H.b2)
#define RAA11		(_B_RADCA0H.b3)
#define RAA12		(_B_RADCA0H.b4)
#define RAA13		(_B_RADCA0H.b5)
#define RAA14		(_B_RADCA0H.b6)
#define RAA15		(_B_RADCA0H.b7)

#define RAA16		(_B_RADCA1L.b0)
#define RAA17		(_B_RADCA1L.b1)
#define RAA18		(_B_RADCA1L.b2)
#define RAA19		(_B_RADCA1L.b3)
#define RAA20		(_B_RADCA1L.b4)
#define RAA21		(_B_RADCA1L.b5)
#define RAA22		(_B_RADCA1L.b6)
#define RAA23		(_B_RADCA1L.b7)

#define RAB0		(_B_RADCB0L.b0)
#define RAB1		(_B_RADCB0L.b1)
#define RAB2		(_B_RADCB0L.b2)
#define RAB3		(_B_RADCB0L.b3)
#define RAB4		(_B_RADCB0L.b4)
#define RAB5		(_B_RADCB0L.b5)
#define RAB6		(_B_RADCB0L.b6)
#define RAB7		(_B_RADCB0L.b7)

#define RAB8		(_B_RADCB0H.b0)
#define RAB9		(_B_RADCB0H.b1)
#define RAB10		(_B_RADCB0H.b2)
#define RAB11		(_B_RADCB0H.b3)
#define RAB12		(_B_RADCB0H.b4)
#define RAB13		(_B_RADCB0H.b5)
#define RAB14		(_B_RADCB0H.b6)
#define RAB15		(_B_RADCB0H.b7)

#define RAB16		(_B_RADCB1L.b0)
#define RAB17		(_B_RADCB1L.b1)
#define RAB18		(_B_RADCB1L.b2)
#define RAB19		(_B_RADCB1L.b3)
#define RAB20		(_B_RADCB1L.b4)
#define RAB21		(_B_RADCB1L.b5)
#define RAB22		(_B_RADCB1L.b6)
#define RAB23		(_B_RADCB1L.b7)

#define OM0		(_B_RADMODL.b0)
#define OM1		(_B_RADMODL.b1)
#define OM2		(_B_RADMODL.b2)
#define OM3		(_B_RADMODL.b3)
#define RADI		(_B_RADMODL.b4)
#define RACK0		(_B_RADMODL.b5)
#define RACK1		(_B_RADMODL.b6)
#define RACK2		(_B_RADMODL.b7)

#define RARUN		(_B_RADCONL.b0)

#define SAR00		(_B_SADR0L.b0)
#define SAR01		(_B_SADR0L.b1)
#define SAR02		(_B_SADR0L.b2)
#define SAR03		(_B_SADR0L.b3)
#define SAR04		(_B_SADR0L.b4)
#define SAR05		(_B_SADR0L.b5)
#define SAR06		(_B_SADR0L.b6)
#define SAR07		(_B_SADR0L.b7)

#define SAR08		(_B_SADR0H.b0)
#define SAR09		(_B_SADR0H.b1)
#define SAR0A		(_B_SADR0H.b2)
#define SAR0B		(_B_SADR0H.b3)

#define SAR10		(_B_SADR1L.b0)
#define SAR11		(_B_SADR1L.b1)
#define SAR12		(_B_SADR1L.b2)
#define SAR13		(_B_SADR1L.b3)
#define SAR14		(_B_SADR1L.b4)
#define SAR15		(_B_SADR1L.b5)
#define SAR16		(_B_SADR1L.b6)
#define SAR17		(_B_SADR1L.b7)

#define SAR18		(_B_SADR1H.b0)
#define SAR19		(_B_SADR1H.b1)
#define SAR1A		(_B_SADR1H.b2)
#define SAR1B		(_B_SADR1H.b3)

#define SAR20		(_B_SADR2L.b0)
#define SAR21		(_B_SADR2L.b1)
#define SAR22		(_B_SADR2L.b2)
#define SAR23		(_B_SADR2L.b3)
#define SAR24		(_B_SADR2L.b4)
#define SAR25		(_B_SADR2L.b5)
#define SAR26		(_B_SADR2L.b6)
#define SAR27		(_B_SADR2L.b7)

#define SAR28		(_B_SADR2H.b0)
#define SAR29		(_B_SADR2H.b1)
#define SAR2A		(_B_SADR2H.b2)
#define SAR2B		(_B_SADR2H.b3)

#define SAR30		(_B_SADR3L.b0)
#define SAR31		(_B_SADR3L.b1)
#define SAR32		(_B_SADR3L.b2)
#define SAR33		(_B_SADR3L.b3)
#define SAR34		(_B_SADR3L.b4)
#define SAR35		(_B_SADR3L.b5)
#define SAR36		(_B_SADR3L.b6)
#define SAR37		(_B_SADR3L.b7)

#define SAR38		(_B_SADR3H.b0)
#define SAR39		(_B_SADR3H.b1)
#define SAR3A		(_B_SADR3H.b2)
#define SAR3B		(_B_SADR3H.b3)

#define SAR40		(_B_SADR4L.b0)
#define SAR41		(_B_SADR4L.b1)
#define SAR42		(_B_SADR4L.b2)
#define SAR43		(_B_SADR4L.b3)
#define SAR44		(_B_SADR4L.b4)
#define SAR45		(_B_SADR4L.b5)
#define SAR46		(_B_SADR4L.b6)
#define SAR47		(_B_SADR4L.b7)

#define SAR48		(_B_SADR4H.b0)
#define SAR49		(_B_SADR4H.b1)
#define SAR4A		(_B_SADR4H.b2)
#define SAR4B		(_B_SADR4H.b3)

#define SAR50		(_B_SADR5L.b0)
#define SAR51		(_B_SADR5L.b1)
#define SAR52		(_B_SADR5L.b2)
#define SAR53		(_B_SADR5L.b3)
#define SAR54		(_B_SADR5L.b4)
#define SAR55		(_B_SADR5L.b5)
#define SAR56		(_B_SADR5L.b6)
#define SAR57		(_B_SADR5L.b7)

#define SAR58		(_B_SADR5H.b0)
#define SAR59		(_B_SADR5H.b1)
#define SAR5A		(_B_SADR5H.b2)
#define SAR5B		(_B_SADR5H.b3)

#define SAR60		(_B_SADR6L.b0)
#define SAR61		(_B_SADR6L.b1)
#define SAR62		(_B_SADR6L.b2)
#define SAR63		(_B_SADR6L.b3)
#define SAR64		(_B_SADR6L.b4)
#define SAR65		(_B_SADR6L.b5)
#define SAR66		(_B_SADR6L.b6)
#define SAR67		(_B_SADR6L.b7)

#define SAR68		(_B_SADR6H.b0)
#define SAR69		(_B_SADR6H.b1)
#define SAR6A		(_B_SADR6H.b2)
#define SAR6B		(_B_SADR6H.b3)

#define SAR70		(_B_SADR7L.b0)
#define SAR71		(_B_SADR7L.b1)
#define SAR72		(_B_SADR7L.b2)
#define SAR73		(_B_SADR7L.b3)
#define SAR74		(_B_SADR7L.b4)
#define SAR75		(_B_SADR7L.b5)
#define SAR76		(_B_SADR7L.b6)
#define SAR77		(_B_SADR7L.b7)

#define SAR78		(_B_SADR7H.b0)
#define SAR79		(_B_SADR7H.b1)
#define SAR7A		(_B_SADR7H.b2)
#define SAR7B		(_B_SADR7H.b3)

#define SAR80		(_B_SADR8L.b0)
#define SAR81		(_B_SADR8L.b1)
#define SAR82		(_B_SADR8L.b2)
#define SAR83		(_B_SADR8L.b3)
#define SAR84		(_B_SADR8L.b4)
#define SAR85		(_B_SADR8L.b5)
#define SAR86		(_B_SADR8L.b6)
#define SAR87		(_B_SADR8L.b7)

#define SAR88		(_B_SADR8H.b0)
#define SAR89		(_B_SADR8H.b1)
#define SAR8A		(_B_SADR8H.b2)
#define SAR8B		(_B_SADR8H.b3)

#define SAR90		(_B_SADR9L.b0)
#define SAR91		(_B_SADR9L.b1)
#define SAR92		(_B_SADR9L.b2)
#define SAR93		(_B_SADR9L.b3)
#define SAR94		(_B_SADR9L.b4)
#define SAR95		(_B_SADR9L.b5)
#define SAR96		(_B_SADR9L.b6)
#define SAR97		(_B_SADR9L.b7)

#define SAR98		(_B_SADR9H.b0)
#define SAR99		(_B_SADR9H.b1)
#define SAR9A		(_B_SADR9H.b2)
#define SAR9B		(_B_SADR9H.b3)

#define SARA0		(_B_SADRAL.b0)
#define SARA1		(_B_SADRAL.b1)
#define SARA2		(_B_SADRAL.b2)
#define SARA3		(_B_SADRAL.b3)
#define SARA4		(_B_SADRAL.b4)
#define SARA5		(_B_SADRAL.b5)
#define SARA6		(_B_SADRAL.b6)
#define SARA7		(_B_SADRAL.b7)

#define SARA8		(_B_SADRAH.b0)
#define SARA9		(_B_SADRAH.b1)
#define SARAA		(_B_SADRAH.b2)
#define SARAB		(_B_SADRAH.b3)

#define SARB0		(_B_SADRBL.b0)
#define SARB1		(_B_SADRBL.b1)
#define SARB2		(_B_SADRBL.b2)
#define SARB3		(_B_SADRBL.b3)
#define SARB4		(_B_SADRBL.b4)
#define SARB5		(_B_SADRBL.b5)
#define SARB6		(_B_SADRBL.b6)
#define SARB7		(_B_SADRBL.b7)

#define SARB8		(_B_SADRBH.b0)
#define SARB9		(_B_SADRBH.b1)
#define SARBA		(_B_SADRBH.b2)
#define SARBB		(_B_SADRBH.b3)

#define SALP		(_B_SADCON0.b0)
#define SACK		(_B_SADCON0.b1)
#define SATCM		(_B_SADCON0.b2)
#define SACD0		(_B_SADCON0.b4)
#define SACD1		(_B_SADCON0.b5)

#define SARUN		(_B_SADCON1.b0)

#define SACH0		(_B_SADENL.b0)
#define SACH1		(_B_SADENL.b1)
#define SACH2		(_B_SADENL.b2)
#define SACH3		(_B_SADENL.b3)
#define SACH4		(_B_SADENL.b4)
#define SACH5		(_B_SADENL.b5)
#define SACH6		(_B_SADENL.b6)
#define SACH7		(_B_SADENL.b7)

#define SACH8		(_B_SADENH.b0)
#define SACH9		(_B_SADENH.b1)
#define SACHA		(_B_SADENH.b2)
#define SACHB		(_B_SADENH.b3)

#define SATCH0		(_B_SADTCHL.b0)
#define SATCH1		(_B_SADTCHL.b1)
#define SATCH2		(_B_SADTCHL.b2)
#define SATCH3		(_B_SADTCHL.b3)
#define SATCH4		(_B_SADTCHL.b4)
#define SATCH5		(_B_SADTCHL.b5)
#define SATCH6		(_B_SADTCHL.b6)
#define SATCH7		(_B_SADTCHL.b7)

#define SATCH8		(_B_SADTCHH.b0)
#define SATCH9		(_B_SADTCHH.b1)
#define SATCHA		(_B_SADTCHH.b2)
#define SATCHB		(_B_SADTCHH.b3)

#define SAST0		(_B_SADTRGL.b0)

#define SASTS0		(_B_SADTRGH.b0)
#define SASTS1		(_B_SADTRGH.b1)
#define SASTS2		(_B_SADTRGH.b2)
#define SASTS3		(_B_SADTRGH.b3)
#define SASTS4		(_B_SADTRGH.b4)

#define SADCT0		(_B_SADCVTL.b0)
#define SADCT1		(_B_SADCVTL.b1)
#define SADCT2		(_B_SADCVTL.b2)
#define SADCT3		(_B_SADCVTL.b3)
#define SADCT4		(_B_SADCVTL.b4)
#define SADCT5		(_B_SADCVTL.b5)
#define SADCT6		(_B_SADCVTL.b6)
#define SADCT7		(_B_SADCVTL.b7)

#define SACPT0		(_B_SADCVTH.b0)
#define SACPT1		(_B_SADCVTH.b1)
#define SACPT2		(_B_SADCVTH.b2)
#define SAPCT0		(_B_SADCVTH.b3)
#define SAPCT1		(_B_SADCVTH.b4)
#define SAPCT2		(_B_SADCVTH.b5)
#define SAPCT3		(_B_SADCVTH.b6)
#define SAPCT4		(_B_SADCVTH.b7)

#define M0RUN		(_B_MD0CON.b0)
#define BZMD		(_B_MD0CON.b1)

#define M0TM0		(_B_MD0TMP.b0)
#define M0TM1		(_B_MD0TMP.b1)
#define M0TM2		(_B_MD0TMP.b2)
#define M0TM3		(_B_MD0TMP.b3)

#define M0TN0		(_B_MD0TON.b0)
#define M0TN1		(_B_MD0TON.b1)
#define M0TN2		(_B_MD0TON.b2)
#define M0TN3		(_B_MD0TON.b3)
#define M0TN4		(_B_MD0TON.b4)
#define M0TN5		(_B_MD0TON.b5)
#define M0TN6		(_B_MD0TON.b6)

#define M0LN0		(_B_MD0LEN.b0)
#define M0LN1		(_B_MD0LEN.b1)
#define M0LN2		(_B_MD0LEN.b2)
#define M0LN3		(_B_MD0LEN.b3)
#define M0LN4		(_B_MD0LEN.b4)
#define M0LN5		(_B_MD0LEN.b5)

#define VLSLV0		(_B_VLSCONL.b0)
#define VLSLV1		(_B_VLSCONL.b1)
#define VLSLV2		(_B_VLSCONL.b2)
#define VLSLV3		(_B_VLSCONL.b3)
#define VLSLV4		(_B_VLSCONL.b4)
#define VLSLV5		(_B_VLSCONL.b5)

#define ENVLS		(_B_VLSCONH.b0)
#define VLSF		(_B_VLSCONH.b1)
#define VLSRF		(_B_VLSCONH.b2)
#define VLSPE		(_B_VLSCONH.b7)

#define VLSSEL0		(_B_VLSMODL.b0)
#define VLSSEL1		(_B_VLSMODL.b1)

#define VLSSM0		(_B_VLSMODH.b0)
#define VLSAMD0		(_B_VLSMODH.b1)
#define VLSAMD1		(_B_VLSMODH.b2)

#define CMP0EN		(_B_CMP0CON.b0)
#define CMP0D		(_B_CMP0CON.b1)
#define CMP0RF		(_B_CMP0CON.b2)

#define CMP0E0		(_B_CMP0MODL.b0)
#define CMP0E1		(_B_CMP0MODL.b1)
#define CMP0MD0		(_B_CMP0MODL.b4)
#define CMP0MD1		(_B_CMP0MODL.b5)

#define CMP0SM0		(_B_CMP0MODH.b0)
#define CMP0SM1		(_B_CMP0MODH.b1)
#define CMP0CK		(_B_CMP0MODH.b4)

#define CMP1EN		(_B_CMP1CON.b0)
#define CMP1D		(_B_CMP1CON.b1)
#define CMP1RF		(_B_CMP1CON.b2)

#define CMP1E0		(_B_CMP1MODL.b0)
#define CMP1E1		(_B_CMP1MODL.b1)
#define CMP1MD0		(_B_CMP1MODL.b4)
#define CMP1MD1		(_B_CMP1MODL.b5)

#define CMP1SM0		(_B_CMP1MODH.b0)
#define CMP1SM1		(_B_CMP1MODH.b1)
#define CMP1CK		(_B_CMP1MODH.b4)

#define P00IM0		(_B_P0EXI0.b0)
#define P00IM1		(_B_P0EXI0.b1)
#define P00IM2		(_B_P0EXI0.b2)
#define P00IM3		(_B_P0EXI0.b3)
#define P01IM0		(_B_P0EXI0.b4)
#define P01IM1		(_B_P0EXI0.b5)
#define P01IM2		(_B_P0EXI0.b6)
#define P01IM3		(_B_P0EXI0.b7)

#define P02IM0		(_B_P0EXI1.b0)
#define P02IM1		(_B_P0EXI1.b1)
#define P02IM2		(_B_P0EXI1.b2)
#define P02IM3		(_B_P0EXI1.b3)
#define P03IM0		(_B_P0EXI1.b4)
#define P03IM1		(_B_P0EXI1.b5)
#define P03IM2		(_B_P0EXI1.b6)
#define P03IM3		(_B_P0EXI1.b7)

#define P04IM0		(_B_P0EXI2.b0)
#define P04IM1		(_B_P0EXI2.b1)
#define P04IM2		(_B_P0EXI2.b2)
#define P04IM3		(_B_P0EXI2.b3)
#define P05IM0		(_B_P0EXI2.b4)
#define P05IM1		(_B_P0EXI2.b5)
#define P05IM2		(_B_P0EXI2.b6)
#define P05IM3		(_B_P0EXI2.b7)

#define P00IE		(_B_P0IE.b0)
#define P01IE		(_B_P0IE.b1)
#define P02IE		(_B_P0IE.b2)
#define P03IE		(_B_P0IE.b3)
#define P04IE		(_B_P0IE.b4)
#define P05IE		(_B_P0IE.b5)

#define P00IS		(_B_P0IS.b0)
#define P01IS		(_B_P0IS.b1)
#define P02IS		(_B_P0IS.b2)
#define P03IS		(_B_P0IS.b3)
#define P04IS		(_B_P0IS.b4)
#define P05IS		(_B_P0IS.b5)

#define P00IC		(_B_P0IC.b0)
#define P01IC		(_B_P0IC.b1)
#define P02IC		(_B_P0IC.b2)
#define P03IC		(_B_P0IC.b3)
#define P04IC		(_B_P0IC.b4)
#define P05IC		(_B_P0IC.b5)

#define P0INTU		(_B_P0IU.b0)

#define P20IM0		(_B_P2EXI0.b0)
#define P20IM1		(_B_P2EXI0.b1)
#define P20IM2		(_B_P2EXI0.b2)
#define P20IM3		(_B_P2EXI0.b3)
#define P21IM0		(_B_P2EXI0.b4)
#define P21IM1		(_B_P2EXI0.b5)
#define P21IM2		(_B_P2EXI0.b6)
#define P21IM3		(_B_P2EXI0.b7)

#define P22IM0		(_B_P2EXI1.b0)
#define P22IM1		(_B_P2EXI1.b1)
#define P22IM2		(_B_P2EXI1.b2)
#define P22IM3		(_B_P2EXI1.b3)
#define P23IM0		(_B_P2EXI1.b4)
#define P23IM1		(_B_P2EXI1.b5)
#define P23IM2		(_B_P2EXI1.b6)
#define P23IM3		(_B_P2EXI1.b7)

#define P20IE		(_B_P2IE.b0)
#define P21IE		(_B_P2IE.b1)
#define P22IE		(_B_P2IE.b2)
#define P23IE		(_B_P2IE.b3)

#define P20IS		(_B_P2IS.b0)
#define P21IS		(_B_P2IS.b1)
#define P22IS		(_B_P2IS.b2)
#define P23IS		(_B_P2IS.b3)

#define P20IC		(_B_P2IC.b0)
#define P21IC		(_B_P2IC.b1)
#define P22IC		(_B_P2IC.b2)
#define P23IC		(_B_P2IC.b3)

#define P2INTU		(_B_P2IU.b0)

#define P30IM0		(_B_P3EXI0.b0)
#define P30IM1		(_B_P3EXI0.b1)
#define P30IM2		(_B_P3EXI0.b2)
#define P30IM3		(_B_P3EXI0.b3)
#define P31IM0		(_B_P3EXI0.b4)
#define P31IM1		(_B_P3EXI0.b5)
#define P31IM2		(_B_P3EXI0.b6)
#define P31IM3		(_B_P3EXI0.b7)

#define P32IM0		(_B_P3EXI1.b0)
#define P32IM1		(_B_P3EXI1.b1)
#define P32IM2		(_B_P3EXI1.b2)
#define P32IM3		(_B_P3EXI1.b3)
#define P33IM0		(_B_P3EXI1.b4)
#define P33IM1		(_B_P3EXI1.b5)
#define P33IM2		(_B_P3EXI1.b6)
#define P33IM3		(_B_P3EXI1.b7)

#define P34IM0		(_B_P3EXI2.b0)
#define P34IM1		(_B_P3EXI2.b1)
#define P34IM2		(_B_P3EXI2.b2)
#define P34IM3		(_B_P3EXI2.b3)
#define P35IM0		(_B_P3EXI2.b4)
#define P35IM1		(_B_P3EXI2.b5)
#define P35IM2		(_B_P3EXI2.b6)
#define P35IM3		(_B_P3EXI2.b7)

#define P36IM0		(_B_P3EXI3.b0)
#define P36IM1		(_B_P3EXI3.b1)
#define P36IM2		(_B_P3EXI3.b2)
#define P36IM3		(_B_P3EXI3.b3)
#define P37IM0		(_B_P3EXI3.b4)
#define P37IM1		(_B_P3EXI3.b5)
#define P37IM2		(_B_P3EXI3.b6)
#define P37IM3		(_B_P3EXI3.b7)

#define P30IE		(_B_P3IE.b0)
#define P31IE		(_B_P3IE.b1)
#define P32IE		(_B_P3IE.b2)
#define P33IE		(_B_P3IE.b3)
#define P34IE		(_B_P3IE.b4)
#define P35IE		(_B_P3IE.b5)
#define P36IE		(_B_P3IE.b6)
#define P37IE		(_B_P3IE.b7)

#define P30IS		(_B_P3IS.b0)
#define P31IS		(_B_P3IS.b1)
#define P32IS		(_B_P3IS.b2)
#define P33IS		(_B_P3IS.b3)
#define P34IS		(_B_P3IS.b4)
#define P35IS		(_B_P3IS.b5)
#define P36IS		(_B_P3IS.b6)
#define P37IS		(_B_P3IS.b7)

#define P30IC		(_B_P3IC.b0)
#define P31IC		(_B_P3IC.b1)
#define P32IC		(_B_P3IC.b2)
#define P33IC		(_B_P3IC.b3)
#define P34IC		(_B_P3IC.b4)
#define P35IC		(_B_P3IC.b5)
#define P36IC		(_B_P3IC.b6)
#define P37IC		(_B_P3IC.b7)

#define P3INTU		(_B_P3IU.b0)

#define P40IM0		(_B_P4EXI0.b0)
#define P40IM1		(_B_P4EXI0.b1)
#define P40IM2		(_B_P4EXI0.b2)
#define P40IM3		(_B_P4EXI0.b3)
#define P41IM0		(_B_P4EXI0.b4)
#define P41IM1		(_B_P4EXI0.b5)
#define P41IM2		(_B_P4EXI0.b6)
#define P41IM3		(_B_P4EXI0.b7)

#define P42IM0		(_B_P4EXI1.b0)
#define P42IM1		(_B_P4EXI1.b1)
#define P42IM2		(_B_P4EXI1.b2)
#define P42IM3		(_B_P4EXI1.b3)
#define P43IM0		(_B_P4EXI1.b4)
#define P43IM1		(_B_P4EXI1.b5)
#define P43IM2		(_B_P4EXI1.b6)
#define P43IM3		(_B_P4EXI1.b7)

#define P44IM0		(_B_P4EXI2.b0)
#define P44IM1		(_B_P4EXI2.b1)
#define P44IM2		(_B_P4EXI2.b2)
#define P44IM3		(_B_P4EXI2.b3)
#define P45IM0		(_B_P4EXI2.b4)
#define P45IM1		(_B_P4EXI2.b5)
#define P45IM2		(_B_P4EXI2.b6)
#define P45IM3		(_B_P4EXI2.b7)

#define P46IM0		(_B_P4EXI3.b0)
#define P46IM1		(_B_P4EXI3.b1)
#define P46IM2		(_B_P4EXI3.b2)
#define P46IM3		(_B_P4EXI3.b3)
#define P47IM0		(_B_P4EXI3.b4)
#define P47IM1		(_B_P4EXI3.b5)
#define P47IM2		(_B_P4EXI3.b6)
#define P47IM3		(_B_P4EXI3.b7)

#define P40IE		(_B_P4IE.b0)
#define P41IE		(_B_P4IE.b1)
#define P42IE		(_B_P4IE.b2)
#define P43IE		(_B_P4IE.b3)
#define P44IE		(_B_P4IE.b4)
#define P45IE		(_B_P4IE.b5)
#define P46IE		(_B_P4IE.b6)
#define P47IE		(_B_P4IE.b7)

#define P40IS		(_B_P4IS.b0)
#define P41IS		(_B_P4IS.b1)
#define P42IS		(_B_P4IS.b2)
#define P43IS		(_B_P4IS.b3)
#define P44IS		(_B_P4IS.b4)
#define P45IS		(_B_P4IS.b5)
#define P46IS		(_B_P4IS.b6)
#define P47IS		(_B_P4IS.b7)

#define P40IC		(_B_P4IC.b0)
#define P41IC		(_B_P4IC.b1)
#define P42IC		(_B_P4IC.b2)
#define P43IC		(_B_P4IC.b3)
#define P44IC		(_B_P4IC.b4)
#define P45IC		(_B_P4IC.b5)
#define P46IC		(_B_P4IC.b6)
#define P47IC		(_B_P4IC.b7)

#define P4INTU		(_B_P4IU.b0)

#define P50IM0		(_B_P5EXI0.b0)
#define P50IM1		(_B_P5EXI0.b1)
#define P50IM2		(_B_P5EXI0.b2)
#define P50IM3		(_B_P5EXI0.b3)
#define P51IM0		(_B_P5EXI0.b4)
#define P51IM1		(_B_P5EXI0.b5)
#define P51IM2		(_B_P5EXI0.b6)
#define P51IM3		(_B_P5EXI0.b7)

#define P52IM0		(_B_P5EXI1.b0)
#define P52IM1		(_B_P5EXI1.b1)
#define P52IM2		(_B_P5EXI1.b2)
#define P52IM3		(_B_P5EXI1.b3)
#define P53IM0		(_B_P5EXI1.b4)
#define P53IM1		(_B_P5EXI1.b5)
#define P53IM2		(_B_P5EXI1.b6)
#define P53IM3		(_B_P5EXI1.b7)

#define P54IM0		(_B_P5EXI2.b0)
#define P54IM1		(_B_P5EXI2.b1)
#define P54IM2		(_B_P5EXI2.b2)
#define P54IM3		(_B_P5EXI2.b3)
#define P55IM0		(_B_P5EXI2.b4)
#define P55IM1		(_B_P5EXI2.b5)
#define P55IM2		(_B_P5EXI2.b6)
#define P55IM3		(_B_P5EXI2.b7)

#define P56IM0		(_B_P5EXI3.b0)
#define P56IM1		(_B_P5EXI3.b1)
#define P56IM2		(_B_P5EXI3.b2)
#define P56IM3		(_B_P5EXI3.b3)
#define P57IM0		(_B_P5EXI3.b4)
#define P57IM1		(_B_P5EXI3.b5)
#define P57IM2		(_B_P5EXI3.b6)
#define P57IM3		(_B_P5EXI3.b7)

#define P50IE		(_B_P5IE.b0)
#define P51IE		(_B_P5IE.b1)
#define P52IE		(_B_P5IE.b2)
#define P53IE		(_B_P5IE.b3)
#define P54IE		(_B_P5IE.b4)
#define P55IE		(_B_P5IE.b5)
#define P56IE		(_B_P5IE.b6)
#define P57IE		(_B_P5IE.b7)

#define P50IS		(_B_P5IS.b0)
#define P51IS		(_B_P5IS.b1)
#define P52IS		(_B_P5IS.b2)
#define P53IS		(_B_P5IS.b3)
#define P54IS		(_B_P5IS.b4)
#define P55IS		(_B_P5IS.b5)
#define P56IS		(_B_P5IS.b6)
#define P57IS		(_B_P5IS.b7)

#define P50IC		(_B_P5IC.b0)
#define P51IC		(_B_P5IC.b1)
#define P52IC		(_B_P5IC.b2)
#define P53IC		(_B_P5IC.b3)
#define P54IC		(_B_P5IC.b4)
#define P55IC		(_B_P5IC.b5)
#define P56IC		(_B_P5IC.b6)
#define P57IC		(_B_P5IC.b7)

#define P5INTU		(_B_P5IU.b0)

#define P70IM0		(_B_P7EXI0.b0)
#define P70IM1		(_B_P7EXI0.b1)
#define P70IM2		(_B_P7EXI0.b2)
#define P70IM3		(_B_P7EXI0.b3)
#define P71IM0		(_B_P7EXI0.b4)
#define P71IM1		(_B_P7EXI0.b5)
#define P71IM2		(_B_P7EXI0.b6)
#define P71IM3		(_B_P7EXI0.b7)

#define P72IM0		(_B_P7EXI1.b0)
#define P72IM1		(_B_P7EXI1.b1)
#define P72IM2		(_B_P7EXI1.b2)
#define P72IM3		(_B_P7EXI1.b3)
#define P73IM0		(_B_P7EXI1.b4)
#define P73IM1		(_B_P7EXI1.b5)
#define P73IM2		(_B_P7EXI1.b6)
#define P73IM3		(_B_P7EXI1.b7)

#define P74IM0		(_B_P7EXI2.b0)
#define P74IM1		(_B_P7EXI2.b1)
#define P74IM2		(_B_P7EXI2.b2)
#define P74IM3		(_B_P7EXI2.b3)
#define P75IM0		(_B_P7EXI2.b4)
#define P75IM1		(_B_P7EXI2.b5)
#define P75IM2		(_B_P7EXI2.b6)
#define P75IM3		(_B_P7EXI2.b7)

#define P76IM0		(_B_P7EXI3.b0)
#define P76IM1		(_B_P7EXI3.b1)
#define P76IM2		(_B_P7EXI3.b2)
#define P76IM3		(_B_P7EXI3.b3)
#define P77IM0		(_B_P7EXI3.b4)
#define P77IM1		(_B_P7EXI3.b5)
#define P77IM2		(_B_P7EXI3.b6)
#define P77IM3		(_B_P7EXI3.b7)

#define P70IE		(_B_P7IE.b0)
#define P71IE		(_B_P7IE.b1)
#define P72IE		(_B_P7IE.b2)
#define P73IE		(_B_P7IE.b3)
#define P74IE		(_B_P7IE.b4)
#define P75IE		(_B_P7IE.b5)
#define P76IE		(_B_P7IE.b6)
#define P77IE		(_B_P7IE.b7)

#define P70IS		(_B_P7IS.b0)
#define P71IS		(_B_P7IS.b1)
#define P72IS		(_B_P7IS.b2)
#define P73IS		(_B_P7IS.b3)
#define P74IS		(_B_P7IS.b4)
#define P75IS		(_B_P7IS.b5)
#define P76IS		(_B_P7IS.b6)
#define P77IS		(_B_P7IS.b7)

#define P70IC		(_B_P7IC.b0)
#define P71IC		(_B_P7IC.b1)
#define P72IC		(_B_P7IC.b2)
#define P73IC		(_B_P7IC.b3)
#define P74IC		(_B_P7IC.b4)
#define P75IC		(_B_P7IC.b5)
#define P76IC		(_B_P7IC.b6)
#define P77IC		(_B_P7IC.b7)

#define P7INTU		(_B_P7IU.b0)

#define P80IM0		(_B_P8EXI0.b0)
#define P80IM1		(_B_P8EXI0.b1)
#define P80IM2		(_B_P8EXI0.b2)
#define P80IM3		(_B_P8EXI0.b3)
#define P81IM0		(_B_P8EXI0.b4)
#define P81IM1		(_B_P8EXI0.b5)
#define P81IM2		(_B_P8EXI0.b6)
#define P81IM3		(_B_P8EXI0.b7)

#define P82IM0		(_B_P8EXI1.b0)
#define P82IM1		(_B_P8EXI1.b1)
#define P82IM2		(_B_P8EXI1.b2)
#define P82IM3		(_B_P8EXI1.b3)
#define P83IM0		(_B_P8EXI1.b4)
#define P83IM1		(_B_P8EXI1.b5)
#define P83IM2		(_B_P8EXI1.b6)
#define P83IM3		(_B_P8EXI1.b7)

#define P84IM0		(_B_P8EXI2.b0)
#define P84IM1		(_B_P8EXI2.b1)
#define P84IM2		(_B_P8EXI2.b2)
#define P84IM3		(_B_P8EXI2.b3)
#define P85IM0		(_B_P8EXI2.b4)
#define P85IM1		(_B_P8EXI2.b5)
#define P85IM2		(_B_P8EXI2.b6)
#define P85IM3		(_B_P8EXI2.b7)

#define P86IM0		(_B_P8EXI3.b0)
#define P86IM1		(_B_P8EXI3.b1)
#define P86IM2		(_B_P8EXI3.b2)
#define P86IM3		(_B_P8EXI3.b3)
#define P87IM0		(_B_P8EXI3.b4)
#define P87IM1		(_B_P8EXI3.b5)
#define P87IM2		(_B_P8EXI3.b6)
#define P87IM3		(_B_P8EXI3.b7)

#define P80IE		(_B_P8IE.b0)
#define P81IE		(_B_P8IE.b1)
#define P82IE		(_B_P8IE.b2)
#define P83IE		(_B_P8IE.b3)
#define P84IE		(_B_P8IE.b4)
#define P85IE		(_B_P8IE.b5)
#define P86IE		(_B_P8IE.b6)
#define P87IE		(_B_P8IE.b7)

#define P80IS		(_B_P8IS.b0)
#define P81IS		(_B_P8IS.b1)
#define P82IS		(_B_P8IS.b2)
#define P83IS		(_B_P8IS.b3)
#define P84IS		(_B_P8IS.b4)
#define P85IS		(_B_P8IS.b5)
#define P86IS		(_B_P8IS.b6)
#define P87IS		(_B_P8IS.b7)

#define P80IC		(_B_P8IC.b0)
#define P81IC		(_B_P8IC.b1)
#define P82IC		(_B_P8IC.b2)
#define P83IC		(_B_P8IC.b3)
#define P84IC		(_B_P8IC.b4)
#define P85IC		(_B_P8IC.b5)
#define P86IC		(_B_P8IC.b6)
#define P87IC		(_B_P8IC.b7)

#define P8INTU		(_B_P8IU.b0)

#define CMSK0		(_B_COMMSK0L.b0)
#define CMSK1		(_B_COMMSK0L.b1)
#define CMSK2		(_B_COMMSK0L.b2)
#define CMSK3		(_B_COMMSK0L.b3)
#define CMSK4		(_B_COMMSK0L.b4)
#define CMSK5		(_B_COMMSK0L.b5)
#define CMSK6		(_B_COMMSK0L.b6)
#define CMSK7		(_B_COMMSK0L.b7)

#define CMSK8		(_B_COMMSK0H.b0)
#define CMSK9		(_B_COMMSK0H.b1)
#define CMSK10		(_B_COMMSK0H.b2)
#define CMSK11		(_B_COMMSK0H.b3)
#define CMSK12		(_B_COMMSK0H.b4)
#define CMSK13		(_B_COMMSK0H.b5)
#define CMSK14		(_B_COMMSK0H.b6)
#define CMSK15		(_B_COMMSK0H.b7)

#define CMSK16		(_B_COMMSK1L.b0)
#define CMSK17		(_B_COMMSK1L.b1)
#define CMSK18		(_B_COMMSK1L.b2)
#define CMSK19		(_B_COMMSK1L.b3)
#define CMSK20		(_B_COMMSK1L.b4)
#define CMSK21		(_B_COMMSK1L.b5)
#define CMSK22		(_B_COMMSK1L.b6)
#define CMSK23		(_B_COMMSK1L.b7)

#define CMSK24		(_B_COMMSK1H.b0)
#define CMSK25		(_B_COMMSK1H.b1)
#define CMSK26		(_B_COMMSK1H.b2)
#define CMSK27		(_B_COMMSK1H.b3)
#define CMSK28		(_B_COMMSK1H.b4)
#define CMSK29		(_B_COMMSK1H.b5)
#define CMSK30		(_B_COMMSK1H.b6)
#define CMSK31		(_B_COMMSK1H.b7)
/*---------------------------------------------------
	END OF BIT ADDRESS SYMBOLS
---------------------------------------------------*/

#endif
