#!/bin/sh

# 真偽の扱いを統一するため文字列でコマンドの結果を保持するための定数
TRUE="true"
FALSE="false"

# 保持した実行結果の文字列をif文で使える様に終了コードに戻す
function return_exit_code {
  if [ $1 = $TRUE ]; then
    return 0
  else
    return 1
  fi
}

# 対話形式でy/nの質問をする
function ask_yes_no {
  while true; do
    read -p "$1 [y/n]:" ANS
    echo "\n"
    if [[ $ANS = [yY] ]]; then
      return 0
    elif [[ $ANS = [nN] ]]; then
      return 1
    else
      echo "yまたはnを入力してください\a\n"
    fi
  done
}

# terminalに表示する質問文
PAGE_QUESTION="画面を新しく作りますか？"
TEMPLATE_QUESTION="特定の画面の仕様に依存する要素・セクションを追加しますか？"
WIDGET_QUESTION="再利用可能なUIのブロックが含まれますか？"
SHARED_QUESTION="それは他のサイトでも使用できるような汎用性があるものですか？"
EXISTING_WIDGET_QUESTION="そのUIブロックは既存のものを使えますか？"
FEATURE_QUESTION="見た目だけでなく機能は含まれますか？"
EXISTING_FEATURE_QUESTION="その機能は既存のものを使えますか？"
ENTITY_QUESTION="特定のデータやBFFのAPIと関連しますか？"
EXISITING_ENTITY_QUESTION="そのデータ依存の処理・API通信処理は既存のものを使えますか？"
GENERATE_QUESTION="上記の判定結果に基づいてファイルを生成しますか？"

# 回答フラグ
IS_PAGE=$FALSE
IS_TEMPLATE=$FALSE
IS_WIDGET=$FALSE
IS_EXSISTING_WIDGET=$FALSE
IS_FEATURE=$FALSE
IS_EXSISTING_FEATURE=$FALSE
IS_ENTITY=$FALSE
IS_EXSISTING_ENTITY=$FALSE
IS_SHARED=$FALSE
IS_EXSISTING_SHARED=$FALSE
IS_GENERATE=$FALSE

# 質問開始
ask_yes_no $PAGE_QUESTION && IS_PAGE=$TRUE || IS_PAGE=$FALSE
ask_yes_no $TEMPLATE_QUESTION && IS_TEMPLATE=$TRUE || IS_TEMPLATE=$FALSE

ask_yes_no $WIDGET_QUESTION && IS_WIDGET=$TRUE || IS_WIDGET=$FALSE

if return_exit_code $IS_WIDGET; then
  ask_yes_no $SHARED_QUESTION && IS_SHARED=$TRUE || IS_SHARED=$FALSE

  if return_exit_code $IS_SHARED; then
    IS_WIDGET=$FALSE
  fi

  ask_yes_no $EXISTING_WIDGET_QUESTION && IS_EXSISTING_WIDGET=$TRUE || IS_EXSISTING_WIDGET=$FALSE
fi

ask_yes_no $FEATURE_QUESTION && IS_FEATURE=$TRUE || IS_FEATURE=$FALSE

if return_exit_code $IS_FEATURE; then
  ask_yes_no $EXISTING_FEATURE_QUESTION && IS_EXSISTING_FEATURE=$TRUE || IS_EXSISTING_FEATURE=$FALSE
fi

ask_yes_no $ENTITY_QUESTION && IS_ENTITY=$TRUE || IS_ENTITY=$FALSE

if return_exit_code $IS_ENTITY; then
  ask_yes_no $EXISITING_ENTITY_QUESTION && IS_EXSISTING_ENTITY=$TRUE || IS_EXSISTING_ENTITY=$FALSE
fi

# 結果出力
echo "===判定結果==="

return_exit_code $IS_PAGE && echo "pages: 新規作成" || echo "pages: 触らない"
return_exit_code $IS_TEMPLATE && echo "templates: 新規作成or編集" || echo "templates: 触らない"

if return_exit_code $IS_WIDGET; then
  return_exit_code $IS_EXSISTING_WIDGET && echo "widget: 既存のものを使う" || echo "widget: 新規作成"
else
  echo "widget: 触らない"
fi

if return_exit_code $IS_FEATURE; then
  return_exit_code $IS_EXSISTING_FEATURE && echo "feature: 既存のものを使う" || echo "feature: 新規作成"
else
  echo "feature: 触らない"
fi

if return_exit_code $IS_ENTITY; then
  return_exit_code $IS_EXSISTING_ENTITY && echo "entity: 既存のものを使う" || echo "entity: 新規作成"
else
  echo "entity: 触らない"
fi

if return_exit_code $IS_SHARED; then
  return_exit_code $IS_EXSISTING_WIDGET && echo "shared: 既存のものを使う" || echo "shared: 新規作成"
else
  echo "shared: 触らない"
fi

echo "\n"

ask_yes_no $GENERATE_QUESTION || return 0

# 結果を元にhygenでファイルを生成する
if return_exit_code $IS_ENTITY; then
  return_exit_code $IS_EXSISTING_ENTITY || echo "entitiesの作成" && yarn hygen:entities
fi

if return_exit_code $IS_FEATURE; then
  return_exit_code $IS_EXSISTING_FEATURE || echo "featuresの作成" && yarn hygen:features
fi

if return_exit_code $IS_WIDGET; then
  return_exit_code $IS_EXSISTING_WIDGET || echo "widgetsの作成" && yarn hygen:widgets
fi

if return_exit_code $IS_SHARED; then
  return_exit_code $IS_EXSISTING_WIDGET || echo "sharedの作成" && yarn hygen:shared
fi
