# LaravelMix6 template for LP

index.html がサイドバーにフォームあり（[参考](https://novasell.com/)）、fullwidth.html が通常の LP

## command

```
yarn install
```

初回に package.json に記述されているモジュールをインストール。
package.json を変更したときも.

```
yarn start
```

開発時の基本コマンド。 Laravel Mix、Browsersync、が同時に立ち上がる。

```
yarn dev
```

開発向けのビルドされたファイルが、public ディレクトリに出力される。

```
yarn build
```

本番用のビルドされたファイルが、dist ディレクトリに出力される。

## 開発環境構築手順

1.  ローカルにファイルを設置 i) ii)いずれかの方法で行う

    i) このリポジトリの github ページの緑のボタン[Use this template]から任意のプロジェクトのリポジトリを作成し、clone。

    ii) DOWNLOAD ZIP から、このリポジトリのファイルをダウンロード
    ZIP ファイルを解凍し、解凍されたフォルダを英数字で任意のプロジェクトの名前に設定する。例）new_project

2.  初回のみ`yarn install`でパッケージをインストール

3.  `yarn start`でローカルサーバーが立ち上がる

4.  ローカルサーバーを止めたいときは Ctrl + C

## 仕様説明

LaravelMix 6
[https://laravel-mix.com/docs/6.0/installation](https://laravel-mix.com/docs/6.0/installation)

yarn start 時に、src ファイルにあるテーマファイルが、public フォルダにコンパイル・コピーされます。 編集は src ファイルで行なってください。

src 直下に独自のフォルダを作成した場合、webpack.mix.js を編集してコピー対象にして上げる必要があります。
以下の img を対象フォルダ名にして追記してあげてください。

```webpack.mix.js22行目〜
mix.copyDirectory(copyImgFiles, `${outputPath}/img`);
```

ファイルの場合（src/about.html など）は自動的にコピー対象となりますので不要です。

### CSS・SCSS

src/scss/style.scss は Webpack によるコンパイルが実行されます。 src/css/ にある css はコンパイルされず public の同様のフォルダにコピーが出力されます。
src/scss/以下のフォルダは[FLOCSS](https://github.com/hiloki/flocss)の設計をもとに構成されています。

FLOCSS
[https://github.com/hiloki/flocss](https://github.com/hiloki/flocss)

なおページ特有の CSS については/src/scss/page 以下に配置しています。

### JS

src/js/main.js は Webpack によるコンパイルが実行されます。 src/js/plugin/ にある js はコンパイルされず public の同様のフォルダにコピーが出力されます。

### フォント

src/fonts 内にサブセット化した Noto Sans が入っています。使用しない場合は削除してください。
