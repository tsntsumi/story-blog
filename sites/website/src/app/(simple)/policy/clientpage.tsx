"use client"
import React from "react"
import Link from "next/link"
import type { Metadata } from "next"

export default function ClientPage() {
  return (
    <section className="notice m-4">
      <h1>個人情報保護方針</h1>
      <h2>プライバシーポリシー</h2>
      <div className="ml-6">
        <p>
          弊社では以下のようにプライバシーポリシーを掲げ、
          お客さまの個人情報の保護につとめています。
        </p>
        <p>
          弊社のサービスもしくは商品を購入した場合、
          または弊社の物品の無料進呈等キャンペーンに応募した場合には、
          プライバシーポリシーに同意したものとみなされます。
        </p>
        <p>本プライバシーポリシーを熟読してご理解ください。</p>
      </div>
      <h3> 個人情報とは</h3>
      <div className="ml-6">
        <p>
          弊社のプライバシーポリシーでは、
          「個人情報」とは、生存する個人に関する情報であり、
          その氏名、生年月日、電話番号、住所、Eメールアドレスその他の記述、
          画像、音声又は個人別に付与された番号、
          記号その他の符号によりその個人を特定、 識別できるものをいいます。
          また、｢保有個人データ｣とは、個人情報保護法に定める保有個人データをいいます。
        </p>
      </div>
      <h3>個人情報の収集方法</h3>
      <div className="ml-6">
        <p>
          サービスをご利用いただく際に、氏名、Eメールアドレス等の
          個人情報を収集させていただく場合があります。
        </p>
        <p>
          これらの情報は、すべて以下の収集目的に従って、
          適法かつ公正な手段により収集されます。
        </p>
        <p>
          人種、民族、本籍地、宗教、政治的見解及び労働組合への加盟に
          関わる個人情報については、これを収集・利用いたしません。{" "}
        </p>
      </div>
      <h3>個人情報を収集・利用する目的</h3>
      <div className="ml-6">
        <p>弊社は、以下の目的で個人情報を収集または利用いたします。 </p>
        <ol className="ml-6">
          <li>教材の配送、及び、Eメールや郵送等によるニュースレターの送信</li>
          <li>
            弊社、または、セミナーの主催者もしくは共催者、弊社と商品
            もしくはサービスを共同で販売する第三者または弊社と
            共同でキャンペーンを行う第三者その他のビジネス・パートナー
            （以下あわせて「ビジネス・パートナー」といいます）の
            商品の発送に関する情報、商品・サービスに関する情報を提供するため
          </li>
          <li>
            弊社および弊社のビジネス・パートナーのサービスもしくは商品の
            開発・改善を目的とした調査・検討を行うため
          </li>
          <li>
            弊社および弊社のビジネス・パートナーのサービス
            もしくは商品に関する統計的資料を作成するため
          </li>
          <li>弊社および弊社のビジネス・パートナーの求人情報を提供するため </li>
          <li>
            その他弊社の経営方針もしくはマーケティング戦略の策定・改善を目的とした
            調査・検討を行うため
          </li>
          <li>お客さまからの問い合わせに対して、回答や連絡を行うため</li>
          <li>お客さまにとって弊社が有益であると判断した情報を提供するため</li>
        </ol>
      </div>
      <h3>情報の第三者への開示について</h3>
      <div className="ml-6">
        <p>
          弊社は、下記に該当する場合を除き、お客さまの同意なく
          個人情報を第三者に開示することはありません。
        </p>
        <p>弊社は、以下のとおり、個人情報を共同利用することがあります。</p>
        <ol className="ml-6">
          <li>
            共同利用者：各種セミナー、教材開発の主催者および共催者
            および講師・インストラクター
          </li>
          <li>共同利用される個人データの項目</li>
          <ul>
            <li>氏名（窓口担当者を含む）</li>
            <li>住所（郵便番号を含む）</li>
            <li>Eメールアドレス</li>
            <li>性別</li>
            <li>電話番号</li>
            <li>FAX番号</li>
            <li>勤務先名</li>
            <li>肩書き・部署</li>
            <li>職業</li>
            <li>弊社が管理上付与するお客さま番号</li>
          </ul>
        </ol>
        <h4>共同利用の目的</h4>
        <div className="ml-6">
          <ol>
            <li>
              弊社および弊社のビジネス・パートナーの商品の発送に関する
              情報、商品・サービスに関する情報またはキャンペーン情報を提供するため
            </li>
            <li>
              弊社および弊社のビジネス・パートナーのサービスもしくは商品の
              開発・改善を目的とした調査・検討を行うため
            </li>
            <li>
              弊社および弊社のビジネス・パートナーのサービスもしくは
              商品に関する統計的資料を作成するため
            </li>
            <li>
              弊社および弊社のビジネス・パートナーの求人情報を提供するため
            </li>
            <li>
              その他弊社の経営方針もしくはマーケティング戦略・営業戦略の
              策定・改善を目的とした調査・検討を行うため
            </li>
            <li>
              お客さまにとって弊社またはビジネス･パートナーが有益であると
              判断した情報を提供するため
            </li>
            <li>共同利用する個人情報の管理責任者：Alizza Ideal 堤紀久夫</li>
          </ol>
        </div>
        <h4>
          弊社は、以下の場合には個人情報を第三者に開示することがあります。
        </h4>
        <div className="ml-6">
          <ol>
            <li>法令により情報の開示が求められる場合</li>
            <li>
              人の生命、身体または財産の保護のために必要があると弊社が判断した場合
            </li>
            <li>
              国の機関もしくは地方公共団体またはその委託を受けたものが
              法令の定める事務を遂行することに対して協力すること、
              また、その他公共の利益のために特に必要があると弊社が判断した場合
            </li>
            <li>
              お客さままたは弊社の権利の確保のために必要であると弊社が判断した場合
            </li>
            <li>業務遂行に必要な限度で個人情報の取扱いを委託する場合</li>
          </ol>
        </div>
      </div>
      <h3>保有個人データの開示等</h3>
      <div className="ml-6">
        <p>
          お客さまは、弊社所定の手続により、以下の請求を行うことができます。
        </p>
        <ol>
          <li>
            弊社の保有する自己の保有個人データが誤った情報でないことを確認すること
            （保有個人データの開示）
          </li>
          <li>
            弊社の保有する自己の保有個人データの利用目的の通知（保有個人データの利用目的の通知）
          </li>
          <li>
            弊社の保有する自己の保有個人データが誤った情報である場合に、
            それを追加、訂正、削除すること（保有個人データの追加、訂正、削除）
          </li>
        </ol>
        <p>
          弊社は、前項 3.
          の保有個人データの訂正または削除の可否を決定した場合には、
          遅滞なく、当該お客さまに通知します。
        </p>
        <p>
          これらの請求を行いたい場合には、下記の通り対応させていただきます。
        </p>
        <h4>｢開示等の求め｣の申し出先</h4>
        <div className="ml-6 mb-10">
          <p>
            下記宛、所定の申請書に必要書類・手数料を添付の上、レターパック500
            または簡易書留で郵送をお願い申し上げます。
          </p>
          <p>
            なお、封筒に朱書きで「開示等請求書類在中」とお書き添えいただければ幸いです。
          </p>
          <div className="ml-10">
            Prok 7 Hagad Street Central Pblacion Casiguran 4702 Sorsogon,
            Philippines
          </div>
          <div className="ml-14">Alizza Ideal - 個人情報保護事務局</div>
        </div>
        <h4>「開示等の求め」に際して提出すべき書面（様式）等</h4>
        <div className="ml-6">
          <p>
            「開示等の求め」を行う場合は、まず、Eメールにてご連絡ください。
            申請書をお送りいたします。
          </p>
          <p>申請書のご請求は、Ｅメール</p>
          <div className="ml-10 mb-10">
            <Link
              href="mailto:info+inquiry@alizza-ideal.com"
              className="text-sm"
            >
              <span className="link">mailto:info+inquiry@alizza-ideal.com</span>
            </Link>
          </div>
          <p>にて問い合わせください</p>
        </div>
        <h4>代理人による「開示等の求め」</h4>
        <div className="ml-6">
          <p>
            「開示等の求め」をする者が代理人である場合は、下記の書類（A、B又はC）が必要となります。
          </p>
          <dl className="ml-6">
            <dt>A. 親権者、未成年後見人の場合</dt>
            <dd>
              戸籍謄本（親権者の場合は扶養家族が記入された健康保険証のコピーも可）1通
            </dd>
            <dt>B. 補助人、保佐人、成年後見人、任意後見人の場合</dt>
            <dd>後見登記事項証明書1通</dd>
            <dt>C. 委任による代理人の場合</dt>
            <dd>
              <ul>
                <li>委任状1通（実印によるもの）</li>
                <li>ご本人の印鑑証明書1通</li>
              </ul>
            </dd>
          </dl>
        </div>
        <h4>「開示等の求め」の手数料及びその徴収方法</h4>
        <div className="ml-6">
          <p>
            開示・利用目的の通知の求めの場合に限り、1回の申請ごとに、
            以下の金額（弊社からの返信のためのレターパック500、
            または簡易書留郵便費を含む）を申し受けます。
          </p>
        </div>
        <h4>開示等の求めに関する手数料：1,000円</h4>
        <div className="ml-6">
          <p>1,000円分の郵便切手を 申請書類に同封してください。</p>
          <p>
            手数料が不足していた場合、及び手数料が同封されていなかった場合は、
            その旨ご連絡差し上げますが、ご連絡後1ヶ月以内にお支払いがない場合は、
            開示の求めがなかったものとして対応させていただきます。
          </p>
        </div>
        <h4>｢開示等の求め｣に対する回答方法</h4>
        <div className="ml-6">
          <p>申請者の申請書記載住所宛に書面によってご回答申し上げます。</p>
        </div>
        <h4>開示等の求めに関して取得した個人情報の利用目的</h4>
        <div className="ml-6">
          <p>
            開示等の求めにともない取得した個人情報は、
            開示等の求めに必要な範囲でのみ取り扱うものとします。
          </p>
          <p>
            提出いただいた書類は、開示等の求めに対する回答が終了した後、
            ２年間保存し、その後破棄させていただきます。
          </p>
          <p>提出いただいた書類はお返しできません。</p>
        </div>
      </div>
      <h3>保有個人データの不開示事由について</h3>
      <div className="ml-6">
        <p>
          次に定める場合は、不開示とさせていただきます。
          不開示を決定した場合は、その旨、理由を付記して通知申し上げます。
          また、不開示の場合についても手数料の返還は行いませんのでご容赦ください。
        </p>
        <ul>
          <li>
            申請書に記載されている住所・ご本人確認のための書類に記載されている
            住所・弊社の登録住所が一致しないときなどご本人が確認できない場合
          </li>
          <li>代理人による申請に際して、代理権が確認できない場合</li>
          <li>所定の申請書類に不備があった場合</li>
          <li>開示の求めの対象が保有個人データに該当しない場合</li>
          <li>
            ご本人又は第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
          </li>
          <li>弊社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
          <li>他の法令に違反することとなる場合</li>
        </ul>
      </div>

      <h3>個人情報の安全性</h3>
      <div className="ml-6">
        <p>
          弊社では、個人情報の不当なアクセスによる紛失、破壊、改ざん、漏洩などのリスクに対して、
          合理的かつ厳正な安全対策を講じておりますが、
          以下の事由など弊社の責に帰すべからざる事由を原因とする
          個人情報の紛失、破壊、改ざん、漏洩などに関しては、
          弊社では責任を負いかねますので、ご注意ください。
        </p>
        <ol>
          <li>
            誰でもアクセスできる形態でインターネット上に個人情報を開示した場合
          </li>
          <li>弊社以外のウェブサイトにおいて個人情報を開示した場合</li>
          <li>お客さまの利用した端末から個人情報が漏れた場合</li>
          <li>
            お客さまの管理下にあるパスワードの使用を原因として個人情報が漏れた場合
          </li>
          <li>
            各種申込フォームにお客さまが入力したメールアドレスが間違っている場合
            （各種申込フォームでは内容をお客さまに確認していただくために、
            登録されたメールアドレスに申込情報を自動的に配信いたします。
            そのため間違ったメールアドレスであっても、
            そのメールアドレスに申込情報が自動的に配信されます。）
          </li>
          <li>
            各種申し込みフォームに入力された情報は、
            ブラウザ上で申し込み完了の動作まで、
            その情報がフォーム上に表示されることがあります。
          </li>
          <li>
            ブラウザを閉じずにそのまま離席するなどして他人に覗き見される場合。
            （回線上に問題が生じた際に、再度申し込み情報を入力することを
            省略するためにセッション管理という技術を利用しています。
            申込を完了する、または、申し込み途中で申込を中止する時は
            ブラウザを閉じることで回避できます。）
          </li>
        </ol>
      </div>

      <h3>セキュリティについて</h3>
      <div className="ml-6">
        <p>
          個人情報の登録が発生する Web ページではデータ送信の際に、
          業界で機密保持の標準規格として使用されている SSL (Secure Socket Layer)
          暗号化技術を使用しております。
        </p>
      </div>

      <h3>プライバシーポリシーの変更</h3>
      <div className="ml-6">
        <p>
          本プライバシーポリシーの内容は、お客さまに通知をすることなく変更されることがあります。
        </p>
        <p>
          プライバシーポリシー変更後は、弊社が別途定める場合を除いて、
          弊社のウェブサイトに掲載した時から効力を生じるものとします。
        </p>
      </div>

      <h3 className="warning">＊お客さまへのご協力のお願い＊</h3>
      <div className="ml-6">
        <p>弊社より、個人情報を含むメールが配信される場合は以下の通りです。</p>
        <p>
          これらの際には申込時に入力されたメールアドレスに登録内容（個人情報）を
          含むメールが配信されます。メールアドレス入力を間違えた場合でも、
          そのメールアドレスに個人情報が含まれるメールが配信されます。
        </p>
        <p>
          大抵はエラーメールとなると思われますが、間違えたメールアドレスが
          利用されていた場合には、そのメールアドレスに個人情報を含む登録内容が送信され、
          個人情報が漏洩する可能性があります。
        </p>
        <p>
          各種サービス・キャンペーンの購入・応募時の情報入力の際には
          十分ご注意くださいますようお願い申し上げます。
        </p>
        <ul>
          <li>
            メールマガジンを購読された時に登録内容を確認する為に自動配信されるメール
          </li>
          <li>
            プレゼント・キャンペーンに応募された時に登録内容を確認する為に自動配信されるメール
          </li>
          <li>
            申込フォームからの申込をされたときに申込内容を確認する為に自動配信されるメール
          </li>
          <li>教材が配送される場合に配信される発送完了のお知らせメール</li>
        </ul>
        <p> 以上</p>
      </div>
      <h2>Alizza Ideal について</h2>
      <div className="ml-6">
        <dl>
          <dt>所在地</dt>
          <dd className="text-sm mt-[-1em]">
            プロック７・ハガッドストリート・セントラル・ポバラシオン、カシギュラン市、ソルソゴン・プロビンス、４７０２、フィリピン共和国
          </dd>
          <dt>クライアントサポートデスク</dt>
          <dd className="text-sm mt-[-1em]">
            <Link
              href="mailto:info+inquiry@alizza-ideal.com"
              className="text-sm"
            >
              <span className="link text-sm text-primary underline">
                info+inquiry@alizza-ideal.com
              </span>
            </Link>
          </dd>
          <dt>電話番号</dt>
          <dd className="text-sm mt-[-1em]">
            <Link href="tel:07090342231" className="text-primary underline">
              +81 709034-
              <ruby>
                223-1<rp>(</rp>
                <rt>ツツミイチバン</rt>
              </ruby>
            </Link>
            <br />
            ＊お電話でのお問い合わせ、ご質問は承っておりません。
          </dd>
        </dl>
      </div>
    </section>
  )
}
