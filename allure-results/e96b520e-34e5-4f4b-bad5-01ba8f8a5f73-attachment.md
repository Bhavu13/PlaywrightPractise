# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: generalPractice\getByPlaceholderRoleText.spec.js >> Finding Locators using Get By Label
- Location: tests\generalPractice\getByPlaceholderRoleText.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e92]:
      - generic [ref=e93]:
        - heading "Practice Form" [level=1] [ref=e94]
        - heading "Student Registration Form" [level=5] [ref=e95]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e99]: Name
            - textbox "First Name" [ref=e101]
            - textbox "Last Name" [ref=e103]
          - generic [ref=e104]:
            - generic [ref=e106]: Email
            - textbox "name@example.com" [ref=e108]
          - generic [ref=e109]:
            - generic [ref=e110]: Gender
            - generic [ref=e111]:
              - generic [ref=e112]:
                - radio "Male" [ref=e113]
                - generic [ref=e114]: Male
              - generic [ref=e115]:
                - radio "Female" [ref=e116]
                - generic [ref=e117]: Female
              - generic [ref=e118]:
                - radio "Other" [ref=e119]
                - generic [ref=e120]: Other
          - generic [ref=e121]:
            - generic [ref=e123]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=e125]
          - generic [ref=e126]:
            - generic [ref=e128]: Date of Birth
            - textbox [ref=e132]: 21 May 2026
          - generic [ref=e133]:
            - generic [ref=e135]: Subjects
            - generic [ref=e137]:
              - log [ref=e139]
              - combobox [ref=e143]
          - generic [ref=e146]:
            - generic [ref=e148]: Hobbies
            - generic [ref=e149]:
              - generic [ref=e150]:
                - checkbox "Sports" [ref=e151]
                - generic [ref=e152]: Sports
              - generic [ref=e153]:
                - checkbox "Reading" [ref=e154]
                - generic [ref=e155]: Reading
              - generic [ref=e156]:
                - checkbox "Music" [ref=e157]
                - generic [ref=e158]: Music
          - generic [ref=e159]:
            - generic [ref=e161]: Picture
            - button "Choose File" [ref=e163] [cursor=pointer]
          - generic [ref=e164]:
            - generic [ref=e166]: Current Address
            - textbox "Current Address" [ref=e168]
          - generic [ref=e169]:
            - generic [ref=e171]: State and City
            - generic [ref=e173]:
              - log [ref=e175]
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - generic [ref=e178]: Select State
                  - combobox [ref=e180]
                - img [ref=e184]
            - generic [ref=e186]:
              - generic:
                - log
                - generic:
                  - generic:
                    - generic: Select City
                  - generic:
                    - generic:
                      - img
          - button "Submit" [ref=e189] [cursor=pointer]
      - iframe [ref=e193]:
        - generic [ref=f10e2]:
          - link "Advertisement" [ref=f10e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsuhExERwnvKgAAaUyew0QBvsAPz6oX2jdfx-Zra9Ju35ne9dIe3vc5inDBiIjAeQWbutFW69wUYE_muMMxeTyQmn5HWCvxn2KUn-S53IhenL5WW10_MiKXlamTQVjxUbvnpG_lRPAEcsyxL4evWTyFjCp3_ErWYGXz0iwKA63jgaCAXPl7si5NzGZgGH_CJi0OXdRYFH6xNHAmmb-KufUqgSOeXSxYvWjnwOoaIeuWLs4E2imUzfxyQVnYoT3KSQhxt9gdbbYHBMT9dgRgsBQlOc5WIlErzaxaneb6JGn6s2-9U5hovnFQkDLUjuh4W-MmovYbljX9BYVR4c3wIKW2SMv4h7EhQ8mgDJYMI7VZmbqbhJJBkyVKMkARZM_CDGQpptU-Rv63JlvPbv1EBGfXvnD9TfvWn6KRr86DWNea4h0UyqUPwvfHry5NgnTV0VpdxXyUjnJty6qWHrva8zyMXJcCZ83IB40ESbNtfLIDaHHuZeSI-5Qt7z6UslaKjjkc918vVaEfE0Dz0M0SfHA7LkpK5TlnYcKvtgnkQXk7P3MkeSgHuRZyop9tJPlLkZBKkCxN6CEu_6z2q_cPc6d2pzmfeAbZEsrPNgogLrGcQTtwMeLw4DveCIEzvJPDi4pwguiPgFwZ4VMOYvI0JHpWY-OL2GQu8iZmsxoUIUGwZhsky-EEnZEDMjryrGUeih20Ckd1wJy_yFxj2-BfQKp4KXKGk3gDJ89ScdqEDXBB5qId2zIfYwGGbyByJiJl2iGauit71nIZHX3LAaM-qRq_NZvyQg0KKU-hOEkSXObOQDcO04qTm0oXQJ5dn_3IvVQDXXKd6fgyR7fQJ6w6rBRxy_n93mPdmhVq2JlgyKJrDLcS1LBqeqN5ZeTaIR2wVzP0gTYujKjJB2-FyKhpGq-gogP2Vm646V0mzqBFqm-DXnahbE1L5PimGVqJNhVFlT7Run7iaHO2IqdUjy7pfhbTKp2_KD_NDxjN28PwRUhh_gv6HUSkm8nr8hb2sD7oYU3xbJTluc7uXXay3H9JE1FYZmfBkrc-rR4G7LsKEjfEwrzxiLQaIgaTNnGXiFG36ECM_kGIN-I51NBIcKRfYbdDom3T3S8PhcmdHa7t1ZueDjHIOyYYcOrO345WjdBPofm4EGt6KANKeK8Xpg5EBCbFckFOXbxVOvtBFupKJdE_Mu_MzsVEwudA90HtHd0sSS4HsAnv3WVw0leuqhcRlb1MgbXH2EGDyX3-CWvpiwg81n-vJa6G4W3ymbcT2Jtn8vQ3_kg4YCdx2tjwaj0raZsoDJ619g1lip1c4lR8D5ycbK920pIUiA0ug2ZGuz2BBxpp0pYmISEpRi6v7Mj5Firsadue40buEq7ztvn6U_qXNS6GxqsPi_xnTEEtPMRr0GSRDVoobjdaITCcT7uGMThmakx0R6FACilmOp0U9V-mYYwshqCgoCpPdrnc2VZQwyAE5hoVSAizvunWp-fjDIx_-DqebTDIBO3-r0ZFcWSvWAryusDt8QL9hOCNsgkmHdKwOXIfYj7d1cAQr1KVFd3mchGYYdne8RxvdfySRdJzkCou_55YxhKuyrihLyMNeCWYfw44VgOZ9Mte0FKLNQTQKdPEJPchgWu_zzS2fA3c4lTac558_eKtieID8OnI3Z-ftTVeyB5IM0mXzBIUmA17emiQXArgUb_vNMRnDhJXB91W_hRObPB544-nsUCQ4WwUiOCJzZ3yBPhLsZdrIeMW5h6I-OqaC4wCDeIxrjvKKimVG2pw&sai=AMfl-YRcEptPtyGqwX2xm7RWF9F2HV1lCYuJFrJmqh-4TrHbIwpa1cg6SaofAbrR3Tx-BkCThMipvCvf12WKqVLfhK3qmwZUPGIhVUdc_vPGVXqioGP1r2hRpQvijL0_RQs61beUJ_dW6-fUdMwdgnm3nbYjhbc2laze54VIU3BCuXJGxto86Cp7fium4L2u02z4Jl18NbEFIF31F7sTPIoQPvHbBd_JVPGxhTNg5EMdI9dm_qBm9EfnjWIYrdz-np417wTaRqwD9hO2G8Ur7kkZgv8qrTZS-3QPcLtkcq4aFicWzfgXtCiwrluYyTQqlhmotHQdJG69yShNfLIAPKD1u9XrCzkk2oTk2UbCMoU2h9Opr1an7muOkkqfXtJOdw98FE4qA2MkjtCc4iK2S20xFmhjomhUC_37tG-2-QjF9DMR7fFwSvajGcZzNwdGOtTGFPhzAgelvt4GnJzNErM95GXrOjK2qHvHmavvd9ZLADvVJ-fFTkNBMoKcc0E9U8zUE8T5PN8TT9eUztaFLeyPXFd5PrEdqubCT_FDO12jD2u_opL5ANTYaZ-80-WJv4o3L_u71vp7HReMLwSo3seDAIZ7m65G1J-wRjBxXPtZNyhru4vtP-R3tYdouh2c-xb6I4XorcVwyY7xNggYvpVGZlq5nnV-v6_LX6HBJ4kry2XbsGOYnBse4ykXtfqJReMl-LDNV36KGY9wWJhd8qlnbMfW2-1sp7KpE9NDvzTme-TGKgUJrXRkaNk1_qd-p-w-0WuzRAMaDjL--cWhtN6YHt57A3adUt8zBsnPWi0-NcB5yww40SU8zyE219n6XXlsyvF0_T3f9fhecHf6_0tZzR_uphTJVyFqHYT8qH2ikWftfNLC9XDupXxAZ157TCWj_SCcwOv_Rj-wq4vcSiOK_TwF7BdUyR_J&sig=Cg0ArKJSzCk4VNS_UdsT&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9wcmltZXZpZGVvLmNvbQ&urlfix=1&adurl=https://www.primevideo.com/offers/nonprimehomepage/%3Fref_%3Ddvm_pdd_rtbdv360_mt-tn_ln_st_lik%2Bdacoit-tn_na%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23852562676
            - img "Advertisement" [ref=f10e5]
          - generic [ref=f10e6]:
            - generic:
              - img [ref=f10e10] [cursor=pointer]
              - button [ref=f10e12] [cursor=pointer]:
                - img [ref=f10e13]
    - generic [ref=e198]:
      - iframe [ref=e201]:
        - generic [active]:
          - generic [ref=f15e2]:
            - generic [ref=f15e3]:
              - generic:
                - img [ref=f15e7] [cursor=pointer]
                - button [ref=f15e9] [cursor=pointer]:
                  - img [ref=f15e10]
            - iframe [ref=f15e17]:
              - link [ref=f24e2] [cursor=pointer]:
                - /url: https://go.integralads.com/ad-blocking-explainer/?utm_campaign=GLB-g&utm_medium=gdisplay&utm_source=gsites
                - img [ref=f24e3]
          - iframe
      - iframe [ref=e204]:
        - generic [active]:
          - generic [ref=f6e2]:
            - generic [ref=f6e3]:
              - generic:
                - img [ref=f6e7] [cursor=pointer]
                - button [ref=f6e9] [cursor=pointer]:
                  - img [ref=f6e10]
            - iframe [ref=f6e17]:
              - link [ref=f23e2] [cursor=pointer]:
                - /url: https://go.integralads.com/ad-blocking-explainer/?utm_campaign=GLB-g&utm_medium=gdisplay&utm_source=gsites
                - img [ref=f23e3]
          - iframe
  - contentinfo [ref=e205]:
    - generic [ref=e206]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Finding Locators using Get By Label', async ({ page }) => {
  4  | const url = "https://demoqa.com/automation-practice-form";
  5  |     await page.goto(url);
> 6  |     await page.waitForLoadState('networkidle');
     |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  7  | 
  8  |     //cheking for text box using placeholder
  9  |     await page.getByPlaceholder("First Name").fill("Bhavani");
  10 | 
  11 |     //getBy Role
  12 |     await page.getByRole("button" , {name : 'Submit'}).click();
  13 | 
  14 | })
```